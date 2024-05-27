export type Character = {
    Id: number
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
    Physical,
    Ice,
    Wind,
    Fire,
    Lightning,
    Imaginary,
    Quantum
}

export enum CharPath {
    Destruction,
    Preservation,
    TheHunt,
    Erudition,
    Harmony,
    Nihility,
    Abundance
}

export type Relic = {
    Id: number;
    Name: string;
    TypeId: RelicSet;
}

export enum RelicSet {
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
    PlanarBrokenKeel,
    
    CavernAshblazingGrandDuke,
    CavernPrisonerInDeepConfinement,
    PlanarFirmamentFrontline,
    PlanarPenaconyLandOfTheDreams
}