process.env.NODE_ENV = 'test'

const app = require('../app')
const request = require('supertest')
const db = require('../db')

//beforeEach
//afterEach
//afterAll

let testCompany;


//before each test we want to setup the test company
beforeEach(async () => {
    const results = await db.query(`INSERT INTO companies (code, name, description) VALUES ('tes', 'Tesla', 'Electric vehicle company') RETURNING *`)
    testCompany = results.rows[0]
})

// //after each test we want to tear it down and clean it up for the next
afterEach(async () => {
    await db.query(`DELETE FROM companies`)
})


describe('GET /companies', () => {
    test('Should display list of all companies', async () => {
        const response = await request(app).get('/companies')
        expect(response.statusCode).toBe(200)
        // console.log(response.body)
    })
})

describe('GET /companies/:code', () => {
    test('Should display proper company given company code', async () => {
        const response = await request(app).get(`/companies/${testCompany.code}`)
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ company: testCompany })
    })
    test('Should return 404 if company code is not found', async () => {
        const response = await request(app).get(`/companies/Idontexist`)
        expect(response.statusCode).toBe(404);
        expect(response.body).toMatchObject({ //to Match Object checks for a partial match
            message: 'Company not found'
        })
    })
})

describe('POST /companies', () => {
    test('Should add a company to the list of companies', async () => {
        const sampleCompany = {
            code: 'GME',
            name: 'Gamestop',
            description: 'Gamestop has a bunch of stores for gaming'
        }
        const response = await request(app).post(`/companies`).send(sampleCompany)
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual({ company: sampleCompany })
    })
})

describe('PUT /companies/:code', () => {
    test('Should edit an existing company', async () => {
        const sampleEdit = { name: 'Random Company Now', description: 'please work'}
        const response = await request(app).put(`/companies/${testCompany.code}`).send(sampleEdit)
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({company: {code: 'tes', name: 'Random Company Now', description: 'please work'}})
    })
})

describe('DELETE /companies/:code', () => {
    test('Should delete a company and return a deleted message', async () => {
        const response = await request(app).delete(`/companies/${testCompany.code}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({message: 'Company successfully deleted'})
    })
})

afterAll(async () => {
    await db.end()
})
