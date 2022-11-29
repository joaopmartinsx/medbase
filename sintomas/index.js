const express = require('express');
const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth')

const errorController = require('./controllers/error')
const app = express()
const ports = process.env.PORT || 6000;

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next()

});

app.use('/auth', authRoutes);

app.use(errorController.get404)

app.use(errorController.get500)


app.listen(ports, () => console.log(`Listening on port ${ports}`))

