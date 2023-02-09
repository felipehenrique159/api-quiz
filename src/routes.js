const express = require('express')
const routes = express.Router()
const QuizController = require('./controllers/QuizController')

routes.get('/perguntas', QuizController.listarTodasPerguntasComRespostas)
routes.post('/perguntas', QuizController.salvarPergunta)
routes.delete('/perguntas/:id', QuizController.excluirPerguntaComRespostas)

module.exports = routes