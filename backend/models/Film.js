const { required } = require('joi');
const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema(
    {
        cim: {
            type: String,
            required: true,
        },
        mufaj: {
            type: String,
        },
        idotartam: {
            type: Number,
            required: true,
        },
        plakat: {
            type: String,
            required: true,
        },
        idopontok: {
            type: Array,
            required: true,
        },
    },
    { timestamps: true }
);

const FilmModel = mongoose.model('film', FilmSchema);

module.exports = FilmModel;
