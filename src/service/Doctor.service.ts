import {FilterQuery} from 'mongoose';
import { omit, Omit } from 'lodash';
import DoctorModel, { DoctorInput } from '../models/Doctor.model';

export async function createDoctor(inputs:DoctorInput) {
    try {
        const doctor = await DoctorModel.create(inputs);

        return omit(doctor.toJSON());
    } catch (e : any) {
        throw new Error(e);
    }
 }