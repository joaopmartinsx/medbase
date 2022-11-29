const express = require('express');

const {body} = require('express-validator');

const router = express.Router();

const DescrevendoSintomas = require('../models/user');

const authController = require('../controllers/auth')
const mysql = require('mysql2');
const pool = require('pool')

router.post(
    '/sintomas',
    [
        body('sintomas').trim().not().isEmpty(),
        body('tempo').trim().isLength({min: 3}),
        body('alergia').trim().not().isEmpty(),
        body('doenca').trim().isLength({min: 3}),
        body('diabetes').trim().not().isEmpty(),
     ],
    authController.sintomas
);

router.get('/sintomas',
    (req, res, error) => {
        const pool = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Ae@1254453",
            database: "hospital"
        })

        const sql = "SELECT sintomas,tempo, alergia, doenca, diabetes FROM sintomas_pacientes " ;

        pool.query(sql , (err, results, fields) => {
            console.log(results)
            if (results.length > 0){
                return res.status(200).json(results)
              }else {
                return res.status(401).json({message: err})
              }
        })
    }
)

module.exports = router;