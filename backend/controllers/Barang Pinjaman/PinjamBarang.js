const { PinjamBarang, BarangPinjaman, Users } = require('../../models/index');

const listPinjamBarangUser = async(req,res)=>{
    try {
        const user = req.authUser;
        const data = await PinjamBarang.findAll({
            where:{
                id_user: user.id
            },
            include:[
                {
                    model: BarangPinjaman,
                    as:'barang_pinjaman'
                },
                {
                    model: Users,
                    as:'peminjam',
                    attributes:['id','name','email']
                },
            ]
        });

        return res.status(200).json({
            status: 'success',
            data
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const createPinjamBarang = async (req,res)=>{
    try {
        const user = req.authUser;
        const body = req.body;

        const barangPinjaman = BarangPinjaman.findOne({
            where:{
                id: body.id_barang,
            }
        });
        if(!barangPinjaman){
            res.status(400).json({
                status: 'fail',
                message: 'Barang Pinjaman Not Found'
            })
        }

        const data = await PinjamBarang.create({
            id_barang_pinjaman : body.id_barang,
            id_user: user.id,
            tgl_awal_book: body.tgl_awal_book,
            tgl_akhir_book: body.tgl_akhir_book,
            status_pinjaman: body.status_pinjaman,
            status_aktif: body.status_aktif || false,
            create_by: user.id,
            update_by: user.id,
        });

        return res.status(200).json({
            status: 'success Create',
            data
        })

    } catch (error) {
         console.log(error);
        res.status(400).json(error);
    }
}

module.exports = {
    listPinjamBarangUser,
    createPinjamBarang
}