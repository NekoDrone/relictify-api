import {Character, CharPath, CombatElement} from "../types"

// Following are Characters you use while going through the main story in Herta Space Station.
export const trailblazerDestruction: Character = {
    Element: CombatElement.Physical,
    Name: "Trailblazer - Destruction",
    Path: CharPath.Destruction,
    Rarity: 5,
    StartingHp: 163,
    StartingAtk: 84,
    StartingDef: 62,
    StartingSpd: 100
};

export const march7th: Character = {
    Element: CombatElement.Ice,
    Name: "March 7th",
    Path: CharPath.Preservation,
    Rarity: 4,
    StartingHp: 144,
    StartingAtk: 69,
    StartingDef: 78,
    StartingSpd: 101
}

export const danHeng: Character = {
    Element: CombatElement.Wind,
    Name: "Dan Heng",
    Path: CharPath.TheHunt,
    Rarity: 4,
    StartingHp: 120,
    StartingAtk: 74,
    StartingDef: 54,
    StartingSpd: 110
}

export const himeko: Character = {
    Element: CombatElement.Fire,
    Name: "Himeko",
    Path: CharPath.Erudition,
    Rarity: 5,
    StartingHp: 142,
    StartingAtk: 102,
    StartingDef: 59,
    StartingSpd: 96
}

export const asta: Character = {
    Element: CombatElement.Fire,
    Name: "Asta",
    Path: CharPath.Harmony,
    Rarity: 4,
    StartingHp: 139,
    StartingAtk: 69,
    StartingDef: 63,
    StartingSpd: 106
}

// Following are Standard 4*s added in 1.0
export const arlan: Character = {
    Element: CombatElement.Lightning,
    Name: "Arlan",
    Path: CharPath.Destruction,
    Rarity: 4,
    StartingHp: 163,
    StartingAtk: 81,
    StartingDef: 45,
    StartingSpd: 102
};

export const herta: Character = {
    Element: CombatElement.Ice,
    Name: "Herta",
    Path: CharPath.Erudition,
    Rarity: 4,
    StartingHp: 129,
    StartingAtk: 79,
    StartingDef: 54,
    StartingSpd: 100
}

export const hook: Character = {
    Element: CombatElement.Fire,
    Name: "Hook",
    Path: CharPath.Destruction,
    Rarity: 4,
    StartingHp: 163,
    StartingAtk: 81,
    StartingDef: 45,
    StartingSpd: 102
}

export const natasha: Character = {
    Element: CombatElement.Physical,
    Name: "Natasha",
    Path: CharPath.Abundance,
    Rarity: 4,
    StartingHp: 158,
    StartingAtk: 64,
    StartingDef: 69,
    StartingSpd: 98
}
export const pela: Character = {
    Element: CombatElement.Ice,
    Name: "Pela",
    Path: CharPath.Nihility,
    Rarity: 4,
    StartingHp: 134,
    StartingAtk: 74,
    StartingDef: 64,
    StartingSpd: 105
}

export const qingque: Character = {
    Element: CombatElement.Quantum,
    Name: "Qingque",
    Path: CharPath.Erudition,
    Rarity: 4,
    StartingHp: 139,
    StartingAtk: 88,
    StartingDef: 60,
    StartingSpd: 98
}
export const sampo: Character = {
    Element: CombatElement.Wind,
    Name: "Sampo",
    Path: CharPath.Nihility,
    Rarity: 4,
    StartingHp: 139,
    StartingAtk: 84,
    StartingDef: 54,
    StartingSpd: 102
}
export const serval: Character = {
    Element: CombatElement.Lightning,
    Name: "Serval",
    Path: CharPath.Erudition,
    Rarity: 4,
    StartingHp: 124,
    StartingAtk: 88,
    StartingDef: 51,
    StartingSpd: 104
}
export const sushang: Character = {
    Element: CombatElement.Physical,
    Name: "Sushang",
    Path: CharPath.TheHunt,
    Rarity: 4,
    StartingHp: 124,
    StartingAtk: 76,
    StartingDef: 57,
    StartingSpd: 107
}
export const tingyun: Character = {
    Element: CombatElement.Lightning,
    Name: "Tingyun",
    Path: CharPath.Harmony,
    Rarity: 4,
    StartingHp: 115,
    StartingAtk: 72,
    StartingDef: 54,
    StartingSpd: 112
}

// Following are Standard Banner 5*s minus Himeko (because you get to trial her in the main story)
export const bailu: Character = {
    Element: CombatElement.Lightning,
    Name: "Bailu",
    Path: CharPath.Abundance,
    Rarity: 5,
    StartingHp: 179,
    StartingAtk: 76,
    StartingDef: 66,
    StartingSpd: 98
}
export const bronya: Character = {
    Element: CombatElement.Wind,
    Name: "Bronya",
    Path: CharPath.Harmony,
    Rarity: 5,
    StartingHp: 168,
    StartingAtk: 79,
    StartingDef: 72,
    StartingSpd: 100
}
export const clara: Character = {
    Element: CombatElement.Physical,
    Name: "Clara",
    Path: CharPath.Destruction,
    Rarity: 5,
    StartingHp: 168,
    StartingAtk: 100,
    StartingDef: 66,
    StartingSpd: 90
}
export const gepard: Character = {
    Element: CombatElement.Ice,
    Name: "Gepard",
    Path: CharPath.Preservation,
    Rarity: 5,
    StartingHp: 190,
    StartingAtk: 73,
    StartingDef: 89,
    StartingSpd: 92
}
export const trailblazerPreservation: Character = {
    Element: CombatElement.Fire,
    Name: "Trailblazer - Preservation",
    Path: CharPath.Preservation,
    Rarity: 5,
    StartingHp: trailblazerDestruction.StartingHp,
    StartingAtk: trailblazerDestruction.StartingAtk,
    StartingDef: trailblazerDestruction.StartingDef,
    StartingSpd: trailblazerDestruction.StartingSpd
}
export const welt: Character = {
    Element: CombatElement.Imaginary,
    Name: "Welt",
    Path: CharPath.Nihility,
    Rarity: 5,
    StartingHp: 153,
    StartingAtk: 84,
    StartingDef: 69,
    StartingSpd: 102
}
export const yanqing: Character = {
    Element: CombatElement.Ice,
    Name: "Yanqing",
    Path: CharPath.TheHunt,
    Rarity: 5,
    StartingHp: 121,
    StartingAtk: 92,
    StartingDef: 56,
    StartingSpd: 109
}

// Following are exclusive Event Banner 5*s added since Seele banner in 1.0.
export const seele: Character = {
    Element: CombatElement.Quantum,
    Name: "Seele",
    Path: CharPath.TheHunt,
    Rarity: 5,
    StartingHp: 126,
    StartingAtk: 87,
    StartingDef: 49,
    StartingSpd: 115
}
export const jingYuan: Character = {
    Element: CombatElement.Lightning,
    Name: "Jing Yuan",
    Path: CharPath.Erudition,
    Rarity: 5,
    StartingHp: 158,
    StartingAtk: 95,
    StartingDef: 66,
    StartingSpd: 99
}

// Following are characters added in 1.1.
export const yukong: Character = {
    Element: CombatElement.Imaginary,
    Name: "Yukong",
    Path: CharPath.Harmony,
    Rarity: 4,
    StartingHp: 124,
    StartingAtk: 81,
    StartingDef: 51,
    StartingSpd: 107
}
export const silverWolf: Character = {
    Element: CombatElement.Quantum,
    Name: "Silver Wolf",
    Path: CharPath.Nihility,
    Rarity: 5,
    StartingHp: 142,
    StartingAtk: 87,
    StartingDef: 62,
    StartingSpd: 107
}
export const luocha: Character = {
    Element: CombatElement.Imaginary,
    Name: "Luocha",
    Path: CharPath.Abundance,
    Rarity: 5,
    StartingHp: 174,
    StartingAtk: 102,
    StartingDef: 49,
    StartingSpd: 101
}

// Following are characters added in 1.2.
export const luka: Character = {
    Element: CombatElement.Physical,
    Name: "Luka",
    Path: CharPath.Nihility,
    Rarity: 4,
    StartingHp: 124,
    StartingAtk: 79,
    StartingDef: 66,
    StartingSpd: 103
}
export const blade: Character = {
    Element: CombatElement.Wind,
    Name: "Blade",
    Path: CharPath.Destruction,
    Rarity: 5,
    StartingHp: 184,
    StartingAtk: 73,
    StartingDef: 66,
    StartingSpd: 97
}
export const kafka: Character = {
    Element: CombatElement.Lightning,
    Name: "Kafka",
    Path: CharPath.Nihility,
    Rarity: 5,
    StartingHp: 147,
    StartingAtk: 92,
    StartingDef: 66,
    StartingSpd: 100
}

// Following are characters added in 1.3.
export const lynx: Character = {
    Element: CombatElement.Quantum,
    Name: "Lynx",
    Path: CharPath.Abundance,
    Rarity: 4,
    StartingHp: 144,
    StartingAtk: 67,
    StartingDef: 75,
    StartingSpd: 100
}
export const danHengImbibitorLunae: Character = {
    Element: CombatElement.Imaginary,
    Name: "Dan Heng • Imbibitor Lunae",
    Path: CharPath.Destruction,
    Rarity: 5,
    StartingHp: 168,
    StartingAtk: 95,
    StartingDef: 19,
    StartingSpd: 102
}
export const fuXuan: Character = {
    Element: CombatElement.Quantum,
    Name: "Fu Xuan",
    Path: CharPath.Preservation,
    Rarity: 5,
    StartingHp: 200,
    StartingAtk: 63,
    StartingDef: 82,
    StartingSpd: 100
}

// Following are characters added in 1.4.
export const guinaifen: Character = {
    Element: CombatElement.Fire,
    Name: "Guinaifen",
    Path: CharPath.Nihility,
    Rarity: 4,
    StartingHp: 120,
    StartingAtk: 79,
    StartingDef: 60,
    StartingSpd: 106
}

export const jingliu: Character = {
    Element: CombatElement.Ice,
    Name: "Jingliu",
    Path: CharPath.Destruction,
    Rarity: 5,
    StartingHp: 195,
    StartingAtk: 92,
    StartingDef: 66,
    StartingSpd: 96
}
export const topazAndNumby: Character = {
    Element: CombatElement.Fire,
    Name: "Topaz and Numby",
    Path: CharPath.TheHunt,
    Rarity: 5,
    StartingHp: 126,
    StartingAtk: 84,
    StartingDef: 56,
    StartingSpd: 110
}

export const huohuo: Character = {
    Element: CombatElement.Wind,
    Name: "Huohuo",
    Path: CharPath.Abundance,
    Rarity: 5,
    StartingHp: 184,
    StartingAtk: 81,
    StartingDef: 69,
    StartingSpd: 98
}

export const argenti: Character = {
    Element: CombatElement.Physical,
    Name: "Argenti",
    Path: CharPath.Erudition,
    Rarity: 5,
    StartingHp: 142,
    StartingAtk: 100,
    StartingDef: 49,
    StartingSpd: 103
}

export const hanya: Character = {
    Element: CombatElement.Physical,
    Name: "Hanya",
    Path: CharPath.Harmony,
    Rarity: 4,
    StartingHp: 124,
    StartingAtk: 76,
    StartingDef: 48,
    StartingSpd: 110
}

// export const template: Character = {
//     Element: CombatElement,
//     Name: "",
//     Path: CharPath,
//     Rarity: ,
//     StartingHp: ,
//     StartingAtk: ,
//     StartingDef: ,
//     StartingSpd: 
// }
export const characterManifest: Character[] = [
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


