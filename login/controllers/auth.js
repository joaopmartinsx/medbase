const Medico = require('../models/user');
const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

exports.medico = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return;

    const crm = req.body.crm;
    const nome = req.body.nome;
    const especialidade = req.body.especialidade;
    const senha = req.body.senha;

    try {
        const hashedPassword = await bcrypt.hash(senha, 12)

        const userDetails = {
            crm: crm,
            nome: nome,
            especialidade: especialidade,
            senha: hashedPassword
        }

        const result = await Medico.save(userDetails);

        res.status(201).json({ auth: true, message: 'User registered!' })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
            res.status(500).json({ auth: false, message: 'User not be registred!' })
        }
        next(err)
    }
}

exports.loginMedico = async (req, res, next) => {
    const crm = req.body.crm;
    const senha = req.body.senha;


    try {
        const medico = await Medico.find(crm)

        if (medico[0].length !== 1) {
            const error = new Error('A user with this crm could not be found.')
            error.statusCode = 401;
            throw error;
        }

        const storedUser = medico[0][0];


        const isEqual = await bcrypt.compare(senha, storedUser.senha);

        if (!isEqual) {
            const error = new Error('Wrong password!')
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign(
            {
                crm: storedUser.crm,
                userId: storedUser.id
            },
            'secretfortoken',
            {
                expiresIn: '1h'
            }
        );

        res.status(200).json({token: token, userId: storedUser.id})

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}