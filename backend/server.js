require('dotenv').config({ path: './backend/.env' });
const path = require('node:path');
const morgan = require('morgan');

const express = require('express');
const PORT = process.env.PORT || 3500;

const errorHandler = require('./middlewares/errorHandling');
const dbConnect = require('./utils/dbConnection');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(errorHandler);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Route-ok
app.use('/api/cinema', require('./routes/mainRoutes'));

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
