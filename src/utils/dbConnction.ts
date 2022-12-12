import mongoose from "mongoose";
import  config  from "config";
import log from "../Logger/logger";

async function connect(){
  
    const dbURI = config.get<string>("dbUri");

    return await  mongoose.connect(dbURI).then(()=>{
        log.info("Successfully connect to mongodb");
        
    }).catch((err)=>{
        log.error("Could not connect to db "+err);
        process.exit(1);
    });
}

export default connect;