const Sintomas = require('../models/user');
const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

exports.sintomas = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return;

    const sintomas = req.body.sintomas
    const tempo = req.body.tempo
    const medicamento = req.body.medicamento
    const cronico = req.body.cronico
    const fumante = req.body.fumante
    const bebida = req.body.bebida
    const alimento = req.body.alimento
    const alimentoDiferente = req.body.alimentoDiferente
    const cirurgia = req.body.cirurgia
    const nome = req.body.nome
    const cpf = req.body.cpf



    try {

        const userDetails = {
            sintomas,
            tempo,
            medicamento,
            cronico,
            fumante,
            bebida,
            alimento,
            alimentoDiferente,
            cirurgia,
            nome,
            cpf
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