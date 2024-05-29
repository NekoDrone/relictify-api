/*
  Warnings:

  - You are about to alter the column `startingHp` on the `Character` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `startingAtk` on the `Character` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `startingDef` on the `Character` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `startingSpd` on the `Character` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Character" ALTER COLUMN "startingHp" SET DATA TYPE INTEGER,
ALTER COLUMN "startingAtk" SET DATA TYPE INTEGER,
ALTER COLUMN "startingDef" SET DATA TYPE INTEGER,
ALTER COLUMN "startingSpd" SET DATA TYPE INTEGER;
