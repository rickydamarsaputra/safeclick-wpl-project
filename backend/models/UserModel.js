const { Sequelize } = require("sequelize");
const db = require("../config/database.js");

const { DataTypes } = Sequelize;
const Users = db.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: {
        args: [5],
        msg: "Name must be at least 5 characters in length"
      },
    }
  },
  refresh_token: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  confirmed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  freezeTableName: true
})

module.exports = Users;