const express = require('express');

const { body } = require('express-validator')

const router = express.Router()

const Medico = require('../models/user');

const authController = require('../controllers/auth')
const mysql = require('mysql2');
const pool = require('pool')

router.post(
    '/medico',
    [
        body('crm').trim().not().isEmpty(),
        body('senha').trim().isLength({ min: 3 }),
    ],
    authController.medico
);

router.post('/loginMedico', authController.loginMedico)

router.get('/medico',
    (req, res, error) => {
        const pool = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Ae@1254453",
            database: "hospital"
        })

        const sql = "SELECT crm, nome, especialidade FROM cadastro_medico ";

        pool.query(sql, (err, results, fields) => {
            console.log(results)
            if (results.length > 0) {
                return res.status(200).json(results)
            } else {
                return res.status(401).json({ message: err })
            }
        })
    }
)

router.get('/medicos/:id',
    (req, res, error) => {
        const pool = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Ae@1254453",
            database: "hospital"
        })

        const sql = "SELECT crm, nome, especialidade FROM cadastro_medico WHERE id = " + req.params.id;

        pool.query(sql, (err, results, fields) => {
            console.log(results)
            if (results.length > 0) {
                return res.status(200).json(results)
            } else {
                return res.status(401).json({ message: err })
            }
        })
    }
)



module.exports = router;

