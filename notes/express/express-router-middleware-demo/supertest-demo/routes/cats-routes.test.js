process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("../app");
let cats = require("../fakeDb");

let pickles = { name: "Pickles" };

beforeEach(function() {
  cats.push(pickles);
});

afterEach(function() {
  // make sure this *mutates*, not redefines, `cats`
  cats.length = 0;
});
// end afterEach

/** GET /cats - returns `{cats: [cat, ...]}` */

describe("GET /cats", function() {
  test("Gets a list of cats", async function() {
    const resp = await request(app).get(`/cats`);
    expect(resp.statusCode).toBe(200);

    expect(resp.body).toEqual({cats: [pickles]});
  });
});
// end

/** GET /cats/[name] - return data about one cat: `{cat: cat}` */

describe("GET /cats/:name", function () {
  test("Get cat by name", async function () {
    const resp = await request(app).get(`/cats/${pickles.name}`);
    expect(resp.statusCode).toBe(200);

    expect(resp.body).toEqual({ cat: pickles });
  });
  test("404 for invalid cat name", async function () {
    const resp = await request(app).get(`/cats/icecube`);
    expect(resp.statusCode).toBe(404);

  });
});

/** POST /cats - create cat from data; return `{cat: cat}` */

describe("POST /cats", function() {
  test("Creates a new cat", async function() {
    const resp = await request(app)
      .post(`/cats`)
      .send({
        name: "Ezra"
      });
    expect(resp.statusCode).toBe(201);
    expect(resp.body).toEqual({
      cat: { name: "Ezra" }
    });
  });

  test('400 for incorrect cat data', async () => {
    const res = await request(app).post('/cats').send({})
    expect(res.statusCode).toBe(400);
  })

});
// end

/** PATCH /cats/[name] - update cat; return `{cat: cat}` */

describe('/PATCH/cats/:name', () => {
  test('updating a cats name', async () => {
    const res = await request(app).patch(`/cats/${pickles.name}`).send({ name: 'Monster' })
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({cat: {name: 'Monster'}})
  })

  test('404 for invalid cat name', async () => {
    const res = await request(app).patch(`/cats/Piggles`).send({ name: 'Monster' })
    expect(res.statusCode).toBe(404)

  })
})

/** DELETE /cats/[name] - delete cat,
 *  return `{message: "Cat deleted"}` */

describe('/DELETE/cats/:name', () => {
  test('Deleting a cats name', async () => {
    const res = await request(app).delete(`/cats/${pickles.name}`)
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({message: 'Deleted'})
  })
  test('404 for deleting invalid cat', async () => {
    const res = await request(app).delete(`/cats/HAMFACE}`)
    expect(res.statusCode).toBe(404)
  })
})