import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import * as functions from 'firebase-functions';
import { RequestType, ResponseType } from '../types/types';
import { API_TOKEN } from '../constants/constants';
import { payloadValidation } from '../utils/payloadValidation';
import { InvalidInputError } from '../errors/InvalidInputError';
import { mapper } from '../utils/mapper';
import { RequestInput } from '../interfaces/RequestInput';
import serviceAccount from '../config/service-account.json';
import { CatDto } from '../dto/CatDto';
import { CloudDatabaseService } from '../services/CloudDatabaseService';
import { WebhookControllerSpecs } from '../interfaces/WebhookControllerSpecs';
import { CloudDatabaseServiceSpecs } from '../interfaces/CloudDatabaseServiceSpecs';
import { UnsupportedEventError } from '../errors/UnsupportedEventError';

export class WebhookController implements WebhookControllerSpecs {
    constructor(private cloudDatabaseService: CloudDatabaseServiceSpecs = new CloudDatabaseService()) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount as ServiceAccount)
        });
    }

    async handleRequest(request: RequestType, response: ResponseType) {
        const { method, body }: RequestInput = request;
        const authorization = request.header('Authorization');

        if (API_TOKEN === authorization && method === 'POST' && body.model === 'cat') {
            const validationStatus = payloadValidation(body.entry);

            if (validationStatus.isValid) {
                const data: CatDto = mapper(body.entry);

                switch (body.event) {
                    case 'entry.create':
                        await this.cloudDatabaseService.createDocument(data);
                        response.status(200).send('Ok create');
                        break;
                    case 'entry.update':
                        await this.cloudDatabaseService.updateDocument(data);
                        break;
                    case 'entry.delete':
                        await this.cloudDatabaseService.deleteDocument(data.id);
                        break;
                    default:
                        throw new UnsupportedEventError(`Event ${body.event} not supported`);
                }
            } else {
                functions.logger.error('Logger: InvalidInputError', validationStatus.errorsMessage);
                throw new InvalidInputError(validationStatus.errorsMessage);
            }
        } else {
            response.status(403).send('Forbidden');
        }
    }
}

export const webhookController = new WebhookController();
