import { request } from 'supertest';
import app from '../app1.js';

let server;

beforeAll(async () => {
    server = app.listen(9020); // Inicia el servidor antes de las pruebas
});

afterAll(async () => {
    await server.close(); // Cierra el servidor después de las pruebas
});

describe('Test the /books endpoints', () => {
    test('It should respond to the POST method', async () => {
        const response = await request(server)
            .post('/books')
            .send({ title: 'Test Book', autor: 'Test Author', editorial: 'Test Editorial' });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('title', 'Test Book');
        expect(response.body).toHaveProperty('autor', 'Test Author');
        expect(response.body).toHaveProperty('editorial', 'Test Editorial');
    });

    test('It should respond to the GET method', async () => {
        const response = await request(server).get('/books');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});