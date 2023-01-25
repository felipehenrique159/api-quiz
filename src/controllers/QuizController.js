const { Perguntas } = require('../database/models/Perguntas');
const { Respostas } = require('../database/models/Respostas');

module.exports = {
    async listarTodasPerguntasEhRespostas(req, res) {
        res.json(
            await Perguntas.findAll({
                include: Respostas
            })
        )
    }
}