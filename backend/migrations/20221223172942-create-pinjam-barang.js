'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('t_pinjam_barang', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_barang_pinjaman: {
        type: Sequelize.INTEGER
      },
      id_user:{
        type: Sequelize.INTEGER
      },
      tgl_awal_book:{
        type: Sequelize.DATE
      },
      tgl_akhir_book:{
        type: Sequelize.DATE
      },
      status_pinjaman:{
        type: Sequelize.STRING
      },
      status_aktif:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      create_by:{
        type: Sequelize.INTEGER
      },
      update_by:{
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('t_pinjam_barang');
  }
};