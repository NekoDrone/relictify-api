/*
  Warnings:

  - You are about to drop the column `test` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `test2` on the `Character` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "test",
DROP COLUMN "test2";
