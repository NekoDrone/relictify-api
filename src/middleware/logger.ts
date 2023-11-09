import express from "express";

export class Logger implements ILogger {
    logRequest(req: express.Request, res: express.Response, next: Function): void {
        const currentDate = new Date();
        const requestTime = currentDate.toLocaleString();
        const incomingIp = req.ip;
        console.log(`Incoming request from ${incomingIp} at ${requestTime}`);
        next();
    }

    logResponseTime(req: express.Request, res: express.Response, next: Function): void {
        console.log("Not yet implemented.")
    }
    
    
}

export interface ILogger {
    logRequest(req: express.Request, res: express.Response, next: Function): void;
    logResponseTime(req: express.Request, res: express.Response, next: Function): void;
    
}