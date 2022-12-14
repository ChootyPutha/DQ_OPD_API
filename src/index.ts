import express, {Application, Request, Response, NextFunction} from "express";
import config from 'config';
import connect from "./utils/dbConnction";
import log from "./Logger/logger";
import routes from "./routes/routes";
import  dotenv from 'dotenv';
const port = config.get<number>('port'); 

dotenv.config();
// const app: Application = express();
export const app = express();

app.use(express.json());

app.get('/',(req : Request, resp : Response, next : NextFunction) => {
    resp.send("Welcome to OPD API");
});

app.listen(port ,async ()=>{
    log.info(`App is running at http://127.0.0.1:${port}`);
    await connect();
    routes(app);
});