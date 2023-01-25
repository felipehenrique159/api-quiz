const { DataTypes } = require("sequelize");
const conexaoDb = require('../conexaoDb')

const Respostas = conexaoDb.sequelize.define('Respostas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    resposta: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    PerguntaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field : 'id_pergunta'
    },
    RespostaCerta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field : 'resposta_certa'
    }
}, {
    tableName : 'respostas',
    timestamps: false
});

module.exports = {
    Respostas
}