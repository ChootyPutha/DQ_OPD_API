import {Request, Response} from 'express';
import { omit } from 'lodash';
import log from '../Logger/logger';
import { CreatePatientInput, GetPatientInfoInput } from '../schema/Patient.schema';
import { CreateSessionInput } from '../schema/Session.schema';
import {authPatient, createPatient, getPatientInfoById} from '../service/Patient.service';


export async function createPatinetHandler(req : Request<{},{},CreatePatientInput["body"]>, resp : Response){
    try {
        const newPatient = await createPatient(req.body);
        log.info(newPatient,"new patient is insert");
        return resp.send(newPatient);
    } catch (e : any) {
        log.error(e);
        return resp.status(409).send(e.message);
    }
}

export async function authPatinetHandler(req : Request<{},{},CreateSessionInput["body"]>, resp : Response){

    try {
        const authPatinets = await authPatient(req.body);
        log.info(authPatinets,"new patient is auth");
        return resp.send(authPatinets);
    } catch (e : any) {
        log.error(e);
        return resp.status(409).send(e.message);
    }
}


export async function getPatientInfoByIdHandler(req: Request<GetPatientInfoInput['params']>,resp : Response){
    try {
        const _id  = req.params.patientId;
        const patient  = await getPatientInfoById({_id});
        
        if(!patient){
            return resp.sendStatus(404);
         }
         return resp.send(patient);
    } catch (e : any) {
        log.error(e);
        return resp.status(409).send(e.message);
    }
}




