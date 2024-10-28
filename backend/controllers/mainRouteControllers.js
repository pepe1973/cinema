const path = require('node:path');
const createError = require('http-errors');

exports.getMain = (req, res) => {
    try {
        const viewsUt = path.join(__dirname, '..', 'views', 'index.ejs');
        res.status(200).render(viewsUt);
    } catch (error) {
        next(createError.BadRequest('A kért erőforrás nem található!'));
    }
};
