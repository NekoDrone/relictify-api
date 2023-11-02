import {characterManifest} from "../exports/manifest/charactersManifest";
import {relicsManifest} from "../exports/manifest/relicsManifest";
import {Relic} from "../exports/types";

export default function relicFactory(relicId: number): Relic {
    return relicsManifest.filter((relic) => relic.TypeId == relicId )[0] ??
        (() => {throw new Error()});
}