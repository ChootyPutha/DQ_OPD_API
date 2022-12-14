import SuperTest from 'supertest';

import { app } from '../index';

describe("appoinment route",()=>{
    describe("getAll appoinment data by channel ID route",()=>{
        describe('apoinment data not found ',()=>{
            it('need to return 404', async()=>{
                const chanel = "1223";
                await SuperTest(app).get(`/api/patient/${chanel}`);
            })
        })
    })
})


describe("appoinment route",()=>{
    describe("getAll appoinment data by patient ID route",()=>{
        describe('apoinment data not found ',()=>{
            it('need to return 404', async()=>{
                const patientId = "1223";
                await SuperTest(app).get(`/api/appoinment/${patientId}`);
            })
        })
    })
})