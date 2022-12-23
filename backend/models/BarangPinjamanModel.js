'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BarangPinjaman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users,{
        foreignKey:'create_by',
        targetKey:'id',
        as:'creator'
      })
    }
  }
  BarangPinjaman.init({
    kategori_barang_pinjaman: DataTypes.STRING,
    nama_barang_pinjaman: DataTypes.STRING,
    merek: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    foto: DataTypes.STRING,
    status_aktif: DataTypes.BOOLEAN,
    create_by: DataTypes.INTEGER,
    update_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BarangPinjaman',
    tableName: 'm_barang_pinjaman',
    timestamps:true,
  });
  return BarangPinjaman;
};