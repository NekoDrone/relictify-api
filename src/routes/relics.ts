import * as express from "express"
import {relicsManifest} from "../exports/manifest/relicsManifest";
import relicFactory from "../factory/relicItemFactory";
import {RelicType} from "../exports/types";

const relics = express.Router()

relics.get('/', (req, res) => {
    console.log("Received request at route: /relics.")
    const reqQuery: string = req.query.id as string;
    if (reqQuery == null || reqQuery == "all") {
        console.log("Request asked for all relics, returning full manifest.")
        res.send(relicsManifest);
    }
    else {
        console.log(`Request asked for relic ID ${reqQuery}.`)
        const relicId = Number.parseInt(reqQuery);
        const relicItem = relicFactory(relicId) ?? {
            RelicName: "Relic Not Found",
            TypeId: RelicType.None
        }
        res.send(relicItem)
    }
    
})

export { relics as relics }