const path = require('node:path');
const createError = require('http-errors');
const Film = require('../models/Film');

exports.getEgyediFilmModosit = async (req, res, next) => {
    try {
        const params = req.params;
        const { _id, cim, mufaj, idotartam, plakat, idopontok } =
            await Film.findById({ _id: params.id });

        console.log({ cim, mufaj, idotartam, plakat, idopontok });

        let szoveg = '';
        for (let i = 0; i < idopontok.length; i++) {
            if (i < idopontok.length - 1) {
                szoveg += `${idopontok[i]}\n`;
            } else {
                szoveg += `${idopontok[i]}`;
            }
        }

        let film = { _id, cim, mufaj, idotartam, plakat, idopontok: szoveg };

        const viewsUt = path.join(
            __dirname,
            '..',
            'views',
            'egyediFilmModosit.ejs'
        );
        res.status(200).render(viewsUt, { film });
    } catch (error) {
        next(createError.BadRequest('A kért erőforrás nem található!'));
    }
};

exports.updateEgyediFilmModosit = async (req, res, next) => {
    try {
        const { cim, mufaj, idotartam, plakat, idopontok } = req.body;
        const params = req.params;

        let ipk = idopontok.split('\n');
        const newFilm = {
            cim,
            mufaj,
            idotartam,
            plakat,
            idopontok: ipk,
        };
        console.log(newFilm);

        await Film.findByIdAndUpdate({ _id: params.id }, newFilm);
        res.status(201).json({ msg: 'Sikeres film módosítás!' });
    } catch (error) {
        next(createError.BadRequest('A kért erőforrás nem található!'));
    }
};
