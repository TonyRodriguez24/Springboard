process.env.NODE_ENV = 'test';

const request = require('supertest')
const app = require('../app')
const items = require('../fakeDB')

let testItem = { name: 'candy', price: 3.99 }

//beforeEach and afterEach come from Jest
//beforeEach test setup
//afterEach test teardown

beforeEach(function () {
    items.push(testItem);
})

afterEach(function () {
    items.length = 0;
})

describe('GET /items', () => {
    test('Get list of all items', async () => {
        const response = await request(app).get('/items')
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ items: [testItem] })
    })
})


//toBe is good for primitive types
//toEqual performs a deep equality check

describe('POST /items', () => {
    test('Create a new item', async () => {
        const response = await request(app)
            .post('/items')
            .send({ name: 'diapers', price: 6.99 })
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual({
            item: {
                name: 'diapers',
                price: 6.99
            }
        })
    })
})

describe('GET /items/:name', function () {
    test('Get an individual item by name', async () => {
        const response = await request(app).get(`/items/${testItem.name}`)
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ item: testItem })
    })
})

//for a patch route it's .patch and then you .send info in same line
describe('PATCH /items/:name', function () {
    test('Update a name for an item', async () => {
        const response = await request(app).patch(`/items/${testItem.name}`).send({
            name: 'reeses'
        })
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ item: { name: 'reeses', price: 3.99 } })

    })
})

describe('DELETE /items/:name', function () {
    test('Deleting an item', async () => {
        const response = await request(app).delete(`/items/${testItem.name}`)
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({message: 'Deleted'})
    })
})



// router.patch('/:name', (req, res, next) => {
//     //find the item first
//     const foundItem = items.find(item => item.name === req.params.name)
//     if (foundItem === undefined) {
//         throw new ExpressError('Item not found', 400)
//     }
//     foundItem.name = req.body.name;
//     res.json({ item: foundItem })
// })

// router.delete('/:name', (req, res, next) => {
//     const foundItem = items.find(item => item.name === req.params.name)
//     if (foundItem === undefined) {
//         throw new ExpressError('Item not found', 400)
//     }
//     items.splice(foundItem, 1)
//     return res.json({
//         message: 'Deleted'
//     })
// })


