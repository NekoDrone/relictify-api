import {characterManifest} from "../exports/manifest/charactersManifest";
import {Character} from "../exports/types";


export default function characterFactory(characterId: String): Character {
    return characterManifest.filter((character) => character.Name == characterId )[0] ?? 
        (() => {throw new Error()});
}