import SuperTest from 'supertest';

import { app } from '../index';

describe("patient route",()=>{
    describe("get patient data by ID route",()=>{
        describe('patient data not found ',()=>{
            it('need to return 404', async()=>{
                const patientId = "1223";
                await SuperTest(app).get(`/api/appoinment/${patientId}`);
            })
        })
    })
})