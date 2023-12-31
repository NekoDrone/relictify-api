import {IRelicBuilder, RelicFactory} from "../../build/factory/relicItemFactory";
import {RelicType} from "../../build/exports/types";
import {relicsManifest} from "../../build/exports/manifest/relicsManifest";
import {RelicRoute} from "../../build/routes/relics";

beforeAll(() => {
    process.env.APP_AUTH_KEY = "testing";
    process.env.PROD_ENV = "test";
})

test("Invalid relic should return correctly.", () => {
    const builder: IRelicBuilder = new RelicFactory();
    const invalidRelic = builder.getInvalidRelic();
    expect(invalidRelic).toEqual({
        RelicName: "Relic Not Found",
        TypeId: RelicType.None
    });
});

test("Relics factory should produce correct result when given an ID to look up.", () => {
    const builder: IRelicBuilder = new RelicFactory();
    const relicItem = builder.getRelicById(RelicType.CavernBandOfSizzlingThunder);
    expect(relicItem).toEqual({
        RelicName: "Band of Sizzling Thunder",
        TypeId: RelicType.CavernBandOfSizzlingThunder
    })
})

test("Manifest should be loaded correctly by the builder.", () => {
    const builder = new RelicFactory();
    const manifest = builder.listAllRelics();
    expect(manifest).toEqual(relicsManifest)
})

test("Relic route handler should return correct invalid query", () => {
    const handler = new RelicRoute()
    const invalidRelic = handler.getRelicFromId(-10000);
    expect(invalidRelic).toEqual({
        RelicName: "Relic Not Found",
        TypeId: RelicType.None
    })
})

test("Relic route handler should return correct query", () => {
    const handler = new RelicRoute();
    const relicItem = handler.getRelicFromId(1);
    expect(relicItem).toEqual({
        RelicName: "Band of Sizzling Thunder",
        TypeId: RelicType.CavernBandOfSizzlingThunder
    })
})

test("Relic route handler should retrieve correct manifest.", () => {
    const handler = new RelicRoute();
    const manifest = handler.getManifest();
    expect(manifest).toEqual(relicsManifest);
})