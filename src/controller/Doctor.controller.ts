import {Request, Response} from 'express';
import log from '../Logger/logger';
import { CreateDoctorInput } from '../schema/Doctor.schema';
import { createDoctor } from '../service/Doctor.service';

export async function createDoctorHandeler(req : Request<{},{},CreateDoctorInput['body']>, resp : Response) {
    try {
        const doctor = await createDoctor(req.body);
        log.info(doctor,"new doctor is insert");
        return resp.send(doctor);
    } catch (e: any) {
        log.error(e);
        return resp.status(409).send(e.message);
    }
}