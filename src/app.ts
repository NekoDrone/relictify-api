import express from "express";
import {routes} from "./routes"
import {Authorizer, IAuthorizer} from "./middleware/auth";
import {ILogger, Logger} from "./middleware/logger";
import {PROD_ENV} from "./exports/consts";
import * as bodyParser from "body-parser"

const app = express();
const port = process.env.PORT ?? 8080;

const logger: ILogger = new Logger();
const auth: IAuthorizer = new Authorizer();
console.log(`Production environment is ${PROD_ENV}`);

app.listen(port,  () => {
    console.log("Relictify API serving requests.");
});
app.use(bodyParser.json()); // apparently, we need to use body-parser directly. Is this an issue that we should log?
app.use(logger.logRequest);
app.use(auth.authHandler);

app.use('/', routes);