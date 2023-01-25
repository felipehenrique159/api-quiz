const { DataTypes } = require("sequelize");
const conexaoDb = require('../conexaoDb');
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
    foreignKey: {
        name : 'id_pergunta'
    }
});

module.exports = {
    Perguntas
}