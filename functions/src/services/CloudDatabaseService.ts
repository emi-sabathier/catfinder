import { firestore } from 'firebase-admin';
import { CatDto } from '../dto/CatDto';
import { COLLECTION_NAME } from '../constants/constants';
import { CloudDatabaseServiceSpecs } from '../interfaces/CloudDatabaseServiceSpecs';
import { DocumentSnapshotType } from '../types/types';
import { CloudDatabaseServiceError } from '../errors/CloudDatabaseServiceError';

export class CloudDatabaseService implements CloudDatabaseServiceSpecs {
    async getDocument(id: string): Promise<DocumentSnapshotType> {
        try {
            return await firestore().collection(COLLECTION_NAME).doc(id).get();
        } catch (error) {
            throw new CloudDatabaseServiceError(error.message);
        }
    }

    async createDocument(document: CatDto): Promise<void> {
        try {
            await firestore().collection(COLLECTION_NAME).doc(document.id).set(document);
        } catch (error) {
            throw new CloudDatabaseServiceError(error.message);
        }
    }

    async updateDocument(document: CatDto): Promise<void> {
        const data: DocumentSnapshotType = await this.getDocument(document.id);
        console.log('data', data);
        try {
            if (data.exists) {
                console.log('exists');
                await firestore().collection(COLLECTION_NAME).doc(document.id).update(document);
            } else {
                console.log('create');
                await this.createDocument(document);
            }
        } catch (error) {
            throw new CloudDatabaseServiceError(error.message);
        }
    }

    async deleteDocument(id: string): Promise<void> {
        try {
            await firestore().collection(COLLECTION_NAME).doc(id).delete();
        } catch (error) {
            throw new CloudDatabaseServiceError(error.message);
        }
    }
}
