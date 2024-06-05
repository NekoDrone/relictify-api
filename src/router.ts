import { AutoRouter } from "itty-router";
import withAuth from "./handlers/withAuth";
import { allChars, charById } from "@/routes/characters";

const router = AutoRouter();

router
    .all('*', withAuth)
    .get('/characters', allChars)
    .get('/characters/:id', ({ id }) => charById(id))
    .get('/relics', () => ({"foo": "bar"}))
    .get('/relics/:id')

export default router