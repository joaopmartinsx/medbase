const express = require('express');

const { body } = require('express-validator')

const router = express.Router()

const Pegareceita = require('../models/user');

const authController = require('../controllers/auth')
const mysql = require('mysql2');
const pool = require('pool')

router.post(
    '/receitas',
    [
        body('remedios').trim().not().isEmpty(),
        body('receita').trim().isLength({ min: 3 }),
    ],
    authController.receita
);


router.get('/receita',
    (req, res, error) => {
        const pool = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Ae@1254453",
            database: "hospital"
        })

        const sql = "SELECT remedios, receita FROM receitas ";

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

