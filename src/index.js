


const { response } = require('express');
const express = require('express');
const app = express();



const tasksRoute = require('./routes/tasks')
app.use('/tasks', tasksRoute)

const PORT = 3001;

app.listen(PORT, () => console.log(`Running Express server on Port ${PORT}`))

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/front-end/index.html');
    // __dirname : diretório raíz, absoluto
})


