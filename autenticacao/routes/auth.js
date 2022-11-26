const express = require('express');

const {body} = require('express-validator')

const router = express.Router()
const {v4: uuidv4} = require('uuid')


const User = require('../models/user');

const authController = require('../controllers/auth')
const mysql = require('mysql2');
const pool = require('pool')
 
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
    '/login/:id', (req,res, error) =>{
        console.log(req.params.id)
        const pool = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Ae@1254453",
            database: "hospital"
        })

        const sql = "SELECT nome FROM cadastro_paciente WHERE id = " + req.params.id ;


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

