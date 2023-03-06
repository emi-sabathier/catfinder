import * as functions from 'firebase-functions';
import { HttpsFunction } from 'firebase-functions';
import { InternalServerError } from './errors/InternalServerError';
import { FUNCTIONS_REGION } from './constants/constants';
import { InvalidInputError } from './errors/InvalidInputError';
import { SchemaValidationError } from './errors/SchemaValidationError';
import { RequestType, ResponseType } from './types/types';
import { webhookController } from './controllers/webhookController';
import { UnsupportedEventError } from './errors/UnsupportedEventError';
import { CloudDatabaseServiceError } from './errors/CloudDatabaseServiceError';
import { ForbiddenError } from './errors/ForbiddenError';

export const webhook: HttpsFunction = FUNCTIONS_REGION.https.onRequest(
    async (request: RequestType, response: ResponseType): Promise<void> => {
        try {
            await webhookController.handleRequest(request, response);
        } catch (error) {
            if (
                error instanceof InvalidInputError ||
                error instanceof SchemaValidationError ||
                error instanceof UnsupportedEventError ||
                error instanceof CloudDatabaseServiceError ||
                error instanceof ForbiddenError
            ) {
                functions.logger.error('Logger:', error);
                throw error;
            } else {
                functions.logger.error('Logger: InternalServerError', error);
                throw new InternalServerError(error.message);
            }
        }
    }
);
