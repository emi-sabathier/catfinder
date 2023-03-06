import { SociabilityModel } from './SociabilityModel';
import { RaceModel } from './RaceModel';
import { BehaviorModel } from './BehaviourModel';
import { BuildModel } from './BuildModel';
import { HealthModel } from './HealthModel';

export interface CatModel {
    id: number;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    priceMin: number;
    priceMax: number;
    picture?: never;
}

export type CatEntryModel = {
    race: RaceModel;
    sociability: SociabilityModel;
    behaviour: BehaviorModel;
    build: BuildModel;
    health: HealthModel;
} & CatModel;
