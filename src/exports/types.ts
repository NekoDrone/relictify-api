export type Character = {
    Rarity: number,
    Name: string, 
    Element: CombatElement,
    Path: CharPath,
    StartingHp: number
    StartingAtk: number,
    StartingDef: number, 
    StartingSpd: number,
}

export enum CombatElement {
    None,
    Physical,
    Ice,
    Wind,
    Fire,
    Lightning,
    Imaginary,
    Quantum
}

export enum CharPath {
    None,
    Destruction,
    Preservation,
    TheHunt,
    Erudition,
    Harmony,
    Nihility,
    Abundance
}

export type Relic = {
    RelicName: string;
    TypeId: RelicType;
}

export enum RelicType {
    None,

    CavernBandOfSizzlingThunder,
    CavernChampionOfStreetwiseBoxing,
    CavernEagleOfTwilightLine,
    CavernFiresmithOfLavaForging,
    CavernGeniusOfBrilliantStars,
    CavernGuardOfWutheringSnow,
    CavernHunterOfGlacialForest,
    CavernKnightOfPurityPalace,
    CavernMusketeerOfWildWheat,
    CavernPasserbyOfWanderingCloud,
    CavernThiefOfShootingMeteor,
    CavernWastelanderOfBanditryDesert,

    PlanarBelobogOfTheArchitects,
    PlanarCelestialDifferentiator,
    PlanarFleetOfTheAgeless,
    PlanarInertSalsotto,
    PlanarPanCosmicCommercialEnterprise,
    PlanarSpaceSealingStation,
    PlanarSprightlyVonwacq,
    PlanarTaliaKingdomOfBanditry,

    CavernLongevousDisciple,
    CavernMessengerTraversingHackerspace,
    PlanarRutilantArena,
    PlanarBrokenKeel
}