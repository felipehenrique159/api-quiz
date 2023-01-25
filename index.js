const express = require('express')
const app = express()
const QuizController = require('./controllers/QuizController');

app.get('/perguntas', async function (req, res) {
    res.json(
        await QuizController.listarTodasPerguntasEhRespostas()
    )
})

app.listen(3000)