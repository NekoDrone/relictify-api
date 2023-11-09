import express from "express";
import {routes} from "./routes"
import {Authorizer, IAuthorizer} from "./middleware/auth";
import {ILogger, Logger} from "./middleware/logger";

const app = express();
const port = 3000;
const logger: ILogger = new Logger();
const auth: IAuthorizer = new Authorizer();

app.listen(port,  () => {
    console.log("Relictify API serving requests.");
})
app.use(express.json())
app.use(logger.logRequest);
app.use(auth.authHandler);

app.use('/', routes);