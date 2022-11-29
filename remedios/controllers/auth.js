const Pegareceita = require('../models/user');
const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

exports.receita = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return;

    const remedios = req.body.remedios
    const receita = req.body.receita

    try {

        const userDetails = {
            remedios,
            receita
        }

        const result = await Pegareceita.save(userDetails);

        res.status(201).json({ auth: true, message: 'Remedio registered!' })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
            res.status(500).json({ auth: false, message: err })
        }
        next(err)
    }
}
