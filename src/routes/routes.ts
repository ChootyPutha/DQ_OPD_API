import { Express, Request, Response } from "express";
import { authAdminHandler, createAdminHandeler } from "../controller/Admin.controller";
import { createAppoinmentHandeler, getAllAppoinmentListByChannelId, } from "../controller/Appoinments.controller";
import { createChannelHandeler, getAllChannelHandeler } from "../controller/Channel.controller";
import { createDoctorHandeler } from "../controller/Doctor.controller";
import { authPatinetHandler, createPatinetHandler, getPatientInfoByIdHandler } from "../controller/Patient.controller";
import validateResource from "../middleware/validateResource";
import { createAdminScheam } from "../schema/Admin.schema";
import { createAppoinmentSchama, getAllAppoinmentByChannelIdSchema } from "../schema/Appoinment.schema";
import { createChannelSchama } from "../schema/Channel.schema";
import { createDoctorSchama } from "../schema/Doctor.schema";
import { createPatientScheam, getPatientInfoByIdScheam } from "../schema/Patient.schema";
import { createSessionScheam } from "../schema/Session.schema";

function routes(app : Express){
    app.get("/helthcheck",(req : Request, res : Response)=> res.sendStatus(200));

    app.post('/api/patient',validateResource(createPatientScheam),createPatinetHandler);

    app.get('/api/patient/:patientId', validateResource(getPatientInfoByIdScheam), getPatientInfoByIdHandler);

    app.post('/api/admin',validateResource(createAdminScheam),createAdminHandeler);

    app.post('/api/doctor',validateResource(createDoctorSchama),createDoctorHandeler);

    app.post('/api/channel',validateResource(createChannelSchama),createChannelHandeler);

    app.get('/api/channel',getAllChannelHandeler);

    app.post('/api/appoinment',validateResource(createAppoinmentSchama),createAppoinmentHandeler);

    app.get('/api/appoinment/:channelId',validateResource(getAllAppoinmentByChannelIdSchema),getAllAppoinmentListByChannelId);

    app.post('/api/auth/patient',validateResource(createSessionScheam),authPatinetHandler);
    
    app.post('/api/auth/admin',validateResource(createSessionScheam),authAdminHandler);
}

export default routes;