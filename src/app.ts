import * as express from "express";

const app = express();
const port = 3000;

app.listen(port,  () => {
    console.log("Relictify API serving requests.");
})