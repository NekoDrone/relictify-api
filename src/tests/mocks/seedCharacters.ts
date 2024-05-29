import { CharPath, CombatElement, PrismaClient } from "@prisma/client";
import { allChars } from "../../entities/characters";

const prisma = new PrismaClient()

async function main() {
    const chars = await allChars.map(async (char: any) => {
        await prisma.character.create({data: char})
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })