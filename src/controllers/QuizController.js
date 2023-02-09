const PerguntasService = require('../services/PerguntasService')

module.exports = {
    async listarTodasPerguntasComRespostas(req, res) {
        res.json(
            await PerguntasService.listar()
        )
    },

    async salvarPergunta(req, res) {
        res.json(
            await PerguntasService.salvar(req, res)
        )
    },

    async excluirPerguntaComRespostas(req, res) {
        res.json(
            await PerguntasService.excluir(req.params.id)
        )
    }
}