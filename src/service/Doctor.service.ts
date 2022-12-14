import {FilterQuery} from 'mongoose';
import { omit, Omit } from 'lodash';
import DoctorModel, { DoctorInput } from '../models/Doctor.model';

export async function createDoctor(inputs:DoctorInput) {
    try {
        const doctor = await DoctorModel.create(inputs);

        return omit(doctor.toJSON());
    } catch (e : any) {
        throw new Error(e);
    }
 }

 export async function getAllDocInfo(){
    try {
        const doc = await DoctorModel.find({});
        // const channel =  await ChannelModel.aggregate([
        //     {
        //         $lookup : {
        //             from : "doctors",
        //             localField : "doctor",
        //             foreignField : "_id",
        //             as : "docsInfo",
        //          }
        //     },
        // ]);
        return doc;
    } catch (e : any) {
        throw new Error(e);
    }
 }