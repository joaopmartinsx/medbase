const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()
app.use(express.json())

const areaDeLogin = {}

app.post('/login/:id/espera', (req,res) =>{
    const idObs = uuidv4()
    const {login, sintomas} = req.body
    const areaDeLoginId = areaDeLogin[req.params.id] || []
    areaDeLoginId.push({id: idObs, login: login, sintomas: sintomas})
    areaDeLogin[req.params.id] = areaDeLoginId

    res.status(201).send(areaDeLoginId)
})

app.get('/login/:id/espera', (req,res) =>{
    res.send(areaDeLogin[req.params.id] || [])
})


app.listen(3000, () => {
    console.log('rodando')
})