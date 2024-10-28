require('dotenv').config({ path: './backend/.env' });
const morgan = require('morgan');

const express = require('express');
const PORT = process.env.PORT || 3500;

const errorHandler = require('./middlewares/errorHandling');
const dbConnect = require('./utils/dbConnection');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(errorHandler);

dbConnect()
    .then(() => {
        console.log('Sikeres adatbázis csatlakozás!');
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
