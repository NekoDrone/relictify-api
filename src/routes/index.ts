import * as express from "express"
import {characters} from "./characters";
import {relics} from "./relics";

const routes = express.Router();

routes.use('/characters', characters);
routes.use('/relics', relics);

export { routes as routes }