const { Router, response } = require('express');
const router = Router();

const addTaskHtml = '/home/eliasvasques/Documents/express/praticando1/src/front-end/addTask.html';

const tasks = [
    { 
        nome: 'Fazer tal coisa',
        descricao:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem.', 
        nivelDificuldade: 5, 
        nivelPrioridade: 1, 
    },
    { 
        nome: 'Fazer outra coisa',
        descricao:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem.', 
        nivelDificuldade: 4, 
        nivelPrioridade: 2, 
    },
    { 
        nome: 'Fazer uma terceira coisa',
        descricao:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem.', 
        nivelDificuldade: 10, 
        nivelPrioridade: 2, 
    },
    { 
        nome: 'Almoçar',
        descricao:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem.', 
        nivelDificuldade: 5, 
        nivelPrioridade: 3, 
    }
]


router.get('/', (request, response) => {
    const { nivelDificuldade } = request.query;
    const { nivelPrioridade } = request.query;

    let tasksFiltradas = tasks;

    if(nivelDificuldade) {
        let arrayNivelDificuldade = nivelDificuldade.split('-').map((numero) => Number(numero));

        tasksFiltradas = tasksFiltradas.filter((task) => {
            return task.nivelDificuldade >= arrayNivelDificuldade[0] && task.nivelDificuldade <= arrayNivelDificuldade[1];
        });
    }

    if(nivelPrioridade) {
        let nivelPrioridadeNumber = Number(nivelPrioridade);

        tasksFiltradas = tasksFiltradas.filter((task) => {
            return task.nivelPrioridade === nivelPrioridadeNumber;
        });
    }

    // status, data
    response.send(200, tasksFiltradas);
})

router.get('/addTask', (request, response) => {
    response.sendFile(addTaskHtml);
})

router.post('/addTask', (request, response) => {
    const { nome, descricao, nivelDificuldade, nivelPrioridade } = request.body;
    tasks.push({
        nome: nome,
        descricao: descricao,
        nivelDificuldade: Number(nivelDificuldade),
        nivelPrioridade: Number(nivelPrioridade)
    })
    response.sendFile(addTaskHtml);
})


module.exports = router;