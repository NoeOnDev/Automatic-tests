import supertest from 'supertest';
import app from '../app1.js';

describe('Test the /books endpoints', () => {
    test('It should respond to the POST method', async () => {
        const response = await request(app)
            .post('/books')
            .send({ title: 'Test Book', autor: 'Test Author', editorial: 'Test Editorial' });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('title', 'Test Book');
        expect(response.body).toHaveProperty('autor', 'Test Author');
        expect(response.body).toHaveProperty('editorial', 'Test Editorial');
    });

    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/books');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});