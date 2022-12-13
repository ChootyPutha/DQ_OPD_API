import mongoose from "mongoose";
import { ChannelDocument } from "./Channel.model";
import { PatientDocument } from "./Patient.model";


export interface AppoinmentInput {
    channel : ChannelDocument['_id'];
    patient : PatientDocument['_id'];
    appoinmentTime : string,
    appoinmentNumber? : number,
    appoinmentStatus : string,
}

export interface AppoinemntDocument extends AppoinmentInput, mongoose.Document {
    createdAt : Date;
    updatedAt : Date;
}

const appoinemntSchema = new mongoose.Schema({
    channel : {type : mongoose.Schema.Types.ObjectId, ref : "Channel"},
    patient : {type : mongoose.Schema.Types.ObjectId, ref : "Patient"},
    appoinmentTime : {type : String, required : true},
    appoinmentNumber : {type : Number, required : true},
    appoinmentStatus : {type : String, required : true},
    
});

const AppoinmentModel = mongoose.model<AppoinemntDocument>("Appoinment", appoinemntSchema);

export default AppoinmentModel;