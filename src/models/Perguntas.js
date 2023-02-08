const { DataTypes } = require("sequelize");
const conexaoDb = require('../database/conexaoDb');
const { Respostas } = require("./Respostas");

const Perguntas = conexaoDb.sequelize.define('Perguntas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    pergunta: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName : 'perguntas',
    timestamps: false
});

Perguntas.hasMany(Respostas, {
    foreignKey: 'id_pergunta',
    as: 'respostasPergunta'
});

module.exports = {
    Perguntas
}