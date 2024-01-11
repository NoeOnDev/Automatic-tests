// app.test.js

import request from "supertest";
import app from "../app.js";

describe("Prueba del endpoint /", () => {

  let server;

  beforeAll(() => {
     server = app.listen(5000);
  });
   
  afterAll(() => {
     server.close();
  })

  it("debe responder en /", async () => {
    const res = await request(app).get("/");
    
    expect(res.statusCode).toEqual(200);
  });

});