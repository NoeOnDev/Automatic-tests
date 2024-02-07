import express from 'express';
import { config } from 'dotenv';
import { Sequelize, Model, DataTypes } from 'sequelize';

config();

const { PORT, DB_NAME, DB_USER, DB_PASS, DB_PORT, DB_HOST } = process.env;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    logging: false
});

sequelize.authenticate().then(() => { console.log('Authentication sussesful') })
    .catch(err => { console.log('Error: ', err) });

 sequelize.sync({ force: true }).then(() => { console.log('Database sync') })
    .catch(err => { console.log('Error: ', err) });

