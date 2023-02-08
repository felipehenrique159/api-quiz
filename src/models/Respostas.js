const { DataTypes } = require("sequelize");
const conexaoDb = require('../database/conexaoDb')

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
    id_pergunta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field : 'id_pergunta'
    },
    resposta_certa: {
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