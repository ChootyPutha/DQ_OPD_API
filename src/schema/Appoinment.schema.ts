import {object, string, TypeOf} from 'zod';

export const createAppoinmentSchama = object({
    body : object({
        channel : string({
            required_error : "Channel ID is reqired",
        }),
        patient : string({
            required_error : "Patient Id is reqired",
        }),
        
    }),
});

export type CreateAppoinmentInput =  typeof createAppoinmentSchama;