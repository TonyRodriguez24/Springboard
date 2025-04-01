process.env.NODE_ENV === 'test'
//do this before requiring database
const request = require('supertest')
const app = require('../app')
const db = require('../db')

//beforeEach
//afterEach
//beforeAll
//afterAll

let testUser;

beforeEach(async () => {
  const result = await db.query(`INSERT INTO users (name, type) VALUES ('Peanut', 'admin') RETURNING *`);
  testUser = result.rows[0]
})

afterEach(async () => {
  await db.query(`DELETE FROM users`)
})

describe('Hope this works', () => {
  test('Blah', () => {
    console.log(testUser)
    expect(1).toBe(1)
  })
})

describe('POST /users', () => {
  test('Creates a single user', async () => {
    const response = await request(app).post('/users').send({ name: 'BillyBob', type: 'staff' })
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
      user: {
        id: expect.any(Number), 
        name: 'BillyBob',
        type: 'staff'
      }
    })
  })
})

describe('PATCH /users/:id', () => {
  test('Updates a single user', async () => {
    const response = await request(app).patch(`/users/${testUser.id}`).send({ name: 'BillyBob', type: 'admin' })
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      user: {
        id: testUser.id,
        name: 'BillyBob',
        type: 'admin'
      }
    })
  })
  test('testing 404 on invalid user', async () => {
    const response = await request(app).patch(`/users/0`).send({ name: 'BillyBob', type: 'admin' })
    expect(response.statusCode).toBe(404);
    
  })
})

describe('DELETE /users/:id', () => {
  test('Deletes a single user', async () => {
    const response = await request(app).delete(`/users/${testUser.id}`)
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Deleted'})
  })

})


afterAll(async () => {
  await db.end();
})

