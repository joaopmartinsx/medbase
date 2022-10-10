const express = require('express')
const app = express()
app.use(express.json())
const {v4: uuidv4} = require('uuid')

const ListadeReceitas = {}

app.post('/receitas/:id', (req,res) => {
  const idObs = uuidv4()
  const {receitas} = req.body
  const ListaReceitasId = ListadeReceitas[req.params.id] || []
  ListaReceitasId.push({id: idObs, receitas: receitas})
  ListadeReceitas[req.params.id] = ListaReceitasId

  res.status(201).send(ListaReceitasId)
}) 

app.get('/receitas/:id', (req,res) =>{
  res.send(ListadeReceitas[req.params.id] || [])
})

app.listen(6000, () => console.log("Consultas. Porta 6000."))


