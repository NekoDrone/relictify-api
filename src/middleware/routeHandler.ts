import e from "express";

export interface IRouteHandler {
    handleRoute(req: e.Request, res: e.Response): void
}