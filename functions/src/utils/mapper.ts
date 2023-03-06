import { CatEntryModel } from '../models/CatModel';
import { CatDto } from '../dto/CatDto';
import { dateFormatter } from './dateFormatter';

export const mapper = (entry: CatEntryModel): CatDto => {
    return {
        id: String(entry.id),
        description: entry.description,
        priceMin: entry.priceMin,
        priceMax: entry.priceMax,
        createdAt: dateFormatter(entry.createdAt),
        updatedAt: dateFormatter(entry.updatedAt),
        publishedAt: dateFormatter(entry.publishedAt),
        race: {
            id: String(entry.race.id),
            createdAt: entry.race.createdAt,
            updatedAt: entry.race.updatedAt,
            publishedAt: entry.race.publishedAt,
            raceName: entry.race.raceName,
            country: entry.race.country
        },
        sociability: {
            id: String(entry.sociability.id),
            childFriendly: entry.sociability.childFriendly,
            animalsFriendly: entry.sociability.animalsFriendly,
            personsFriendly: entry.sociability.personsFriendly,
            description: entry.sociability.description,
            createdAt: entry.sociability.createdAt,
            updatedAt: entry.sociability.updatedAt,
            publishedAt: entry.sociability.publishedAt,
            indoorCat: entry.sociability.indoorCat,
            outdoorCat: entry.sociability.outdoorCat
        },
        behaviour: {
            id: String(entry.behaviour.id),
            affectionate: entry.behaviour.affectionate,
            quiet: entry.behaviour.quiet,
            independant: entry.behaviour.independant,
            playful: entry.behaviour.playful,
            meowing: entry.behaviour.meowing,
            behaviour: entry.behaviour.behaviour,
            description: entry.behaviour.description,
            createdAt: entry.behaviour.createdAt,
            updatedAt: entry.behaviour.updatedAt,
            publishedAt: entry.behaviour.publishedAt
        },
        build: {
            id: String(entry.build.id),
            shape: entry.build.shape,
            fur: entry.build.fur,
            furLength: entry.build.furLength,
            head: entry.build.head,
            eyes: entry.build.eyes,
            ears: entry.build.ears,
            tail: entry.build.tail,
            hairLoss: entry.build.hairLoss,
            weightMin: entry.build.weightMin,
            weightMax: entry.build.weightMax,
            heightMin: entry.build.heightMin,
            heightMax: entry.build.heightMax,
            hypoallergenic: entry.build.hypoallergenic,
            createdAt: entry.build.createdAt,
            updatedAt: entry.build.updatedAt,
            publishedAt: entry.build.publishedAt
        },
        health: {
            id: String(entry.health.id),
            lifeMin: entry.health.lifeMin,
            lifeMax: entry.health.lifeMax,
            description: entry.health.description,
            health: entry.health.health,
            createdAt: entry.health.createdAt,
            updatedAt: entry.health.updatedAt,
            publishedAt: entry.health.publishedAt
        }
    };
};
