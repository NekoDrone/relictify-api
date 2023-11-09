import {characterManifest} from "../exports/manifest/charactersManifest";
import {Character, CharPath, CombatElement} from "../exports/types";

export class CharFactory implements ICharBuilder {
    getCharById(charId: string): Character {
        return characterManifest.filter((character) => character.Name == charId )[0]
    }

    listAllChars(): Character[] {
        return characterManifest;
    }

    getInvalidChar(): Character {
        return {
            Element: CombatElement.None,
            Name: "Character Not Found",
            Path: CharPath.None,
            StartingAtk: 0,
            StartingDef: 0,
            StartingHp: 0,
            StartingSpd: 0,
            Rarity: 0
        }
    }
    
}

export interface ICharBuilder {
    listAllChars(): Character[];
    getCharById(charId: string): Character;
    getInvalidChar(): Character;
}