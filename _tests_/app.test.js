import request from "supertest";
import app from "../app.js";

describe("Prueba del endpoint ('/')", () => {

  let server;

  beforeAll(() => {
     server = app.listen(5000);
  });

  afterAll(() => {
     server.close();
  })

  it("debe responder con un status 200 en la ruta ('/')", async () => {
    const res = await request(app).get("/");
    
    expect(res.statusCode).toEqual(200);
  });
});