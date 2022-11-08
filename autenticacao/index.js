require('dotenv').config()
const express = require('express')
const mysql2 = require('mysql2')
const nodemon = require('nodemon')
const app = express()
const cors = require('cors');
app.use(express.json())

// const DB_HOST = process.env.DB_HOST
// const DB_USER = process.env.DB_USER
// const DB_SCHEMA = process.env.DB_SCHEMA
// const DB_PASSWORD = process.env.DB_PASSWORD

const { DB_HOST, DB_USER, DB_SCHEMA, DB_PASSWORD } = process.env
const pool = mysql2.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_SCHEMA,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT");
  res.header("Access-Control-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type,Accept");

  app.use(cors())
  next()
})

//POST http://localhost:3000/medicos
app.post('/medicos', (req, res) => {

  // const crm = req.body.crm
  // const nome = req.body.nome
  const { crm, nome } = req.body

  // sql injection pde acontecer aqui, não faça assim. Ou seja, não concatene."
  const sql = "INSERT INTO tb_medico (crm, nome) VALUES (?, ?)"

  pool.query(
    sql,
    [crm, nome],
    (err, results, fields) => {
      console.log("Erro: ", err)
      console.log("Results: ", results)
      console.log("Fields: ", fields)
      res.send("ok")
    })
})

//GET http://localhost:3000/medicos
app.get('/medicos', (req, res) => {
  pool.query('SELECT * FROM tb_medico', (err, results, fields) => {
    console.log('err', err)
    console.log('results', results)
    console.log('fields', fields)
    //3. Devolver o resultado utilizando uma função callback
    res.json(results)
  })
})


//GET http://localhost:3000/pacientes
app.get('/pacientes', (req, res) => {
  pool.query('SELECT * FROM tb_paciente', (err, results, fields) => {
    if (err) {
      res.status(500).json({ mensagem: "Erro interno" })
    }
    else {
      res.status(200).json(results)
    }
  })
})

app.get('/consultas', (req, res) => {
  //2. Especificar o comando SQL
  const sql = `
    SELECT m.nome as nome_medico, c.data_hora, p.nome as nome_paciente
      FROM tb_medico m, tb_consulta c, tb_paciente p
      WHERE
      m.crm = c.crm AND c.cpf = p.cpf
  `
  //3. Executar o comando
  pool.query(
    sql,
    (err, results, fields) => {
      //4. Na callback, devolver o resultado para o cliente
      res.json(results)
    }
  )

})

const porta = 3000
app.listen(porta, () => console.log(`Executando. Porta ${porta}`))



