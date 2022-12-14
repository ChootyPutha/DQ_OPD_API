import { Request, Response } from 'express';
import mongoose,{ ObjectId } from 'mongoose'; 
import log from '../Logger/logger';
import AppoinmentModel, { AppoinemntDocument } from '../models/Appoinmet.mode';
import { PatientDocument } from '../models/Patient.model';
import { CreateAppoinmentInput, GetAllApoinmentByChannelInput, getAllAppoinmentByPatientInput } from '../schema/Appoinment.schema';
import { createAppoinment, getAllApoinmentInfoByChannel, getAllApoinmentInfoByPatient } from '../service/Appoinment.service';
import { getPatientInfoById } from '../service/Patient.service';

import { sendEmails } from '../utils/transporter';

export async function createAppoinmentHandeler(req: Request<{}, {}, CreateAppoinmentInput['body']>, resp: Response) {
    try {
        const appoinment = await createAppoinment(req.body).then(async (result: any) => {
            const paientId = req.body.patient;
            const patient = await getPatientInfoById({ paientId }).then(async (paintentResult: any) => {
                const appoinementDate = req.body.appoinmentDate;
                const mailcontiner = {
                    from: "dineshmadushankagss2015@gmail.com",
                    to: paintentResult.email,
                    subject: "Your Appoinment is Placed",
                    text: `Dear ${paintentResult.name} \n your appoinement is sheduled on \n Date : ${appoinementDate} \n Time : ${result.appoinmentTime} \n appoinment number : ${result.appoinmentNumber} \n Thank you , \n CareMe`,
                }
                const response =  await sendEmails(mailcontiner);
                return resp.send(result);
            }).catch((er: any) => {
                return resp.status(409).send(er.message);
            });
        }).catch((err: any) => {
            return resp.status(409).send(err.message);
        });

        log.info(appoinment, "new appoinment is insert");
        
        
    } catch (e: any) {
        log.error(e);
        return resp.status(409).send(e.message);
    }
}

export async function getAllAppoinmentListByChannelId(req: Request<GetAllApoinmentByChannelInput['params']>, resp: Response) {
    try {
        const channel: string = req.params.channelId;
        const apoinmentList = await getAllApoinmentInfoByChannel({channel});

        if (!apoinmentList) {
            return resp.sendStatus(404);
        }
        return resp.send(apoinmentList);
    } catch (e: any) {
        log.error(e);
        return resp.status(409).send(e.message);
    }
}

export async function getAllApoinmentListByPatientId(req: Request<getAllAppoinmentByPatientInput['params']>, resp: Response) {
    try {
        const patientId: string = req.params.patientId;
        const apoinmentList = await getAllApoinmentInfoByPatient({patientId});

        console.log("datss "+JSON.stringify(apoinmentList));

        if (!apoinmentList) {
            return resp.sendStatus(404);
        }
        return resp.send(apoinmentList);
    } catch (e: any) {
        log.error(e);
        return resp.status(409).send(e.message);
    }
}