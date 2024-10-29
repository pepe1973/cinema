const path = require('node:path');
const createError = require('http-errors');
const Film = require('../models/Film');

exports.getEgyediFilm = async (req, res, next) => {
    try {
        const params = req.params;
        const film = await Film.findById({ _id: params.id });

        const viewsUt = path.join(__dirname, '..', 'views', 'egyediFilm.ejs');
        res.status(200).render(viewsUt, { film });
    } catch (error) {
        next(createError.BadRequest('A kért erőforrás nem található!'));
    }
};

exports.deleteEgyediFilm = async (req, res, next) => {
    try {
        const params = req.params;
        const film = await Film.findByIdAndDelete({ _id: params.id });

        res.status(200).json({ msg: 'Sikeres törlés!' });
    } catch (error) {
        next(createError.BadRequest('A kért erőforrás nem található!'));
    }
};
