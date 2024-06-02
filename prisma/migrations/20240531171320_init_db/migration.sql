/*
  Warnings:

  - Added the required column `test` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `test2` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "test" INTEGER NOT NULL,
ADD COLUMN     "test2" INTEGER NOT NULL;
