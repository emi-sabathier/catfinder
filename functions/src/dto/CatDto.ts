import { BuildDto } from './BuildDto';
import { BehaviourDto } from './BehaviourDto';
import { RaceDto } from './RaceDto';
import { HealthDto } from './HealthDto';
import { SociabilityDto } from './SociabilityDto';

export interface CatDto {
    id: string;
    description: string;
    priceMin: number;
    priceMax: number;
    picture?: never;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    behaviour: BehaviourDto;
    build: BuildDto;
    health: HealthDto;
    race: RaceDto;
    sociability: SociabilityDto;
}
