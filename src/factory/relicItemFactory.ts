import {relicsManifest} from "../exports/manifest/relicsManifest";
import {Relic, RelicSet} from "../exports/types";

export class RelicFactory implements IRelicBuilder {
    getInvalidRelic(): Relic {
        return {
            RelicName: "Relic Not Found",
            TypeId: RelicSet.None
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