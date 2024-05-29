import prisma from "@Helpers/prisma";

export async function getCharacterById(id: number) {
    return prisma.character.findUnique({
        where: {
            id: id
        }
    });
}

export async function getAllCharacters() {
    return prisma.character.findMany();
}