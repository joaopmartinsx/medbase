const Sintomas  = require('../models/user');
const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

exports.sintomas = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return;

    const sintomas = req.body.sintomas
    const tempo = req.body.tempo
    const alergia = req.body.alergia
    const doenca = req.body.doenca
    const diabetes = req.body.diabetes


    try {

        const userDetails = {
            sintomas,
            tempo,
            alergia,
            doenca,
            diabetes
        }

        const result = await Sintomas.save(userDetails);

        res.status(201).json({ auth: true, message: 'Sintomas registered!' })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
            res.status(500).json({ auth: false, message: err })
        }
        next(err)
    }
}