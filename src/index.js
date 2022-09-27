
const { response } = require('express')
const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/tarefas')

const app = express()

app.set('view engine', 'ejs')

// receber dados via POST
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



const tarefasRoute = require('./routes/tarefas')
app.use('/tarefas', tarefasRoute)

const PORT = 3001

app.listen(PORT, () => console.log(`Running Express server on Port ${PORT}`))


