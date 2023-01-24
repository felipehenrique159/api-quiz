const express = require('express')
const app = express()
const { Sequelize } = require('sequelize');
const { QueryTypes } = require('sequelize');

const sequelize = new Sequelize('quiz', 'felipe', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });

app.get('/perguntas', async function (req, res) {
    const perguntas = await sequelize.query("SELECT * FROM `perguntas`", { type: QueryTypes.SELECT });
    const respostas = await sequelize.query("SELECT * FROM `respostas`", { type: QueryTypes.SELECT });

    let perguntasEhRespostas = [];

    perguntas.forEach(pergunta => {
        perguntasEhRespostas.push({
            pergunta: pergunta.pergunta,
            respostas: respostas.filter(function (resposta) {
                if (resposta.id_pergunta == pergunta.id) {
                    return resposta.resposta
                }
            })
        })
    });

    res.json(perguntasEhRespostas)
})

app.listen(3000)