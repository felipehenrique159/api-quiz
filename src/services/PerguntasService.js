const Joi = require('joi');
const { Perguntas } = require('../database/models/Perguntas');
const { Respostas } = require('../database/models/Respostas');

module.exports = {
    async listar(req, res) {
        return await Perguntas.findAll({
            include: Respostas
        })
    },

    async salvar(req, res) {
        let bodyValidate = await this.validarBodySalvar(req.body)

        if (bodyValidate) {
            res.json(bodyValidate.message)
            return
        }

        return await Perguntas.create({
            pergunta: req.body.pergunta,
            respostas: req.body.respostas
        }, {
            include: [{
                association: Perguntas.hasMany(Respostas, { as: 'respostas' }),
                as: 'respostas'
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
    }
}