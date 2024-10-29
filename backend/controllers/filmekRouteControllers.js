const path = require('node:path');
const createError = require('http-errors');
const Film = require('../models/Film');

exports.getFilmek = async (req, res, next) => {
    try {
        const filmek = await Film.find({}).sort({ idotartam: -1 });

        const viewsUt = path.join(__dirname, '..', 'views', 'filmek.ejs');
        res.status(200).render(viewsUt, {
            filmek,
        });
    } catch (error) {
        next(createError.BadRequest('A kért erőforrás nem található!'));
    }
};
