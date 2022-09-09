const { Router, response } = require('express');
const router = Router();

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
        nivelPrioridade: 4, 
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
        nivelPrioridade: 10, 
    }
]


router.get('/', (request, response) => {
    let { nivelDificuldade } = request.query;
    let { nivelPrioridade } = request.query;

    if(nivelDificuldade) {
        nivelDificuldade = nivelDificuldade.split('-').map((numero) => Number(numero));

        const tasksFiltradas = tasks.filter((task) => {
            return task.nivelDificuldade >= nivelDificuldade[0] && task.nivelDificuldade <= nivelDificuldade[1];
        });
        response.send(200, tasksFiltradas);
    }

    
    // status, data
    response.send(200, tasks)
})



module.exports = router;