const express = require("express");
const {listBarang, createBarang, barangDetail, updateBarang} = require('../controllers/Barang Pinjaman/BarangPinjaman');
const { createPinjamBarang, listPinjamBarangUser } = require('../controllers/Barang Pinjaman/PinjamBarang');
const { body } = require("express-validator");

const router = express.Router();

router.get('/barang-pinjaman', listBarang);
router.get('/barang-pinjaman/:id/detail', barangDetail);
router.post('/barang-pinjaman', createBarang);
router.patch('/barang-pinjaman/:id/update', updateBarang);

router.get('/barang-pinjaman/pinjam-barang', listPinjamBarangUser);
router.post('/barang-pinjaman/pinjam-barang', createPinjamBarang);

module.exports= router;