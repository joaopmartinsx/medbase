const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

app.post('/eventos', (req,res) =>{
    const evento = req.body;
    console.log(evento)

    axios.post('http://localhost:3000/signup', signup)
    axios.post('http://localhost:3000/login', login)
    axios.post('http://localhost:4000/auth/loginMedico', loginMedico)
    axios.post('http://localhost:4000/auth/Medico', Medico)

    res.status(200).send({msg:"ok"})
});

app.listen(1000, () => {
    console.log('Barramento de eventos. porta 10000')
})