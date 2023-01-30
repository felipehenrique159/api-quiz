const { Perguntas } = require('../database/models/Perguntas');
const { Respostas } = require('../database/models/Respostas');

module.exports = {
    async listar(req, res) {
        return await Perguntas.findAll({
            include: Respostas
        })
    },

    async salvar(req, res) {
        /*TODO - Implementar*/
        return req.body
    }
}