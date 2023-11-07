import * as express from "express"
import characterFactory from "../factory/characterItemFactory";
import {characterManifest} from "../exports/manifest/charactersManifest";
import {Character, CharPath, CombatElement} from "../exports/types";

const characters = express.Router()

characters.get('/', (req, res) => {
    res.send(characterManifest);
})

characters.get('/:charId', (req, res) => {
    const charId = req.params.charId;
    const character: Character = characterFactory(charId) ?? {
        Element: CombatElement.None,
        Name: "Character Not Found",
        Path: CharPath.None,
        StartingAtk: 0,
        StartingDef: 0,
        StartingHp: 0,
        StartingSpd: 0,
        Rarity: 0
    };
    res.send(character);
})

export { characters as characters };