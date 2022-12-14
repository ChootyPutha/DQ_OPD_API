import {Request, Response} from 'express';
import log from '../Logger/logger';
import { CreateAdminInput } from '../schema/Admin.schema';
import { CreateSessionInput } from '../schema/Session.schema';
import { authAdmin, createAdmin } from '../service/Admin.service';

export async function createAdminHandeler(req : Request<{},{},CreateAdminInput['body']>, resp : Response) {
    try {
        const newAdmin = await createAdmin(req.body);
        log.info(newAdmin,"new admin is insert");
        return resp.send(newAdmin);
    } catch (e: any) {
        log.error(e);
        return resp.status(409).send(e.message);
    }
}

export async function authAdminHandler(req : Request<{},{},CreateSessionInput["body"]>, resp : Response){

    try {
        const authAdmins = await authAdmin(req.body);
        log.info(authAdmins,"new Admin is auth");
        return resp.send(authAdmins);
    } catch (e : any) {
        log.error(e);
        return resp.status(409).send(e.message);
    }
}