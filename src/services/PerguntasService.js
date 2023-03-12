const Joi = require('joi');
const { Perguntas } = require('../models/Perguntas');

module.exports = {
    async listar(req, res) {
        return await Perguntas.findAll({
            include: 'respostasPergunta'
        })
    },

    async salvar(req, res) {
        let bodyValidate = await this.validarBodySalvar(req.body)

        if (bodyValidate) {
            return bodyValidate.message
        }

        return await Perguntas.create({
            pergunta: req.body.pergunta,
            respostasPergunta: req.body.respostas
        }, {
            include: [{
                association: 'respostasPergunta'
            }]
        })
    },

    async validarBodySalvar(body) {
        const bodyValidate = Joi.object().keys({
            pergunta: Joi.string().required(),
            respostas: Joi.array().items(Joi.object().keys({
                resposta: Joi.string().required(),
                resposta_certa: Joi.boolean().valid(1, 0).required()
            })).min(4).required()
        });

        const { error, value } = bodyValidate.validate({
            "pergunta": body.pergunta,
            "respostas": body.respostas
        });

        return error
    },

    async excluir(id) {
        if (!await Perguntas.findByPk(id)) {
            return `Pergunta com o id ${id} não encontrada!`
        }

        await Perguntas.destroy({
            where: {
                id : id
            }
        })

        return `Pergunta com o id ${id} excluída com sucesso!`
    }
}