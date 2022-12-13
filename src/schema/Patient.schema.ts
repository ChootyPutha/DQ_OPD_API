import {object, string, TypeOf} from 'zod';

const payload = {
    body : object({
        name : string({
            required_error : "Name is required",
        }),
        password : string({
            required_error : "Password is required"
        }).min(4,"Password too short - should be 4 chars minimum"),
        confirmPassowrd : string({
            required_error : "password confirmation is required"
        }),
        mobile: string({
            required_error : "Mobile number is required"
        }),
        email : string({
            required_error : "email is required"
        }).email("Not a vaild email address").refine((data : any) => data.passowrd === data.confirmPassowrd, {
            message: "Passwords do not match",
            path: ["confirmPassowrd"],
          }),
        
    }),
}

const params = {
    params : object({
        patientId : string({
            required_error : "UserId is required"
        }),
    }),
}

export const createPatientScheam = object({
    ...payload
});

export const getPatientInfoByIdScheam = object({
    ...params,
})

export type CreatePatientInput = Omit<TypeOf<typeof createPatientScheam>,"body.confirmPassowrd">;
export type GetPatientInfoInput = TypeOf<typeof getPatientInfoByIdScheam>;