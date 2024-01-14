import request from "supertest";
import app from "../app.js";

// Realizo una pruba para el endpoint ('/'), que debe responder con un status 200
describe("Prueba del endpoint /", () => {

  let server;
  // Antes de cada prueba, levanto el servidor
  beforeAll(() => {
     server = app.listen(5000);
  });
   // Después de cada prueba, cierro el servidor
  afterAll(() => {
     server.close();
  })
  // Realizo la prueba
  it("debe responder en /", async () => {
    const res = await request(app).get("/");
    // Espero que el status de la respuesta sea 200
    expect(res.statusCode).toEqual(200);
  });
});