const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    return res.json({
        status: "200",
        message: "suksen manampilkan data",
        data: [
            {
                gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXu7Z-Fttk2db7UgGtP_M8A8I7l2RIzC8GslIn4B2f0WT9YDq9m79aF8_d-fjt4Eg4-A&usqp=CAU",
                nama_mobil: "fortuner",
                kapasitas: "6 Seats",
                mesin: "2800cc",
                transmisi: "metik",
                harga: "Rp1.200.000/hari",
                lokasi: "malabar"
            },
            {
                gambar: "https://upload.wikimedia.org/wikipedia/commons/f/fd/2021_Mitsubishi_Pajero_Sport_2.4_Dakar_4x2_%28Indonesia%29_front_view_01.jpg",
                nama_mobil: "pajero",
                kapasitas: "6 Seats",
                mesin: "2800cc",
                transmisi: "metik",
                harga: "Rp1.200.000/hari",
                lokasi: "perum"
            },
            {
                gambar: "https://imgx.gridoto.com/crop/112x75:978x714/700x465/photo/2020/07/14/1723964793.jpeg",
                nama_mobil: "innova",
                kapasitas: "6 Seats",
                mesin: "2200cc",
                transmisi: "metik",
                harga: "Rp900.000/hari",
                lokasi: "jakarta selatan"
            },
            {
                gambar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/2017_Toyota_Voxy_ZS_Kirameki_%28front%29.jpg/1280px-2017_Toyota_Voxy_ZS_Kirameki_%28front%29.jpg",
                nama_mobil: "voxy",
                kapasitas: "6 Seats",
                mesin: "2000cc",
                transmisi: "metik",
                harga: "Rp1.000.000/hari",
                lokasi: "gading serpong"
            },
            {
                gambar: "https://carsolutions.id/joimg/posts/mitsubishi-expander-exceed-2017-901.jpg",
                nama_mobil: "expander",
                kapasitas: "6 Seats",
                mesin: "2200cc",
                transmisi: "manual",
                harga: "Rp800.000/hari",
                lokasi: "lippo"
            },
            {
                gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhfF7iNvU0JmixNBB0S4mIJNuW8DA4Ax7Zw&usqp=CAU",
                nama_mobil: "avanza",
                kapasitas: "6 Seats",
                mesin: "1200cc",
                transmisi: "manual",
                harga: "Rp300.000/hari",
                lokasi: "legok"
            },
            {
                gambar: "https://img4.icarcdn.com/3731207/gallery_used-car-mobil123-toyota-yaris-s-hatchback-indonesia_3731207_61DixG9RKDHTY5DZk1ZUs1.jpg?smia=xTM",
                nama_mobil: "yaris",
                kapasitas: "4 Seats",
                mesin: "1500cc",
                transmisi: "manual",
                harga: "Rp300.000/hari",
                lokasi: "medang"
            },
            {
                gambar: "https://imgcdnblog.carbay.com/wp-content/uploads/2020/12/10101310/Honda-Jazz_01.jpg",
                nama_mobil: "jazz",
                kapasitas: "4 Seats",
                mesin: "1800cc",
                transmisi: "manual",
                harga: "Rp700.000/hari",
                lokasi: "cimone"
            },
            {
                gambar: "https://media.karousell.com/media/photos/products/2022/8/5/km_10rb__daihatsu_ayla_x_2018__1659680534_b4eec7f5_progressive.jpg",
                nama_mobil: "ayla",
                kapasitas: "4 Seats",
                mesin: "1400cc",
                transmisi: "manual",
                harga: "Rp400.000/hari",
                lokasi: "bonang"
            },
            {
                gambar: "https://imgx.gridoto.com/crop/0x389:1000x964/700x465/photo/gridoto/2018/01/05/3750993424.jpg",
                nama_mobil: "rush",
                kapasitas: "4 Seats",
                mesin: "1700cc",
                transmisi: "metik",
                harga: "Rp700.000/hari",
                lokasi: "binong"
            }
        ]
    });
});

module.exports = router;