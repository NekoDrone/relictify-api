import * as express from "express"
import {relicsManifest} from "../exports/manifest/relicsManifest";
import relicFactory from "../factory/relicItemFactory";
import {Relic, RelicType} from "../exports/types";

const relics = express.Router()

relics.get('/', (req, res) => {
    res.send(relicsManifest);
})

relics.get('/:relicId', (req, res) => {
    const relicId = Number.parseInt(req.params.relicId);
    const relicItem: Relic = relicFactory(relicId) ?? {
        RelicName: "Relic Not Found",
        TypeId: RelicType.None
    }
    res.send(relicItem);
})

export { relics as relics }