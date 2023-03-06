import { WebhookPayload } from './WebhookPayload';

export interface RequestInput {
    body: WebhookPayload;
    method: string;
}
