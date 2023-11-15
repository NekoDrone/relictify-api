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
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(`NOT MIDDLEWARE Request body is: ${req.body ?? 'undefined'}`);
    console.log(`NOT MIDDLEWARE App Auth Key is ${req.body.authKey ?? 'undefined'}`);
    next();
})
app.use(logger.logRequest);
app.use(auth.authHandler);

app.use('/', routes);