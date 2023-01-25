const express = require('express')
const routes = express.Router()
const QuizController = require('./controllers/QuizController')

routes.get('/perguntas', QuizController.listarTodasPerguntasEhRespostas)

module.exports = routes