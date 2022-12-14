import {object, string, TypeOf} from 'zod';

export const createDoctorSchama = object({
    body : object({
        doctorName : string({
            required_error : "Name is reqired",
        }),
        doctorType : string({
            required_error : "Docter Type is reqired",
        }),
    }),
});

export type CreateDoctorInput = Omit<TypeOf<typeof createDoctorSchama>,"">;