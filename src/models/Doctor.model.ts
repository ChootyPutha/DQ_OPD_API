import mongoose from "mongoose";

export interface DoctorInput {
    doctorName: string,
    doctorType: string,
    description?: string
}

export interface DoctorDocument extends DoctorInput, mongoose.Document {
    createdAt: Date,
    updatedAt: Date,
}

const doctorSchema = new mongoose.Schema(
    {
        doctorName: { type: String, required: true },
        doctorType: { type: String, required: true },
        description: { type: String },
    },
    {
        timestamps: true,
    });

const DoctorModel = mongoose.model<DoctorDocument>("Doctors",doctorSchema);

export default DoctorModel;