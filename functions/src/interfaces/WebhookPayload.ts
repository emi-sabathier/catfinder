import { CatEntryModel } from '../models/CatModel';

type EventName = 'create' | 'update' | 'delete';
export type EventType = `entry.${EventName}`;

export interface WebhookPayload {
    event: EventType;
    model: string;
    entry: CatEntryModel;
}
