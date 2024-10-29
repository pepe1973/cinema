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
app.use(express.json());

// Route-ok
app.use('/api/cinema', require('./routes/mainRoutes'));
app.use('/api/cinema/filmek', require('./routes/filmekRoutes'));
app.use('/api/cinema/ujfilm', require('./routes/ujFilmRoutes'));
app.use('/api/cinema/egyedifilm', require('./routes/egyediFilmRoutes'));
app.use(
    '/api/cinema/egyedifilmmodosit',
    require('./routes/egyediFilmModositRoutes')
);

app.all('*', (req, res) => {
    res.status(404).render(path.join(__dirname, 'views', '404.ejs'));
});

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
