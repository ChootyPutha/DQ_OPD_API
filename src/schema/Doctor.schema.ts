import {object, string, TypeOf} from 'zod';

export const createDoctorSchama = object({
    body : object({
        name : string({
            required_error : "Name is reqired",
        }),
        docType : string({
            required_error : "Docter Type is reqired",
        }),
    }),
});

export type CreateDoctorInput =  typeof createDoctorSchama;