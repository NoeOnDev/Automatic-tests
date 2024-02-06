import express from 'express';
import { config } from 'dotenv';
import { Sequelize, Model, DataTypes } from 'sequelize';

config();

const { PORT, DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;
const app = express();

app.use(express.json());

app.post('/books', async (req, res) => {
    try {
        const { title, autor, editorial } = req.body;
        const book = await Book.create({ title, autor, editorial });
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/books', async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'postgres',
    logging: false
});

sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error: ' + err));

sequelize.sync({ force: true });

class Book extends Model {}

Book.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    editorial: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'book',
});