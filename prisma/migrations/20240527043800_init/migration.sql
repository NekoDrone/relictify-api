-- CreateEnum
CREATE TYPE "CombatElement" AS ENUM ('PHYSICAL', 'FIRE', 'ICE', 'LIGHTNING', 'WIND', 'QUANTUM', 'IMAGINARY');

-- CreateEnum
CREATE TYPE "CharPath" AS ENUM ('DESTRUCTION', 'HUNT', 'ERUDITION', 'HARMONY', 'NIHILITY', 'PRESERVATION', 'ABUNDANCE');

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "rarity" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "element" "CombatElement" NOT NULL,
    "path" "CharPath" NOT NULL,
    "startingHp" BIGINT NOT NULL,
    "startingAtk" BIGINT NOT NULL,
    "startingDef" BIGINT NOT NULL,
    "startingSpd" BIGINT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Relic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Relic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");
