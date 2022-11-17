const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../models/user')

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return;

    const cpf = req.body.cpf;
    const nome = req.body.nome;
    const email = req.body.email;
    const idade = req.body.idade;
    const senha = req.body.senha;

    try {
        const hashedPassword = await bcrypt.hash(senha, 12)

        const userDetails = {
            cpf: cpf,
            nome: nome,
            email: email,
            senha: hashedPassword,
            idade: idade
        }

        const result = await User.save(userDetails);

        res.status(201).json({ message: 'User registered!' })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.login = async (req, res, next) => {
    const cpf = req.body.cpf;
    const senha = req.body.senha;


    try {
        const user = await User.find(cpf)

        if (user[0].length !== 1) {
            const error = new Error('A user with this cpf could not be found.')
            error.statusCode = 401;
            throw error;
        }

        const storedUser = user[0][0];

        const isEqual = await bcrypt.compare(senha, storedUser.senha);

        if (!isEqual) {
            const error = new Error('Wrong password!')
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign(
            {
                cpf: storedUser.cpf,
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