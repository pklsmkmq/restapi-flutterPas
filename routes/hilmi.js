const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    return res.json({
        status: 200,
        message: "Successfully",
        data: [
            {
                namaGuru: "Fathan",
                hari: "senin",
                dataHari: [
                    {
                        pelajaran: "Matematika",
                        waktu: "08:00 - 09:30",
                        kelas: "XI - RPL"
                    },
                    {
                        pelajaran: "Matematika",
                        waktu: "09:30 - 11:00",
                        kelas: "XII - RPL"
                    },
                    {
                        pelajaran: "Matematika",
                        waktu: "13:00 - 15:00",
                        kelas: "XI - TKJ"
                    }
                ]
            },
            {
                namaGuru: "Fathan",
                hari: "selasa",
                dataHari: [
                    {
                        pelajaran: "Matematika",
                        waktu: "08:00 - 09:30",
                        kelas: "XII - RPL"
                    },
                    {
                        pelajaran: "Matematika",
                        waktu: "09:30 - 11:00",
                        kelas: "XI - TKJ"
                    },
                    {
                        pelajaran: "Matematika",
                        waktu: "13:00 - 15:00",
                        kelas: "XI - RPL"
                    }
                ]
            },
            {
                namaGuru: "Fathan",
                hari: "rabu",
                dataHari: [
                    {
                        pelajaran: "Matematika",
                        waktu: "08:00 - 09:30",
                        kelas: "XI - TKJ"
                    },
                    {
                        pelajaran: "Matematika",
                        waktu: "09:30 - 11:00",
                        kelas: "XI - RPL"
                    },
                    {
                        pelajaran: "Matematika",
                        waktu: "13:00 - 15:00",
                        kelas: "XII - RPL"
                    }
                ]
            },
            {
                namaGuru: "Fathan",
                hari: "kamis",
                dataHari: [
                    {
                        pelajaran: "Matematika",
                        waktu: "08:00 - 09:30",
                        kelas: "XI - RPL"
                    },
                    {
                        pelajaran: "Matematika",
                        waktu: "09:30 - 11:00",
                        kelas: "XII - RPL"
                    },
                    {
                        pelajaran: "Matematika",
                        waktu: "13:00 - 15:00",
                        kelas: "XI - TKJ"
                    }
                ]
            },
            {
                namaGuru: "Fathan",
                hari: "jumat",
                dataHari: [
                    {
                        pelajaran: "Matematika",
                        waktu: "08:00 - 09:30",
                        kelas: "XII - RPL"
                    },
                    {
                        pelajaran: "Matematika",
                        waktu: "09:30 - 11:00",
                        kelas: "XI - TKJ"
                    },
                    {
                        pelajaran: "Matematika",
                        waktu: "13:00 - 15:00",
                        kelas: "XI - RPL"
                    }
                ]
            },
            {
                namaGuru: "Fathan",
                hari: "sabtu",
                dataHari: [
                    {
                        pelajaran: "Matematika",
                        waktu: "08:00 - 09:30",
                        kelas: "XI - TKJ"
                    },
                    {
                        pelajaran: "Matematika",
                        waktu: "09:30 - 11:00",
                        kelas: "XI - RPL"
                    },
                    {
                        pelajaran: "Matematika",
                        waktu: "13:00 - 15:00",
                        kelas: "XII - RPL"
                    }
                ]
            },
            {
                namaGuru: "Lars Abi",
                hari: "senin",
                dataHari: [
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "08:00 - 09:30",
                        kelas: "XII - RPL"
                    },
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "09:30 - 11:00",
                        kelas: "XI - TKJ"
                    },
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "13:00 - 15:00",
                        kelas: "XI - RPL"
                    }
                ]
            },
            {
                namaGuru: "Lars Abi",
                hari: "selasa",
                dataHari: [
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "08:00 - 09:30",
                        kelas: "XI - TKJ"
                    },
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "09:30 - 11:00",
                        kelas: "XI - RPL"
                    },
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "13:00 - 15:00",
                        kelas: "XII - RPL"
                    }
                ]
            },
            {
                namaGuru: "Lars Abi",
                hari: "rabu",
                dataHari: [
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "08:00 - 09:30",
                        kelas: "XI - RPL"
                    },
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "09:30 - 11:00",
                        kelas: "XII - RPL"
                    },
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "13:00 - 15:00",
                        kelas: "XI - TKJ"
                    }
                ]
            },
            {
                namaGuru: "Lars Abi",
                hari: "kamis",
                dataHari: [
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "08:00 - 09:30",
                        kelas: "XII - RPL"
                    },
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "09:30 - 11:00",
                        kelas: "XI - TKJ"
                    },
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "13:00 - 15:00",
                        kelas: "XI - RPL"
                    }
                ]
            },
            {
                namaGuru: "Lars Abi",
                hari: "jumat",
                dataHari: [
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "08:00 - 09:30",
                        kelas: "XI - TKJ"
                    },
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "09:30 - 11:00",
                        kelas: "XI - RPL"
                    },
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "13:00 - 15:00",
                        kelas: "XII - RPL"
                    }
                ]
            },
            {
                namaGuru: "Lars Abi",
                hari: "sabtu",
                dataHari: [
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "08:00 - 09:30",
                        kelas: "XI - RPL"
                    },
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "09:30 - 11:00",
                        kelas: "XII - RPL"
                    },
                    {
                        pelajaran: "Bahasa Inggris",
                        waktu: "13:00 - 15:00",
                        kelas: "XI - TKJ"
                    }
                ]
            }
        ]
    });
});

router.get("/siswaRpl", async (req, res) => {
    return res.json({
        status: 200,
        message: "Successfully",
        data: [
            {
                hari: "senin",
                dataHari: {
                    kelas: "XI - RPL",
                    dataKelas: [
                        {
                            pelajaran: "Matematika",
                            waktu: "08:00 - 09:30",
                            kelas: "XI - RPL"
                        },
                        {
                            pelajaran: "Bahasa Inggris",
                            waktu: "09:30 - 11:00",
                            kelas: "XI - RPL"
                        },
                        {
                            pelajaran: "Bahasa Indonesia",
                            waktu: "13:00 - 15:00",
                            kelas: "XI - RPL"
                        }
                    ]
                }
            },
            {
                hari: "selasa",
                dataHari: {
                    kelas: "XI - RPL",
                    dataKelas: [
                        {
                            pelajaran: "Bahasa Inggris",
                            waktu: "08:00 - 09:30",
                            kelas: "XI - RPL"
                        },
                        {
                            pelajaran: "Matematika",
                            waktu: "09:30 - 11:00",
                            kelas: "XI - RPL"
                        },
                        {
                            pelajaran: "Bahasa Indonesia",
                            waktu: "13:00 - 15:00",
                            kelas: "XI - RPL"
                        }
                    ]
                }
            },
            {
                hari: "rabu",
                dataHari: {
                    kelas: "XI - RPL",
                    dataKelas: [
                        {
                            pelajaran: "Bahasa Indonesia",
                            waktu: "08:00 - 09:30",
                            kelas: "XI - RPL"
                        },
                        {
                            pelajaran: "Bahasa Inggris",
                            waktu: "09:30 - 11:00",
                            kelas: "XI - RPL"
                        },
                        {
                            pelajaran: "Matematika",
                            waktu: "13:00 - 15:00",
                            kelas: "XI - RPL"
                        }
                    ]
                }
            },
            {
                hari: "kamis",
                dataHari: {
                    kelas: "XI - RPL",
                    dataKelas: [
                        {
                            pelajaran: "Matematika",
                            waktu: "08:00 - 09:30",
                            kelas: "XI - RPL"
                        },
                        {
                            pelajaran: "Bahasa Indonesia",
                            waktu: "09:30 - 11:00",
                            kelas: "XI - RPL"
                        },
                        {
                            pelajaran: "Bahasa Inggris",
                            waktu: "13:00 - 15:00",
                            kelas: "XI - RPL"
                        }
                    ]
                }
            },
            {
                hari: "jumat",
                dataHari: {
                    kelas: "XI - RPL",
                    dataKelas: [
                        {
                            pelajaran: "Bahasa Inggris",
                            waktu: "08:00 - 09:30",
                            kelas: "XI - RPL"
                        },
                        {
                            pelajaran: "Matematika",
                            waktu: "09:30 - 11:00",
                            kelas: "XI - RPL"
                        },
                        {
                            pelajaran: "Bahasa Indonesia",
                            waktu: "13:00 - 15:00",
                            kelas: "XI - RPL"
                        }
                    ]
                }
            },
            {
                hari: "sabtu",
                dataHari: {
                    kelas: "XI - RPL",
                    dataKelas: [
                        {
                            pelajaran: "Matematika",
                            waktu: "08:00 - 09:30",
                            kelas: "XI - RPL"
                        },
                        {
                            pelajaran: "Bahasa Indonesia",
                            waktu: "09:30 - 11:00",
                            kelas: "XI - RPL"
                        },
                        {
                            pelajaran: "Bahasa Inggris",
                            waktu: "13:00 - 15:00",
                            kelas: "XI - RPL"
                        }
                    ]
                }
            }
        ]
    });
});

router.get("/siswaTkj", async (req, res) => {
    return res.json({
        status: 200,
        message: "Successfully",
        data: [
            {
                hari: "senin",
                dataHari: {
                    kelas: "XI - TKJ",
                    dataKelas: [
                        {
                            pelajaran: "Bahasa Inggris",
                            waktu: "08:00 - 09:30",
                            kelas: "XI - TKJ"
                        },
                        {
                            pelajaran: "Bahasa Indonesia",
                            waktu: "09:30 - 11:00",
                            kelas: "XI - TKJ"
                        },
                        {
                            pelajaran: "Matematika",
                            waktu: "13:00 - 15:00",
                            kelas: "XI - TKJ"
                        }
                    ]
                }
            },
            {
                hari: "selasa",
                dataHari: {
                    kelas: "XI - TKJ",
                    dataKelas: [
                        {
                            pelajaran: "Matematika",
                            waktu: "08:00 - 09:30",
                            kelas: "XI - TKJ"
                        },
                        {
                            pelajaran: "Bahasa Inggris",
                            waktu: "09:30 - 11:00",
                            kelas: "XI - TKJ"
                        },
                        {
                            pelajaran: "Bahasa Indonesia",
                            waktu: "13:00 - 15:00",
                            kelas: "XI - TKJ"
                        }
                    ]
                }
            },
            {
                hari: "rabu",
                dataHari: {
                    kelas: "XI - TKJ",
                    dataKelas: [
                        {
                            pelajaran: "Bahasa Inggris",
                            waktu: "08:00 - 09:30",
                            kelas: "XI - TKJ"
                        },
                        {
                            pelajaran: "Bahasa Indonesia",
                            waktu: "09:30 - 11:00",
                            kelas: "XI - TKJ"
                        },
                        {
                            pelajaran: "Matematika",
                            waktu: "13:00 - 15:00",
                            kelas: "XI - TKJ"
                        }
                    ]
                }
            },
            {
                hari: "kamis",
                dataHari: {
                    kelas: "XI - TKJ",
                    dataKelas: [
                        {
                            pelajaran: "Bahasa Indonesia",
                            waktu: "08:00 - 09:30",
                            kelas: "XI - TKJ"
                        },
                        {
                            pelajaran: "Matematika",
                            waktu: "09:30 - 11:00",
                            kelas: "XI - TKJ"
                        },
                        {
                            pelajaran: "Bahasa Inggris",
                            waktu: "13:00 - 15:00",
                            kelas: "XI - TKJ"
                        }
                    ]
                }
            },
            {
                hari: "jumat",
                dataHari: {
                    kelas: "XI - TKJ",
                    dataKelas: [
                        {
                            pelajaran: "Matematika",
                            waktu: "08:00 - 09:30",
                            kelas: "XI - TKJ"
                        },
                        {
                            pelajaran: "Bahasa Inggris",
                            waktu: "09:30 - 11:00",
                            kelas: "XI - TKJ"
                        },
                        {
                            pelajaran: "Bahasa Indonesia",
                            waktu: "13:00 - 15:00",
                            kelas: "XI - TKJ"
                        }
                    ]
                }
            },
            {
                hari: "sabtu",
                dataHari: {
                    kelas: "XI - TKJ",
                    dataKelas: [
                        {
                            pelajaran: "Bahasa Indonesia",
                            waktu: "08:00 - 09:30",
                            kelas: "XI - TKJ"
                        },
                        {
                            pelajaran: "Matematika",
                            waktu: "09:30 - 11:00",
                            kelas: "XI - TKJ"
                        },
                        {
                            pelajaran: "Bahasa Inggris",
                            waktu: "13:00 - 15:00",
                            kelas: "XI - TKJ"
                        }
                    ]
                }
            }
        ]
    });
});

module.exports = router;