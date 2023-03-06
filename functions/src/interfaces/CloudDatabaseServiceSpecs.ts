import { CatDto } from '../dto/CatDto';
import { DocumentSnapshotType } from '../types/types';

export interface CloudDatabaseServiceSpecs {
    getDocument(id: string): Promise<DocumentSnapshotType>;
    createDocument(document: CatDto): Promise<void>;
    updateDocument(document: CatDto): Promise<void>;
    deleteDocument(id: string): Promise<void>;
}
