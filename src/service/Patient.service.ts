 import {FilterQuery, QueryOptions} from 'mongoose';
 import { omit, Omit } from 'lodash';
import PatientModel,{ PatientInput , PatientDocument } from '../models/Patient.model';
import { SessionInput } from '../models/Session.model';


 export async function createPatient(inputs:PatientInput) {
    try {
        const patient = await PatientModel.create(inputs);

        return omit(patient.toJSON(),"password");
    } catch (e : any) {
        throw new Error(e);
    }
 }


 export async function authPatient(inputs:SessionInput) {
    try {
        const patient = await PatientModel.findOne({email : inputs.email, password : inputs.password});
        if(patient != null){
            return omit(patient.toJSON(),"password");
        }else{      
            return {"message" : "no user found"};
        }
        
    } catch (e : any) {
        throw new Error(e);
    }
 }
 

 export async function getPatientInfoById(query : FilterQuery<PatientDocument>, options : QueryOptions = { lean : true}){
    try {
        const patient = await PatientModel.findOne(query,{password : 0},options);
        return patient;
    } catch (e : any) {
        throw new Error(e);
    }
 }