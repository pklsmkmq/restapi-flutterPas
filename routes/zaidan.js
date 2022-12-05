const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    return res.json({
        status: "success",
        message: "sukses menampilkan data",
        data: [
            {
                id: 1,
                keterangan: "Hadir",
                jumlah: "125"
            },
            {
                id: 2,
                keterangan: "Izin",
                jumlah: "25"
            },
            {
                id: 3,
                keterangan: "Tanpa Keterangan",
                jumlah: "5"
            }
        ]
    });
});

router.get("/tugas", async (req, res) => {
    return res.json({
        status: "success",
        message: "sukses menampilkan data",
        data: [
            {
                id: 1,
                hari: "Senin",
                gambar: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                nama_tugas: "Laporan Mingguan"
            },
            {
                id: 2,
                hari: "Selasa",
                gambar: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHdvcmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                nama_tugas: "Design Banner"
            },
            {
                id: 3,
                hari: "Rabu",
                gambar: "https://images.unsplash.com/photo-1531178625044-cc2a0fb353a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvcmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                nama_tugas: "Editing Video"
            },
            {
                id: 4,
                hari: "Kamis",
                gambar: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                nama_tugas: "Meeting Proyek"
            },
            {
                id: 5,
                hari: "Jum'at",
                gambar: "https://images.unsplash.com/photo-1565004569929-4f400c11e9ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                nama_tugas: "Photography"
            },
            {
                id: 6,
                hari: "Senin",
                gambar: "https://images.unsplash.com/photo-1565004569929-4f400c11e9ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                nama_tugas: "Laporan Mingguan"
            },
            {
                id: 7,
                hari: "Selasa",
                gambar: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                nama_tugas: "Work From Home"
            },
            {
                id: 8,
                hari: "Rabu",
                gambar: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvcmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                nama_tugas: "Kerja Lapangan"
            },
            {
                id: 9,
                hari: "Kamis",
                gambar: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJlc2VudGF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                nama_tugas: "Presentasi Proyek"
            },
            {
                id: 10,
                hari: "Jum'at",
                gambar: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQxfHx3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                nama_tugas: "Handle Laporan hasil Proyek"
            }
        ]
    });
});

module.exports = router;