'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('m_barang_pinjaman', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kategori_barang_pinjaman: {
        type: Sequelize.STRING
      },
      nama_barang_pinjaman:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      merek:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      deskripsi:{
        type:Sequelize.TEXT,
        allowNull:true,
      },
      harga:{
        type:Sequelize.INTEGER,
        allowNull:true,
      },
      foto:{
        type:Sequelize.TEXT,
        allowNull:true,
      },
      status_aktif:{
        type:Sequelize.BOOLEAN,
        allowNull:true,
      },
      create_by:{
        type:Sequelize.INTEGER,
        allowNull:true,
      },
      update_by:{
        type:Sequelize.INTEGER,
        allowNull:true,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('m_barang_pinjaman');
  }
};