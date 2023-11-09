import * as express from "express"
import characterFactory from "../factory/characterItemFactory";
import {characterManifest} from "../exports/manifest/charactersManifest";
import {Character, CharPath, CombatElement} from "../exports/types";

const characters = express.Router()

characters.get('/', (req, res) => {
    console.log("Received request at route: /characters.")
    const reqQuery: string = req.query.id as string;
    if (reqQuery == null || reqQuery == "all" || reqQuery == "") {
        console.log("Request asked for all characters, returning full manifest.")
        res.send(characterManifest);
    }
    else {
        console.log(`Request asked for character ID ${reqQuery}.`)
        const charItem: Character = characterFactory(reqQuery) ?? {
            Element: CombatElement.None,
            Name: "Character Not Found",
            Path: CharPath.None,
            StartingAtk: 0,
            StartingDef: 0,
            StartingHp: 0,
            StartingSpd: 0,
            Rarity: 0
        }
        res.send(charItem);
    }
})

export { characters as characters };