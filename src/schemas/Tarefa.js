const mongoose = require('mongoose')
const { Schema } = mongoose

const tarefaSchema = Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        default: ''
    }
    ,
    nivelDificuldade: {
        type: Number,
        required: true
    }
    ,
    nivelPrioridade: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model( 'Tarefa', tarefaSchema )