import {Request, Response} from 'express';
import { omit } from 'lodash';
import log from '../Logger/logger';
import { CreatePatientInput } from '../schema/Patient.schema';
import {createPatient} from '../service/Patient.service';


export async function createPatinetHandler(req : Request<{},{},CreatePatientInput["body"]>, resp : Response){
    try {
        const newPatient = await createPatient(req.body);
        return resp.send(newPatient);
    } catch (e : any) {
        log.error(e);
        return resp.status(409).send(e.message);
    }
}