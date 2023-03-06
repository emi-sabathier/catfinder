import { RequestType, ResponseType } from '../types/types';

export interface WebhookControllerSpecs {
    handleRequest(request: RequestType, response: ResponseType): void;
}
