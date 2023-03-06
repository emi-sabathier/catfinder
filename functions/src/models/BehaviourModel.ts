import { BehaviourType } from '../types/types';

export interface BehaviorModel {
    id: number;
    affectionate: number;
    quiet: number;
    independant: number;
    playful: number;
    meowing: number;
    behaviour: BehaviourType;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}
