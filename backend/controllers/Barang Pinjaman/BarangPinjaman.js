const { BarangPinjaman, Users } = require('../../models/index');

const listBarang = async (req,res)=>{
    try {
        const data = await BarangPinjaman.findAll({
            where:{
                status_aktif: true,
            },
            attributes:[
                'id',
                'nama_barang_pinjaman', 
                'kategori_barang_pinjaman',
                'merek',
                'harga',
                'foto'
            ],
            include:{
                model:Users,
                as:'creator',
                attributes:['id','name','email']
            }
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

const barangDetail = async(req,res) =>{
    try {
        const data = await BarangPinjaman.findOne({
            where:{
                id: req.params.id
            },
            include:{
                model:Users,
                as:'creator',
                attributes:['id','name','email']
            }
        })

        return res.status(200).json({
            status: 'success',
            data
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const createBarang = async (req, res)=>{
    try {
        const body = req.body;
        const authUser = req.authUser;
        const data = await BarangPinjaman.create({
            kategori_barang_pinjaman : body.kategori_barang || null,
            nama_barang_pinjaman: body.nama_barang || null,
            merek: body.merek,
            deskripsi: body.deskripsi,
            harga: body.harga,
            foto: body.foto,
            status_aktif: body.status_aktif || false,
            create_by: authUser.id,
            update_by: authUser.id,
        });

        return res.status(200).json({
            status: 'success create',
            data
        })
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const updateBarang = async (req, res)=>{
    try {
        const body = req.body;
        const authUser = req.authUser;
        const data = await BarangPinjaman.update({
            kategori_barang_pinjaman : body.kategori_barang || null,
            nama_barang_pinjaman: body.nama_barang || null,
            merek: body.merek,
            deskripsi: body.deskripsi,
            harga: body.harga,
            foto: body.foto,
            status_aktif: body.status_aktif || false,
            update_by: authUser.id,
        },{
            where:{
                id: req.params.id
            }
        });

        return res.status(200).json({
            status: 'success Update',
        })
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

module.exports= {
    listBarang,
    barangDetail,
    createBarang,
    updateBarang
}