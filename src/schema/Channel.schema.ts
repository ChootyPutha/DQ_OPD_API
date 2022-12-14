import {date, number, object, string, TypeOf} from 'zod';

export const createChannelSchama = object({
    body : object({
        doctor : string({
            required_error : "Doctor ID is reqired",
        }),
        channelDate : string({
            required_error : "Channel Datess is reqired",
        }),
        startTime : string({
            required_error : "Channel Start Time is reqired",
        }),
        endTime : string({
            required_error : "Channel End Time is reqired",
        }),
        duration : number({
            required_error : "Single Channel Duration is reqired",
        }),
        countChannel : number({
            required_error : "Channel Count is reqired",
        }),
    }),
});

export type CreateChannelInput =  Omit<TypeOf<typeof createChannelSchama>,"">;