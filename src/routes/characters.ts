import { getAllCharacters, getCharacterById } from "@/handlers/queryCharacters";

export async function allChars() {
    return getAllCharacters()
}

export async function charById(id: string) {
    return getCharacterById(parseInt(id))
}