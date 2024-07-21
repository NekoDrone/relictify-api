// Following are Characters you use while going through the main story in Herta Space Station.
import { CharPath, CombatElement } from "./types";

export const trailblazerDestruction = {
  element: CombatElement.PHYSICAL,
  name: "Trailblazer - Destruction",
  path: CharPath.DESTRUCTION,
  rarity: 5,
  starting_hp: 163,
  starting_atk: 84,
  starting_def: 62,
  starting_spd: 100
};

export const march7th = {
  element: CombatElement.ICE,
  name: "March 7th",
  path: CharPath.PRESERVATION,
  rarity: 4,
  starting_hp: 144,
  starting_atk: 69,
  starting_def: 78,
  starting_spd: 101
}

export const danHeng = {
  element: CombatElement.WIND,
  name: "Dan Heng",
  path: CharPath.HUNT,
  rarity: 4,
  starting_hp: 120,
  starting_atk: 74,
  starting_def: 54,
  starting_spd: 110
}

export const himeko = {
  element: CombatElement.FIRE,
  name: "Himeko",
  path: CharPath.ERUDITION,
  rarity: 5,
  starting_hp: 142,
  starting_atk: 102,
  starting_def: 59,
  starting_spd: 96
}

export const asta = {
  element: CombatElement.FIRE,
  name: "Asta",
  path: CharPath.HARMONY,
  rarity: 4,
  starting_hp: 139,
  starting_atk: 69,
  starting_def: 63,
  starting_spd: 106
}

// Following are Standard 4*s added in 1.0
export const arlan = {
  element: CombatElement.LIGHTNING,
  name: "Arlan",
  path: CharPath.DESTRUCTION,
  rarity: 4,
  starting_hp: 163,
  starting_atk: 81,
  starting_def: 45,
  starting_spd: 102
};

export const herta = {
  element: CombatElement.ICE,
  name: "Herta",
  path: CharPath.ERUDITION,
  rarity: 4,
  starting_hp: 129,
  starting_atk: 79,
  starting_def: 54,
  starting_spd: 100
}

export const hook = {
  element: CombatElement.FIRE,
  name: "Hook",
  path: CharPath.DESTRUCTION,
  rarity: 4,
  starting_hp: 163,
  starting_atk: 81,
  starting_def: 45,
  starting_spd: 102
}

export const natasha = {
  element: CombatElement.PHYSICAL,
  name: "Natasha",
  path: CharPath.ABUNDANCE,
  rarity: 4,
  starting_hp: 158,
  starting_atk: 64,
  starting_def: 69,
  starting_spd: 98
}
export const pela = {
  element: CombatElement.ICE,
  name: "Pela",
  path: CharPath.NIHILITY,
  rarity: 4,
  starting_hp: 134,
  starting_atk: 74,
  starting_def: 64,
  starting_spd: 105
}

export const qingque = {
  element: CombatElement.QUANTUM,
  name: "Qingque",
  path: CharPath.ERUDITION,
  rarity: 4,
  starting_hp: 139,
  starting_atk: 88,
  starting_def: 60,
  starting_spd: 98
}
export const sampo = {
  element: CombatElement.WIND,
  name: "Sampo",
  path: CharPath.NIHILITY,
  rarity: 4,
  starting_hp: 139,
  starting_atk: 84,
  starting_def: 54,
  starting_spd: 102
}
export const serval = {
  element: CombatElement.LIGHTNING,
  name: "Serval",
  path: CharPath.ERUDITION,
  rarity: 4,
  starting_hp: 124,
  starting_atk: 88,
  starting_def: 51,
  starting_spd: 104
}
export const sushang = {
  element: CombatElement.PHYSICAL,
  name: "Sushang",
  path: CharPath.HUNT,
  rarity: 4,
  starting_hp: 124,
  starting_atk: 76,
  starting_def: 57,
  starting_spd: 107
}
export const tingyun = {
  element: CombatElement.LIGHTNING,
  name: "Tingyun",
  path: CharPath.HARMONY,
  rarity: 4,
  starting_hp: 115,
  starting_atk: 72,
  starting_def: 54,
  starting_spd: 112
}

// Following are Standard Banner 5*s minus Himeko (because you get to trial her in the main story)
export const bailu = {
  element: CombatElement.LIGHTNING,
  name: "Bailu",
  path: CharPath.ABUNDANCE,
  rarity: 5,
  starting_hp: 179,
  starting_atk: 76,
  starting_def: 66,
  starting_spd: 98
}
export const bronya = {
  element: CombatElement.WIND,
  name: "Bronya",
  path: CharPath.HARMONY,
  rarity: 5,
  starting_hp: 168,
  starting_atk: 79,
  starting_def: 72,
  starting_spd: 100
}
export const clara = {
  element: CombatElement.PHYSICAL,
  name: "Clara",
  path: CharPath.DESTRUCTION,
  rarity: 5,
  starting_hp: 168,
  starting_atk: 100,
  starting_def: 66,
  starting_spd: 90
}
export const gepard = {
  element: CombatElement.ICE,
  name: "Gepard",
  path: CharPath.PRESERVATION,
  rarity: 5,
  starting_hp: 190,
  starting_atk: 73,
  starting_def: 89,
  starting_spd: 92
}
export const trailblazerPreservation = {
  element: CombatElement.FIRE,
  name: "Trailblazer - PRESERVATION",
  path: CharPath.PRESERVATION,
  rarity: 5,
  starting_hp: trailblazerDestruction.starting_hp,
  starting_atk: trailblazerDestruction.starting_atk,
  starting_def: trailblazerDestruction.starting_def,
  starting_spd: trailblazerDestruction.starting_spd
}
export const welt = {
  element: CombatElement.IMAGINARY,
  name: "Welt",
  path: CharPath.NIHILITY,
  rarity: 5,
  starting_hp: 153,
  starting_atk: 84,
  starting_def: 69,
  starting_spd: 102
}
export const yanqing = {
  element: CombatElement.ICE,
  name: "Yanqing",
  path: CharPath.HUNT,
  rarity: 5,
  starting_hp: 121,
  starting_atk: 92,
  starting_def: 56,
  starting_spd: 109
}

// Following are exclusive Event Banner 5*s added since Seele banner in 1.0.
export const seele = {
  element: CombatElement.QUANTUM,
  name: "Seele",
  path: CharPath.HUNT,
  rarity: 5,
  starting_hp: 126,
  starting_atk: 87,
  starting_def: 49,
  starting_spd: 115
}
export const jingYuan = {
  element: CombatElement.LIGHTNING,
  name: "Jing Yuan",
  path: CharPath.ERUDITION,
  rarity: 5,
  starting_hp: 158,
  starting_atk: 95,
  starting_def: 66,
  starting_spd: 99
}

// Following are characters added in 1.1.
export const yukong = {
  element: CombatElement.IMAGINARY,
  name: "Yukong",
  path: CharPath.HARMONY,
  rarity: 4,
  starting_hp: 124,
  starting_atk: 81,
  starting_def: 51,
  starting_spd: 107
}
export const silverWolf = {
  element: CombatElement.QUANTUM,
  name: "Silver Wolf",
  path: CharPath.NIHILITY,
  rarity: 5,
  starting_hp: 142,
  starting_atk: 87,
  starting_def: 62,
  starting_spd: 107
}
export const luocha = {
  element: CombatElement.IMAGINARY,
  name: "Luocha",
  path: CharPath.ABUNDANCE,
  rarity: 5,
  starting_hp: 174,
  starting_atk: 102,
  starting_def: 49,
  starting_spd: 101
}

// Following are characters added in 1.2.
export const luka = {
  element: CombatElement.PHYSICAL,
  name: "Luka",
  path: CharPath.NIHILITY,
  rarity: 4,
  starting_hp: 124,
  starting_atk: 79,
  starting_def: 66,
  starting_spd: 103
}
export const blade = {
  element: CombatElement.WIND,
  name: "Blade",
  path: CharPath.DESTRUCTION,
  rarity: 5,
  starting_hp: 184,
  starting_atk: 73,
  starting_def: 66,
  starting_spd: 97
}
export const kafka = {
  element: CombatElement.LIGHTNING,
  name: "Kafka",
  path: CharPath.NIHILITY,
  rarity: 5,
  starting_hp: 147,
  starting_atk: 92,
  starting_def: 66,
  starting_spd: 100
}

// Following are characters added in 1.3.
export const lynx = {
  element: CombatElement.QUANTUM,
  name: "Lynx",
  path: CharPath.ABUNDANCE,
  rarity: 4,
  starting_hp: 144,
  starting_atk: 67,
  starting_def: 75,
  starting_spd: 100
}
export const danHengImbibitorLunae = {
  element: CombatElement.IMAGINARY,
  name: "Dan Heng • Imbibitor Lunae",
  path: CharPath.DESTRUCTION,
  rarity: 5,
  starting_hp: 168,
  starting_atk: 95,
  starting_def: 19,
  starting_spd: 102
}
export const fuXuan = {
  element: CombatElement.QUANTUM,
  name: "Fu Xuan",
  path: CharPath.PRESERVATION,
  rarity: 5,
  starting_hp: 200,
  starting_atk: 63,
  starting_def: 82,
  starting_spd: 100
}

// Following are characters added in 1.4.
export const guinaifen = {
  element: CombatElement.FIRE,
  name: "Guinaifen",
  path: CharPath.NIHILITY,
  rarity: 4,
  starting_hp: 120,
  starting_atk: 79,
  starting_def: 60,
  starting_spd: 106
}

export const jingliu = {
  element: CombatElement.ICE,
  name: "Jingliu",
  path: CharPath.DESTRUCTION,
  rarity: 5,
  starting_hp: 195,
  starting_atk: 92,
  starting_def: 66,
  starting_spd: 96
}
export const topazAndNumby = {
  element: CombatElement.FIRE,
  name: "Topaz and Numby",
  path: CharPath.HUNT,
  rarity: 5,
  starting_hp: 126,
  starting_atk: 84,
  starting_def: 56,
  starting_spd: 110
}

export const huohuo = {
  element: CombatElement.WIND,
  name: "Huohuo",
  path: CharPath.ABUNDANCE,
  rarity: 5,
  starting_hp: 184,
  starting_atk: 81,
  starting_def: 69,
  starting_spd: 98
}

export const argenti = {
  element: CombatElement.PHYSICAL,
  name: "Argenti",
  path: CharPath.ERUDITION,
  rarity: 5,
  starting_hp: 142,
  starting_atk: 100,
  starting_def: 49,
  starting_spd: 103
}

export const hanya = {
  element: CombatElement.PHYSICAL,
  name: "Hanya",
  path: CharPath.HARMONY,
  rarity: 4,
  starting_hp: 124,
  starting_atk: 76,
  starting_def: 48,
  starting_spd: 110
}

// export const template = {
//     element: CombatElement,
//     name: "",
//     path: CharPath,
//     rarity: ,
//     starting_hp: ,
//     starting_atk: ,
//     starting_def: ,
//     starting_spd: 
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