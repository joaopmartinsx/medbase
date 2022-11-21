const express = require('express');

const {body} = require('express-validator')

const router = express.Router()
const {v4: uuidv4} = require('uuid')


const User = require('../models/user');

const authController = require('../controllers/auth')
const mysql = require('mysql2');
 
router.post(
    '/signup',
    [
        body('nome').trim().not().isEmpty(),
        body('email').isEmail().withMessage('Please enter a valid email')
        .custom(async (email) => {
            const user = await User.find(email);
            if(user[0].length > 0){
                return Promise.reject('email already exist')
            }
        })
        .normalizeEmail(),
        body('senha').trim().isLength({min: 7}),
    ], 
    authController.signup
);

router.post('/login', authController.login)
router.get(
    '/login/:id', (req,res, id) =>{
        const conexao = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Ae@1254453",
            database: "hospital"
        })


        conexao.query("SELECT * FROM cadastro_paciente",[id], (error, results, fields) => {
            if (error){
                res.status(500).json({mensagem: error.message})
              }
              res.status(200).json(results)
        })
    }
)


module.exports = router;

