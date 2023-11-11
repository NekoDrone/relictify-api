import {CharFactory, ICharBuilder} from "../../build/factory/characterItemFactory";
import {CharPath, CombatElement} from "../../build/exports/types";
import {characterManifest} from "../../build/exports/manifest/charactersManifest";
import {CharacterRoute} from "../../build/routes/characters";

beforeAll(() => {
    process.env.APP_AUTH_KEY = "testing";
    process.env.PROD_ENV = "test";
})

test("Invalid character should return correctly.", () => {
    const builder: ICharBuilder = new CharFactory();
    const invalidChar = builder.getInvalidChar();
    expect(invalidChar).toEqual({
        Element: CombatElement.None,
        Name: "Character Not Found",
        Path: CharPath.None,
        StartingAtk: 0,
        StartingDef: 0,
        StartingHp: 0,
        StartingSpd: 0,
        Rarity: 0
    });
})

test("Character factory should produce correct result when given an ID to look up.", () => {
    const builder: ICharBuilder = new CharFactory();
    const charItem = builder.getCharById("Hook");
    expect(charItem).toEqual({
        Element: CombatElement.Fire,
        Name: "Hook",
        Path: CharPath.Destruction,
        Rarity: 4,
        StartingHp: 163,
        StartingAtk: 81,
        StartingDef: 45,
        StartingSpd: 102
    })
})

test("Manifest should be returned correctly by the builder", () => {
    const builder: ICharBuilder = new CharFactory();
    const manifest = builder.listAllChars();
    expect(manifest).toEqual(characterManifest);
})

test("Character route handler should return correct invalid query.", () => {
    const handler = new CharacterRoute();
    const invalidChar = handler.getCharFromId("This should return invalid.");
    expect(invalidChar).toEqual({
        Element: CombatElement.None,
        Name: "Character Not Found",
        Path: CharPath.None,
        StartingAtk: 0,
        StartingDef: 0,
        StartingHp: 0,
        StartingSpd: 0,
        Rarity: 0
    });
})

test("Character route handler should return correct query.", () => {
    const handler = new CharacterRoute();
    const charItem = handler.getCharFromId("Hook");
    expect(charItem).toEqual({
        Element: CombatElement.Fire,
        Name: "Hook",
        Path: CharPath.Destruction,
        Rarity: 4,
        StartingHp: 163,
        StartingAtk: 81,
        StartingDef: 45,
        StartingSpd: 102
    });
})

test("Character route handler should retrieve correct manifest.", () => {
    const handler = new CharacterRoute();
    const manifest = handler.getManifest();
    expect(manifest).toEqual(characterManifest);
})