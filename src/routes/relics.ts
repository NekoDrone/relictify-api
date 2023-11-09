import * as express from "express"
import {IRelicBuilder, RelicFactory} from "../factory/relicItemFactory";
import {Relic} from "../exports/types";
import {IRouteHandler} from "../middleware/routeHandler";
import e from "express";


export class RelicRoute implements IRouteHandler {
    private builder: IRelicBuilder = new RelicFactory();
    handleRoute(req: e.Request, res: e.Response): void {
        console.log("Received request at route: /relics.")
        const reqQuery: string = req.query.id as string;
        if (reqQuery == null || reqQuery == "all" || reqQuery == "") {
            console.log("Request asked for all relics, returning full manifest.")
            const manifest = this.getManifest()
            res.send(manifest);
        }
        else {
            console.log(`Request asked for relic ID ${reqQuery}.`)
            const relicId = Number.parseInt(reqQuery);
            const relicItem = this.getRelicFromId(relicId);
            res.send(relicItem)
        }
    }
    
    getManifest(): Relic[] {
        return this.builder.listAllRelics()
    }
    
    getRelicFromId(relicId: number): Relic {
        return this.builder.getRelicById(relicId) ?? this.builder.getInvalidRelic();
    }
}


const relics = express.Router()
const handler = new RelicRoute();
relics.get('/', (req, res) => {
    handler.handleRoute(req, res);
})

export { relics as relics }