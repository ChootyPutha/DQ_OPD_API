import mongoose,{FilterQuery, QueryOptions, ObjectId} from 'mongoose';
import { omit, Omit } from 'lodash';
import AppoinmentModel, { AppoinemntDocument, AppoinmentInput } from '../models/Appoinmet.mode';
import { ParamInput, PatientParmInput } from '../models/Session.model';

export async function createAppoinment(inputs: AppoinmentInput) {
    try {
        const appoinment = await AppoinmentModel.create(inputs);
        return omit(appoinment.toJSON());
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function getAllApoinmentInfoByChannel(query: ParamInput) {
    try {
        // const result = await AppoinmentModel.find(query);
        const channeId = new mongoose.Types.ObjectId(query.channel);
        const result = await AppoinmentModel.aggregate([
            {
                $match : { channel : channeId }
            },
            {
                $lookup: {
                    from: "patients",
                    localField: "patient",
                    foreignField: "_id",
                    as: "patientsInfo",
                }
            },
            {
                $unwind: "$patientsInfo"
            },
            {
                $project: {
                    __v: 0,
                    "patientsInfo.__v": 0,
                    "patientsInfo._id": 0,
                    "patientsInfo.password": 0
                }
            }
        ]);
        return result;
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function getAllApoinmentInfoByPatient(query: PatientParmInput) {
    try {
        // const result = await AppoinmentModel.find(query);
        const patientId = new mongoose.Types.ObjectId(query.patientId);
        const result = await AppoinmentModel.aggregate([
            {
                $match : { patient : patientId }
            },
            
        ]);
        return result;
    } catch (e: any) {
        throw new Error(e);
    }
}