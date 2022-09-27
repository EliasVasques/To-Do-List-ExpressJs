const { Router, response } = require('express');
const tarefaSchema = require('../schemas/Tarefa')

const router = Router();

router.get('/', (request, response) => {
    const { nivelDificuldade } = request.query;
    const { nivelPrioridade } = request.query;


    tarefaSchema.find()
        .then( (tarefas) => {
            let tarefasFiltradas = tarefas;
            if(nivelDificuldade) {
                let nivelDificuldadeNumero = Number(nivelDificuldade)
                tarefasFiltradas = tarefasFiltradas.filter((tarefa) => {
                    return tarefa.nivelDificuldade === nivelDificuldadeNumero
                });
            }
            if(nivelPrioridade) {
                let nivelPrioridadeNumber = Number(nivelPrioridade);
                tarefasFiltradas = tarefasFiltradas.filter((tarefa) => {
                    return tarefa.nivelPrioridade === nivelPrioridadeNumber;
                });
            }
            response.status(200).render('lista-tarefas', { tarefas: tarefasFiltradas })
        })
        .catch( (erro) => {
            console.log(erro)
            response.status(404).render('lista-tarefas', { tarefas: tarefasFiltradas })
        })
})

router.get('/add', (request, response) => {
    response.status(200).render('add-tarefas.ejs')
})

router.post('/add', (request, response) => {
    const { nome, descricao, nivelDificuldade, nivelPrioridade } = request.body;

    const novaTarefa = tarefaSchema({
        nome: nome,
        descricao: descricao,
        nivelDificuldade: Number(nivelDificuldade),
        nivelPrioridade: Number(nivelPrioridade)
    })
    novaTarefa.save()
        .then(() => response.redirect('/tarefas'))
        .catch(erro => {
            console.log(erro)
            response.redirect('/tarefas')
        })
})

router.get('/deletar/:id', (request, response) => {
    tarefaSchema.findOne({ _id: request.params.id })
        .then( tarefa => response.status(200).render('deletar-tarefas.ejs', { tarefa: tarefa }) )
        .catch( erro => response.status(404).send('Erro ao deletar Tarefa'))
})

router.post('/deletar/:id', (request, response) => {
    tarefaSchema.findByIdAndDelete(request.params.id)
        .then( tarefa => response.status(200).redirect('/tarefas') )
        .catch( erro => response.status(404).send('Erro ao deletar Tarefa'))
})




module.exports = router;