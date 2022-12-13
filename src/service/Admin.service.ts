import {FilterQuery} from 'mongoose';
import { omit, Omit } from 'lodash';
import AdminModel, { AdmintInput } from '../models/Admin.model';
import { SessionInput } from '../models/Session.model';

export async function createAdmin(inputs:AdmintInput) {
    try {
        const admin = await AdminModel.create(inputs);

        return omit(admin.toJSON(),"password");
    } catch (e : any) {
        throw new Error(e);
    }
 }


 export async function authAdmin(inputs:SessionInput) {
    try {
        
        const admin = await AdminModel.findOne({email : inputs.email, password : inputs.password});
        if(admin != null){
            return omit(admin.toJSON(),"password");
        }else{
            
            return {"message" : "no admin found"};
        }
        

    } catch (e : any) {
        throw new Error(e);
    }
 }
 