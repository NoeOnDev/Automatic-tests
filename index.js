import express from 'express';
import { config } from 'dotenv';
import { Sequelize, Model, DataTypes } from 'sequelize';

config();

const { PORT, BD_NAME, DB_USER, DB_PASS, DB_PORT, DB_HOST } = process.env;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const sequelize = new Sequelize(BD_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'postgres',
    port: DB_PORT,
    logging: false
});
