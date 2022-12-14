import {object, string, TypeOf} from 'zod';

export const createSessionScheam = object({
    body : object({
        email : string({
            required_error : "email is required",
        }).email("Not a vaild email address"),
        password : string({
            required_error : "Password is required"
        }),
        type : string({
            required_error : "account type is required"
        }),
    }),
});

export type CreateSessionInput = Omit<TypeOf<typeof createSessionScheam>,"">;