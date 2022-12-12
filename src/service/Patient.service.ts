 import {FilterQuery} from 'mongoose';
 import { omit, Omit } from 'lodash';
import PatientModel,{ PatientInput , PatientDocument } from '../models/Patient.model';


 export async function createPatient(inputs:PatientInput) {
    try {
        const patient = await PatientModel.create(inputs);

        return omit(patient.toJSON(),"password");
    } catch (e : any) {
        throw new Error(e);
    }
 }

 