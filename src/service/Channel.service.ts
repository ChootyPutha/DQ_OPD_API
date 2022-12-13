import {FilterQuery} from 'mongoose';
import { omit, Omit } from 'lodash';
import ChannelModel, { ChannelInput } from '../models/Channel.model';

export async function createChannel(inputs:ChannelInput) {
    try {
        const channel = await ChannelModel.create(inputs);
        return omit(channel.toJSON());
    } catch (e : any) {
        throw new Error(e);
    }
 }

 export async function getAllChannelInfo(){
    try {
        const channel = await ChannelModel.find({});
        return channel;
    } catch (e : any) {
        throw new Error(e);
    }
 }