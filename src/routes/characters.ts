import * as express from "express"
import {CharFactory, ICharBuilder} from "../factory/characterItemFactory";
import {characterManifest} from "../exports/manifest/charactersManifest";
import {Character} from "../exports/types";
import e from "express";
import {IRouteHandler} from "../middleware/routeHandler";



export class CharacterRoute implements IRouteHandler {
    private builder: ICharBuilder = new CharFactory();
    handleRoute(req: e.Request, res: e.Response): void {
        console.log("Received request at route: /characters.")
        const reqQuery: string = req.query.id as string;
        if (reqQuery == null || reqQuery == "all" || reqQuery == "") {
            console.log("Request asked for all characters, returning full manifest.")
            const manifest = this.getManifest()
            res.send(manifest);
        } else {
            console.log(`Request asked for character ID ${reqQuery}.`)
            const charItem: Character = this.getCharFromId(reqQuery)
            res.send(charItem);
        }
    }
    
    getManifest(): Character[] {
        return characterManifest
    }
    
    getCharFromId(charId: string): Character {
        return this.builder.getCharById(charId) ?? this.builder.getInvalidChar();
    }   
}

const characters = express.Router()
const handler = new CharacterRoute()
characters.get('/', (req, res) => {
    handler.handleRoute(req, res);
})

export { characters as characters };