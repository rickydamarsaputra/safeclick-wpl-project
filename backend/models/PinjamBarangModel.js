'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PinjamBarang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.BarangPinjaman,{
        foreignKey:'id_barang_pinjaman',
        targetKey:'id',
        as:'barang_pinjaman'
      });

      this.belongsTo(models.Users,{
        foreignKey: 'id_user',
        targetKey: 'id',
        as:'peminjam'
      })
    }
  }
  PinjamBarang.init({
    id_barang_pinjaman: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    tgl_awal_book: DataTypes.DATE,
    tgl_akhir_book: DataTypes.DATE,
    status_pinjaman: DataTypes.STRING,
    status_aktif: DataTypes.BOOLEAN,
    create_by: DataTypes.INTEGER,
    update_by: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PinjamBarang',
    tableName: 't_pinjam_barang',
    timestamps:true,
  });
  return PinjamBarang;
};