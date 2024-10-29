const path = require('node:path');
const createError = require('http-errors');
const Film = require('../models/Film');

exports.getUjFilm = (req, res, next) => {
    try {
        const viewsUt = path.join(__dirname, '..', 'views', 'ujFilm.ejs');
        res.status(200).render(viewsUt);
    } catch (error) {
        next(createError.BadRequest('A kért erőforrás nem található!'));
    }
};

exports.postUjFilm = async (req, res, next) => {
    try {
        const { cim, mufaj, idotartam, plakat, idopontok } = req.body;
        let ipk = idopontok.split('\n');
        const newFilm = new Film({
            cim,
            mufaj,
            idotartam,
            plakat,
            idopontok: ipk,
        });
        await newFilm.save();
        res.status(201).json({ msg: 'Sikeres új film felvétel!' });
    } catch (error) {
        next(createError.BadRequest('A kért erőforrás nem található!'));
    }
};
