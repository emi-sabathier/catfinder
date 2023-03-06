import { FurLengthType, HairLossType } from '../types/types';

export interface BuildDto {
    id: string;
    shape: string;
    fur: string;
    furLength: FurLengthType;
    head: string;
    eyes: string;
    ears: string;
    tail: string;
    hairLoss: HairLossType;
    weightMin: number;
    weightMax: number;
    heightMin: number;
    heightMax: number;
    hypoallergenic: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
}
