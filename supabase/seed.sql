CREATE TYPE CombatElement AS ENUM ('PHYSICAL', 'ICE', 'QUANTUM', 'FIRE', 'IMAGINARY', 'LIGHTNING', 'WIND');

CREATE TYPE CharPath AS ENUM('NIHILITY', 'ERUDITION', 'HUNT', 'PRESERVATION', 'DESTRUCTION', 'ABUNDANCE', 'HARMONY');

CREATE TABLE characters (
    id int primary key generated always as identity,
    rarity int,
    name text,
    element CombatElement,
    path CharPath,
    starting_hp int,
    starting_atk int,
    starting_def int,
    starting_spd int
);