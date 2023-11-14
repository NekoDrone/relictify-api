import express from "express";

const appAuthKey = process.env.APP_AUTH_KEY ?? "undefined";
export interface IAuthorizer {
    authHandler(req: express.Request, res: express.Response, next: Function): void;
}

export class Authorizer implements IAuthorizer {
    authHandler(req: express.Request, res: express.Response, next: Function) {
        console.log(`Application key is ${appAuthKey}`)
        console.log(`Request is : ${req}`)
        const requestBody = req.body;
        console.log(`Request body: ${requestBody}`)
        const userKey = requestBody.authKey ?? "undefined";
        console.log(`Request auth key is ${userKey}`)
        if(userKey == appAuthKey)
        {
            console.log("Incoming request authorised.")
            next();
        }
        else {
            console.log("Incoming request not authorised. Access denied.")
            res.status(401).send();
        }
    }
}