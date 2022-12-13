import {FilterQuery, QueryOptions} from 'mongoose';
import { omit, Omit } from 'lodash';
import AppoinmentModel, { AppoinemntDocument, AppoinmentInput } from '../models/Appoinmet.mode';

export async function createAppoinment(inputs:AppoinmentInput) {
    try {
        const appoinment = await AppoinmentModel.create(inputs);
        return omit(appoinment.toJSON());
    } catch (e : any) {
        throw new Error(e);
    }
 }

 export async function getAllApoinmentInfoByChannel(query : FilterQuery<AppoinemntDocument>,options : QueryOptions = {lean : true}){
    try {
         const result = await AppoinmentModel.find(query);
        // const result =  await AppoinmentModel.aggregate([
        //     {
        //         $lookup : {
        //             from : "patients",
        //             localField : "patient",
        //             foreignField : "_id",
        //             as : "patientsInfo",
        //          }
        //     },
        //     {
        //         $project : {
        //             'patients.password' : 0,
        //         }
        //     }
        // ]);
        return result;
    } catch (e : any) {
        throw new Error(e);
    }
 }