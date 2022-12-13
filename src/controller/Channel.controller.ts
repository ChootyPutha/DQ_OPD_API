import {Request, Response} from 'express';
import log from '../Logger/logger';
import { CreateChannelInput } from '../schema/Channel.schema';
import { createChannel, getAllChannelInfo } from '../service/Channel.service';


export async function createChannelHandeler(req : Request<{},{},CreateChannelInput['body']>, resp : Response) {
    try {
        const channel = await createChannel(req.body);
        log.info(channel,"new channel is insert");
        return resp.send(channel);
    } catch (e: any) {
        log.error(e);
        return resp.status(409).send(e.message);
    }
}

export async function getAllChannelHandeler(req : Request, resp : Response) {
    try {
        const channel = await getAllChannelInfo();
        log.info(channel,"channel data fetching calling");
        return resp.send(channel);
    } catch (e: any) {
        log.error(e);
        return resp.status(409).send(e.message);
    }
}