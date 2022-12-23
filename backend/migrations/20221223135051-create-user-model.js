'use strict';

const { NOW } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false,

      },
      refresh_token: {
        type: Sequelize.TEXT,
        allowNull:true,
      },
      confirmed: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: NOW
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue:NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};