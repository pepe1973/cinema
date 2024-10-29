const express = require('express');
const {
    getEgyediFilmModosit,
    updateEgyediFilmModosit,
} = require('../controllers/egyediFilmModositRouteControllers');

const router = express.Router();

router.get('/:id', getEgyediFilmModosit);
router.post('/:id', updateEgyediFilmModosit);

module.exports = router;
