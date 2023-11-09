import {relicsManifest} from "../exports/manifest/relicsManifest";
import {Relic, RelicType} from "../exports/types";

export default function relicFactory(relicId: number): Relic {
    return relicsManifest.filter((relic) => relic.TypeId == relicId )[0]
}

export class RelicFactory implements IRelicBuilder {
    getInvalidRelic(): Relic {
        return {
            RelicName: "Relic Not Found",
            TypeId: RelicType.None
        };
    }

    getRelicById(relicId: number): Relic {
        return relicsManifest.filter((relic) => relic.TypeId == relicId )[0]
    }

    listAllRelics(): Relic[] {
        return relicsManifest;
    }

}

export interface IRelicBuilder {
    listAllRelics(): Relic[];
    getRelicById(relicId: number): Relic;
    getInvalidRelic(): Relic;
}