const express = require('express');

const {body} = require('express-validator')

const router = express.Router()

const Medico = require('../models/user');

const authController = require('../controllers/auth')
const mysql = require('mysql2');

router.post(
    '/medico',
    [
       body('crm').trim().not().isEmpty(),
       body('senha').trim().isLength({min: 3}), 
    ],
    authController.medico
);

router.post('/loginMedico', authController.loginMedico)

router.get(
    '/signup', (req,res) =>{
        const conexao = mysql2.createConnection({
            host: "localhost",
            user: "root",
            password: "Ae@1254453",
            database: "hospital"
        })

        conexao.query('SELECT * FROM cadastro', (err, results, fields) => {
            if (err){
                res.status(500).json({mensagem: "Erro interno"})
              }
              else{
                res.status(200).json(results)    
              }
        })
    }
)


module.exports = router;

