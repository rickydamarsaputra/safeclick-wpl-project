const { NOW } = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users',{
      id: {
        type: Sequelize.BIGINT,
        autoIncrement:true,
        primaryKey:true,
      },

      created_at:{
        type: Sequelize.TIME,
        allowNull: true,
        defaultValue: NOW
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
