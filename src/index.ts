import express, {Application, Request, Response, NextFunction} from "express";
import connect from "./utils/dbConnction";
import log from "./Logger/logger";
import routes from "./routes/routes";
import  dotenv from 'dotenv';
import config from './utils/config';
const port = config.PORT;

dotenv.config();
// const app: Application = express();
export const app = express();

app.use(express.json());

app.get('/',(req : Request, resp : Response, next : NextFunction) => {
    resp.send("Welcome to OPD API");
});

app.listen(8000 ,async ()=>{
    log.info(`App is running at http://127.0.0.1:${8000}`);
    await connect();
    routes(app);
});