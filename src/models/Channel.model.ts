import mongoose from "mongoose";
import { DoctorDocument } from "./Doctor.model";

export interface ChannelInput {
    doctor : DoctorDocument["_id"];
    chanelDate : Date;
    startTime : string;
    endTime : string;
    duration : number;
    countChannel : number;
}

export interface ChannelDocument extends ChannelInput, mongoose.Document {
    createdAt : Date;
    updateAt : Date;
}

const channelSchema = new mongoose.Schema({
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctors" },
    channelDate : {type : Date, required : true},
    startTime : {type : String, required : true},
    endTime : {type : String, required : true},
    duration : {type : Number, required : true},
    countChannel : {type : Number, required : true},

},{
    timestamps : true
});


const ChannelModel = mongoose.model<ChannelDocument>("Channel",channelSchema);

export default ChannelModel;


