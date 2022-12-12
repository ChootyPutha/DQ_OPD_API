import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import config from 'config';

export interface PatientInput {
    email : string,
    name : string,
    password : string,
    mobile : string
}

export interface PatientDocument extends PatientInput, mongoose.Document {
    createdAt : Date,
    updatedAt : Date,
    comparePassword(candidatePassword : String) : Promise <Boolean>;
}

const patientSchema =  new mongoose.Schema({
    email : {type :  String, required : true, unique : true},
    name : {type : String, required : true},
    password : {type : String, required : true},
    mobile : {type : String, required : true},
},{
    timestamps : true
});

patientSchema.pre("save", async function (next) {
    let patient = this as PatientDocument;

    if(!patient.isModified("passowrd")){
        return next();
    }

    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

    const hash = await bcrypt.hashSync(patient.password, salt);

    patient.password = hash;

    return next();
});


patientSchema.methods.comparePassword = async function (candidatePassword : string) : Promise <Boolean> {
    const patient = this as PatientDocument;

    return bcrypt.compare(candidatePassword, patient.password).catch((e)=> false);
    
};


const PatientModel = mongoose.model<PatientDocument>("Patient", patientSchema);

export default PatientModel;