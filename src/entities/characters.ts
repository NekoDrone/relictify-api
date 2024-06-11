// Following are Characters you use while going through the main story in Herta Space Station.
import { CharPath, CombatElement } from "@prisma/client";

export const trailblazerDestruction = {
    element: CombatElement.PHYSICAL,
    name: "Trailblazer - Destruction",
    path: CharPath.DESTRUCTION,
    rarity: 5,
    startingHp: 163,
    startingAtk: 84,
    startingDef: 62,
    startingSpd: 100
};

export const march7th = {
    element: CombatElement.ICE,
    name: "March 7th",
    path: CharPath.PRESERVATION,
    rarity: 4,
    startingHp: 144,
    startingAtk: 69,
    startingDef: 78,
    startingSpd: 101
}

export const danHeng = {
    element: CombatElement.WIND,
    name: "Dan Heng",
    path: CharPath.HUNT,
    rarity: 4,
    startingHp: 120,
    startingAtk: 74,
    startingDef: 54,
    startingSpd: 110
}

export const himeko = {
    element: CombatElement.FIRE,
    name: "Himeko",
    path: CharPath.ERUDITION,
    rarity: 5,
    startingHp: 142,
    startingAtk: 102,
    startingDef: 59,
    startingSpd: 96
}

export const asta = {
    element: CombatElement.FIRE,
    name: "Asta",
    path: CharPath.HARMONY,
    rarity: 4,
    startingHp: 139,
    startingAtk: 69,
    startingDef: 63,
    startingSpd: 106
}

// Following are Standard 4*s added in 1.0
export const arlan = {
    element: CombatElement.LIGHTNING,
    name: "Arlan",
    path: CharPath.DESTRUCTION,
    rarity: 4,
    startingHp: 163,
    startingAtk: 81,
    startingDef: 45,
    startingSpd: 102
};

export const herta = {
    element: CombatElement.ICE,
    name: "Herta",
    path: CharPath.ERUDITION,
    rarity: 4,
    startingHp: 129,
    startingAtk: 79,
    startingDef: 54,
    startingSpd: 100
}

export const hook = {
    element: CombatElement.FIRE,
    name: "Hook",
    path: CharPath.DESTRUCTION,
    rarity: 4,
    startingHp: 163,
    startingAtk: 81,
    startingDef: 45,
    startingSpd: 102
}

export const natasha = {
    element: CombatElement.PHYSICAL,
    name: "Natasha",
    path: CharPath.ABUNDANCE,
    rarity: 4,
    startingHp: 158,
    startingAtk: 64,
    startingDef: 69,
    startingSpd: 98
}
export const pela = {
    element: CombatElement.ICE,
    name: "Pela",
    path: CharPath.NIHILITY,
    rarity: 4,
    startingHp: 134,
    startingAtk: 74,
    startingDef: 64,
    startingSpd: 105
}

export const qingque = {
    element: CombatElement.QUANTUM,
    name: "Qingque",
    path: CharPath.ERUDITION,
    rarity: 4,
    startingHp: 139,
    startingAtk: 88,
    startingDef: 60,
    startingSpd: 98
}
export const sampo = {
    element: CombatElement.WIND,
    name: "Sampo",
    path: CharPath.NIHILITY,
    rarity: 4,
    startingHp: 139,
    startingAtk: 84,
    startingDef: 54,
    startingSpd: 102
}
export const serval = {
    element: CombatElement.LIGHTNING,
    name: "Serval",
    path: CharPath.ERUDITION,
    rarity: 4,
    startingHp: 124,
    startingAtk: 88,
    startingDef: 51,
    startingSpd: 104
}
export const sushang = {
    element: CombatElement.PHYSICAL,
    name: "Sushang",
    path: CharPath.HUNT,
    rarity: 4,
    startingHp: 124,
    startingAtk: 76,
    startingDef: 57,
    startingSpd: 107
}
export const tingyun = {
    element: CombatElement.LIGHTNING,
    name: "Tingyun",
    path: CharPath.HARMONY,
    rarity: 4,
    startingHp: 115,
    startingAtk: 72,
    startingDef: 54,
    startingSpd: 112
}

// Following are Standard Banner 5*s minus Himeko (because you get to trial her in the main story)
export const bailu = {
    element: CombatElement.LIGHTNING,
    name: "Bailu",
    path: CharPath.ABUNDANCE,
    rarity: 5,
    startingHp: 179,
    startingAtk: 76,
    startingDef: 66,
    startingSpd: 98
}
export const bronya = {
    element: CombatElement.WIND,
    name: "Bronya",
    path: CharPath.HARMONY,
    rarity: 5,
    startingHp: 168,
    startingAtk: 79,
    startingDef: 72,
    startingSpd: 100
}
export const clara = {
    element: CombatElement.PHYSICAL,
    name: "Clara",
    path: CharPath.DESTRUCTION,
    rarity: 5,
    startingHp: 168,
    startingAtk: 100,
    startingDef: 66,
    startingSpd: 90
}
export const gepard = {
    element: CombatElement.ICE,
    name: "Gepard",
    path: CharPath.PRESERVATION,
    rarity: 5,
    startingHp: 190,
    startingAtk: 73,
    startingDef: 89,
    startingSpd: 92
}
export const trailblazerPreservation = {
    element: CombatElement.FIRE,
    name: "Trailblazer - PRESERVATION",
    path: CharPath.PRESERVATION,
    rarity: 5,
    startingHp: trailblazerDestruction.startingHp,
    startingAtk: trailblazerDestruction.startingAtk,
    startingDef: trailblazerDestruction.startingDef,
    startingSpd: trailblazerDestruction.startingSpd
}
export const welt = {
    element: CombatElement.IMAGINARY,
    name: "Welt",
    path: CharPath.NIHILITY,
    rarity: 5,
    startingHp: 153,
    startingAtk: 84,
    startingDef: 69,
    startingSpd: 102
}
export const yanqing = {
    element: CombatElement.ICE,
    name: "Yanqing",
    path: CharPath.HUNT,
    rarity: 5,
    startingHp: 121,
    startingAtk: 92,
    startingDef: 56,
    startingSpd: 109
}

// Following are exclusive Event Banner 5*s added since Seele banner in 1.0.
export const seele = {
    element: CombatElement.QUANTUM,
    name: "Seele",
    path: CharPath.HUNT,
    rarity: 5,
    startingHp: 126,
    startingAtk: 87,
    startingDef: 49,
    startingSpd: 115
}
export const jingYuan = {
    element: CombatElement.LIGHTNING,
    name: "Jing Yuan",
    path: CharPath.ERUDITION,
    rarity: 5,
    startingHp: 158,
    startingAtk: 95,
    startingDef: 66,
    startingSpd: 99
}

// Following are characters added in 1.1.
export const yukong = {
    element: CombatElement.IMAGINARY,
    name: "Yukong",
    path: CharPath.HARMONY,
    rarity: 4,
    startingHp: 124,
    startingAtk: 81,
    startingDef: 51,
    startingSpd: 107
}
export const silverWolf = {
    element: CombatElement.QUANTUM,
    name: "Silver Wolf",
    path: CharPath.NIHILITY,
    rarity: 5,
    startingHp: 142,
    startingAtk: 87,
    startingDef: 62,
    startingSpd: 107
}
export const luocha = {
    element: CombatElement.IMAGINARY,
    name: "Luocha",
    path: CharPath.ABUNDANCE,
    rarity: 5,
    startingHp: 174,
    startingAtk: 102,
    startingDef: 49,
    startingSpd: 101
}

// Following are characters added in 1.2.
export const luka = {
    element: CombatElement.PHYSICAL,
    name: "Luka",
    path: CharPath.NIHILITY,
    rarity: 4,
    startingHp: 124,
    startingAtk: 79,
    startingDef: 66,
    startingSpd: 103
}
export const blade = {
    element: CombatElement.WIND,
    name: "Blade",
    path: CharPath.DESTRUCTION,
    rarity: 5,
    startingHp: 184,
    startingAtk: 73,
    startingDef: 66,
    startingSpd: 97
}
export const kafka = {
    element: CombatElement.LIGHTNING,
    name: "Kafka",
    path: CharPath.NIHILITY,
    rarity: 5,
    startingHp: 147,
    startingAtk: 92,
    startingDef: 66,
    startingSpd: 100
}

// Following are characters added in 1.3.
export const lynx = {
    element: CombatElement.QUANTUM,
    name: "Lynx",
    path: CharPath.ABUNDANCE,
    rarity: 4,
    startingHp: 144,
    startingAtk: 67,
    startingDef: 75,
    startingSpd: 100
}
export const danHengImbibitorLunae = {
    element: CombatElement.IMAGINARY,
    name: "Dan Heng • Imbibitor Lunae",
    path: CharPath.DESTRUCTION,
    rarity: 5,
    startingHp: 168,
    startingAtk: 95,
    startingDef: 19,
    startingSpd: 102
}
export const fuXuan = {
    element: CombatElement.QUANTUM,
    name: "Fu Xuan",
    path: CharPath.PRESERVATION,
    rarity: 5,
    startingHp: 200,
    startingAtk: 63,
    startingDef: 82,
    startingSpd: 100
}

// Following are characters added in 1.4.
export const guinaifen = {
    element: CombatElement.FIRE,
    name: "Guinaifen",
    path: CharPath.NIHILITY,
    rarity: 4,
    startingHp: 120,
    startingAtk: 79,
    startingDef: 60,
    startingSpd: 106
}

export const jingliu = {
    element: CombatElement.ICE,
    name: "Jingliu",
    path: CharPath.DESTRUCTION,
    rarity: 5,
    startingHp: 195,
    startingAtk: 92,
    startingDef: 66,
    startingSpd: 96
}
export const topazAndNumby = {
    element: CombatElement.FIRE,
    name: "Topaz and Numby",
    path: CharPath.HUNT,
    rarity: 5,
    startingHp: 126,
    startingAtk: 84,
    startingDef: 56,
    startingSpd: 110
}

export const huohuo = {
    element: CombatElement.WIND,
    name: "Huohuo",
    path: CharPath.ABUNDANCE,
    rarity: 5,
    startingHp: 184,
    startingAtk: 81,
    startingDef: 69,
    startingSpd: 98
}

export const argenti = {
    element: CombatElement.PHYSICAL,
    name: "Argenti",
    path: CharPath.ERUDITION,
    rarity: 5,
    startingHp: 142,
    startingAtk: 100,
    startingDef: 49,
    startingSpd: 103
}

export const hanya = {
    element: CombatElement.PHYSICAL,
    name: "Hanya",
    path: CharPath.HARMONY,
    rarity: 4,
    startingHp: 124,
    startingAtk: 76,
    startingDef: 48,
    startingSpd: 110
}

// export const template = {
//     element: CombatElement,
//     name: "",
//     path: CharPath,
//     rarity: ,
//     startingHp: ,
//     startingAtk: ,
//     startingDef: ,
//     startingSpd: 
// }
export const allChars: any = [
    trailblazerDestruction,
    march7th,
    danHeng,
    himeko,
    asta,
    arlan,
    herta,
    hook,
    natasha,
    pela,
    qingque,
    sampo,
    serval,
    sushang,
    tingyun,
    bailu,
    bronya,
    clara,
    gepard,
    trailblazerPreservation,
    welt,
    yanqing,
    seele,
    jingYuan,
    yukong,
    silverWolf,
    luocha,
    luka,
    blade,
    kafka,
    lynx,
    danHengImbibitorLunae,
    fuXuan,
    guinaifen,
    jingliu,
    topazAndNumby,
    huohuo,
    argenti,
    hanya
];


