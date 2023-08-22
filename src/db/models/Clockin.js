const { DataTypes } = require("sequelize");
const sequelize = require("../connection/db");

const Clockin = sequelize.define("Clockin", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  horario: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  aparelho: {
    type: DataTypes.STRING,
  },
  canal: {
    type: DataTypes.STRING,
  },
  modo: {
    type: DataTypes.STRING,
  },
  comentario: {
    type: DataTypes.STRING,
  },
  comprovante: {
    type: DataTypes.BLOB,
  },
  userId: {
    type: DataTypes.UUID,
  },
});

module.exports = Clockin;
