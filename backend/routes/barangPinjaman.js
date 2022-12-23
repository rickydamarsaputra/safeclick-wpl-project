const express = require("express");
const {listBarang, createBarang, barangDetail, updateBarang} = require('../controllers/Barang Pinjaman/BarangPinjaman');
const { body } = require("express-validator");

const router = express.Router();

router.get('/barang-pinjaman', listBarang);
router.get('/barang-pinjaman/:id/detail', barangDetail);
router.post('/barang-pinjaman', createBarang);
router.patch('/barang-pinjaman/:id/update', updateBarang);

module.exports= router;