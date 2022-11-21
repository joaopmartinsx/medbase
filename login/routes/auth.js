const express = require('express');

const {body} = require('express-validator')

const router = express.Router()

const Medico = require('../models/user');

const authController = require('../controllers/auth')

router.post(
    '/medico',
    [
       body('crm').trim().not().isEmpty(),
       body('senha').trim().isLength({min: 3}), 
    ],
    authController.medico
);

router.post('/loginMedico', authController.loginMedico)




module.exports = router;

