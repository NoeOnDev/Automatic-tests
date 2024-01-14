import express from 'express';
import { config } from 'dotenv';
import { Sequelize, Model, DataTypes } from 'sequelize';

config();

const { PORT, DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;
const app = express();

app.use(express.json());

// Endpoint para crear libros y guardarlos en la base de datos
app.post('/books', async (req, res) => {
    try {
        // Obtengo los datos del body
        const { title, autor, editorial } = req.body;
        // Creo un libro en la base de datos
        const book = await Book.create({ title, autor, editorial });
        // Respondo con el libro creado
        res.status(201).json(book);
    } catch (error) {
        // Si hay un error, lo muestro en la respuesta
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

sequelize.sync({});

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