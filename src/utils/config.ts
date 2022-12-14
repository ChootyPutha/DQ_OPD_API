import path from "path";
import dotenv from "dotenv";

dotenv.config({path : path.resolve(__dirname,"../utils/config.env")});

interface ENV {
    MONGO_URI: string | undefined;
    PORT : number | undefined;
    EMAIL : string | undefined;
    PASSWORD : string | undefined;
}

interface Config {
    MONGO_URI: string;
    PORT : number,
    EMAIL : string,
    PASSWORD : string,
}

const getConfig = () : ENV => {
    return{
        MONGO_URI : process.env.MONGO_URI,
        PORT : process.env.PORT ? Number(process.env.PORT) : undefined,
        EMAIL : process.env.EMAIL,
        PASSWORD : process.env.PASSWORD,
    }
};

const getSanitzeConfig = (config : ENV) : Config => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
          throw new Error(`Missing key ${key} in config.env`);
        }
      }
      return config as Config;
}

const config = getConfig();

const sanitizedConfig = getSanitzeConfig(config);

export default sanitizedConfig;