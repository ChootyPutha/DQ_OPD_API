import express, {Application, Request, Response, NextFunction} from "express";
import config from 'config';
import connect from "./utils/dbConnction";
import log from "./Logger/logger";
const port = config.get<number>('port'); 

const app: Application = express();

app.get('/',(req : Request, resp : Response, next : NextFunction) => {
    resp.send("Welcome to OPD API");
});

app.listen(port ,async ()=>{
    log.info(`App is running at http://127.0.0.1:${port}`);
    await connect();
});