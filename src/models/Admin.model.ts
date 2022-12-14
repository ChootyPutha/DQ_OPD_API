import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import config from 'config';

export interface AdmintInput {
    email : string,
    name : string,
    password : string,
    mobile : string
}

export interface AdminDocument extends AdmintInput, mongoose.Document {
    createdAt : Date,
    updatedAt : Date,
    comparePassword(candidatePassword : String) : Promise <Boolean>;
}

const adminSchema =  new mongoose.Schema({
    email : {type :  String, required : true, unique : true},
    name : {type : String, required : true},
    password : {type : String, required : true},
    mobile : {type : String, required : true},
},{
    timestamps : true
});

adminSchema.pre("save", async function (next) {
    let admin = this as AdminDocument;

    if(!admin.isModified("passowrd")){
        return next();
    }

    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

    const hash = await bcrypt.hashSync(admin.password, salt);

    admin.password = hash;

    return next();
});


adminSchema.methods.comparePassword = async function (candidatePassword : string) : Promise <Boolean> {
    const patient = this as AdminDocument;

    return bcrypt.compare(candidatePassword, patient.password).catch((e)=> false);
    
};


const AdminModel = mongoose.model<AdminDocument>("Admin", adminSchema);

export default AdminModel;