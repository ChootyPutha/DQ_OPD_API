import mongoose from "mongoose";
import log from "../Logger/logger";
import config from "./config";

async function connect(){
  
   // const dbURI = config.get<string>("dbUri");
    const dbURI:string = config.MONGO_URI;

    //log.info(dbURI,"db env url");

    return await  mongoose.connect(dbURI).then(()=>{
        log.info("Successfully connect to mongodb");
        
    }).catch((err)=>{
        log.error("Could not connect to db "+err);
        process.exit(1);
    });
}

export default connect;