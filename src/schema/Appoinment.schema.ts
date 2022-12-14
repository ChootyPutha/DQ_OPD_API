import { type } from 'os';
import {object, string, TypeOf} from 'zod';


const payload = {
    body : object({
        channel : string({
            required_error : "Channel ID is reqired",
        }),
        patient : string({
            required_error : "Patient Id is reqired",
        }),
        appoinmentTime : string({
            required_error : "apoinment time is reqired",
        }),
        appoinmentStatus : string({
            required_error : "apoinment status  is reqired",
        }),
        appoinmentDate : string({
            required_error : "appoinemnt date is reqired",
        })
        
    }),
}

const channelParams = {
    params : object({
        channelId : string({
            required_error : "channel Id is reqired"
        }),
    }),
}

const paitenParams = {
    params : object({
        patientId : string({
            required_error : "patient Id is reqired"
        }),
    }),
}

export const createAppoinmentSchama = object({
    ...payload,
});

export const getAllAppoinmentByChannelIdSchema = object({
    ...channelParams,
});

export const getAllAppoinmentByPatientIdSchema = object({
    ...paitenParams,
});

export type CreateAppoinmentInput =  Omit<TypeOf<typeof createAppoinmentSchama>,"">;
export type GetAllApoinmentByChannelInput = TypeOf<typeof getAllAppoinmentByChannelIdSchema>;
export type getAllAppoinmentByPatientInput = TypeOf<typeof getAllAppoinmentByPatientIdSchema>;