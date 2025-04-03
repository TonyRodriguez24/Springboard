process.env.NODE_ENV = 'test'

const app = require("../app");
const request = require('supertest')
const db = require('../db')

//beforeEach
//afterEach
//afterAll

let testCompany;
let testInvoice;

beforeEach(async () => {
    const companyResults = await db.query(`INSERT INTO companies (code, name, description) VALUES ('tes', 'Tesla', 'Electric vehicle company') RETURNING *`)
    testCompany = companyResults.rows[0]
    const invoicesResults = await db.query(`INSERT INTO invoices (id, comp_code, amt, paid, add_date, paid_date) VALUES (1, 'tes', 200, TRUE, '2023-11-12', '2024-11-12') RETURNING *`)
    testInvoice = invoicesResults.rows[0]
    testInvoice.add_date = testInvoice.add_date.toISOString();
    testInvoice.paid_date = testInvoice.paid_date.toISOString();
})

afterEach(async () => {
    await db.query(`DELETE FROM companies`)
    await db.query(`DELETE from invoices`)
})


//get all invoices
describe('GET /invoices', () => {
    test('Should return a list of all invoices', async () => {
        const response = await request(app).get(`/invoices`)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ invoices: [testInvoice] })
    })
})


// //get invoice by id
describe(`GET /invoices/:id`, () => {
    test('Should return an invoice by id', async () => {
        const response = await request(app).get(`/invoices/${testInvoice.id}`)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({ invoice: testInvoice })
    })
})

// //add an invoice
describe('POST /invoices', () => {
    test('Should add invoice to the list of invoices', async () => {
        const sampleInvoice = {
            id: expect.any(Number),
            comp_code: 'tes',
            amt: 3000,
            paid: true,
            add_date: "2024-10-10",
            paid_date: "2024-10-10" 
        }
        const response = await request(app).post('/invoices').send(sampleInvoice)
        expect(response.statusCode).toBe(201)
        // console.log(response.body)
    })
})

// //updates an invoice
// router.put('/:id', async (req, res, next) => {
describe('PUT /invoices/:id', () => {
    test('Should edit an existing invoice', async () => {
        const response = await request(app).put(`/invoices/${testInvoice.id}`).send({amt:500, paid: false, add_date: '12-12-2020', paid_date: '09-09-2021' })
        expect(response.statusCode).toBe(200)
        expect(response.body).toMatchObject({amt:500, paid:false})
    })
})

// //deletes an invoice
// router.delete('/:id', async (req, res, next) => {
describe('DELETE /invoices/:id', () => {
    test('Delete an invoice given an invoice ID', async() => {
        const response = await request(app).delete(`/invoices/${testInvoice.id}`)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({message: 'Invoice successfully deleted' })
    })
})




afterAll(async () => {
    await db.end()
})