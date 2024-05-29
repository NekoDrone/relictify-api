import { createServerAdapter } from "@whatwg-node/server";
import router from "./router";
import { createServer } from "http";

const ittyServer = createServerAdapter(router.fetch);

const httpServer = createServer(ittyServer)

const port = 8080;
console.log(`Starting server on port ${port}`)
httpServer.listen(port);