const { Perguntas } = require('../database/models/Perguntas');
const { Respostas } = require('../database/models/Respostas');

module.exports = {
    async listarTodasPerguntasEhRespostas() {
       return await Perguntas.findAll({
            include: Respostas
        })
    }
}