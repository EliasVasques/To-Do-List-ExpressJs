
const { response } = require('express');
const express = require('express');
const app = express();

// receber dados via POST
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


const tasksRoute = require('./routes/tasks')
app.use('/tasks', tasksRoute)

const PORT = 3001;

app.listen(PORT, () => console.log(`Running Express server on Port ${PORT}`))

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/front-end/home.html');
})


