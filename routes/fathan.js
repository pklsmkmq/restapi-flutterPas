const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    return res.json({
        status: "success",
        message: "Berhasil menampilkan data json",
        data: [
            {
                id: 1,
                judul: "Football Field",
                image: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=676&q=80",
                tempatDaerah: "Bogor",
                tersedia: "available",
                harga: "160K",
                about_pitches: [
                    {
                        feature: "indor and out",
                        feature2: "Capcity (5)"
                    },
                    {
                        fasilitas: "Bathroom",
                        fasilitas2: "CCTV",
                        fasilitas3: "Parking",
                        fasilitas4: "Canteen"
                    }
                ],
                reviews: [
                    {
                        person: "Bagus ini lapangan sangat bagus",
                        person2: "Di sini fasilitas cukup lengkap saya sangat puas"
                    }
                ],
                opening_hours: [
                    {
                        Monday: "08:00 - 23:00",
                        Tuesday: "08:00 - 23:00",
                        Wenesday: "08:00 - 23:00",
                        Thursday: "08:00 - 23:00",
                        Friday: "13:00 - 23:00",
                        Sunday: "--Libur--"
                    }
                ]
            },
            {
                id: 2,
                judul: "Basket Field",
                image: "https://images.unsplash.com/photo-1509027572446-af8401acfdc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
                tempatDaerah: "Bogor",
                tersedia: "available",
                harga: "160K",
                about_pitches: [
                    {
                        feature: "indor and out",
                        feature2: "Capcity (13)"
                    },
                    {
                        fasilitas: "Bathroom",
                        fasilitas2: "CCTV",
                        fasilitas3: "Parking",
                        fasilitas4: "Canteen"
                    }
                ],
                reviews: [
                    {
                        person: "Bagus ini lapangan sangat bagus",
                        person2: "Di sini fasilitas cukup lengkap saya sangat puas"
                    }
                ],
                opening_hours:
                    [
                        {
                            Monday: "08:00 - 23:00",
                            Tuesday: "08:00 - 23:00",
                            Wenesday: "08:00 - 23:00",
                            Thursday: "08:00 - 23:00",
                            Friday: "13:00 - 23:00",
                            Sunday: "--Libur--"
                        }
                    ]
            },
            {
                id: 3,
                judul: "Badminton Field",
                image: "https://plus.unsplash.com/premium_photo-1663039984787-b11d7240f592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                tempatDaerah: "Bogor",
                tersedia: "available",
                harga: "160K",
                about_pitches: [
                    {
                        feature: "indor and out",
                        feature2: "Capcity (2)"
                    },
                    {
                        fasilitas: "Bathroom",
                        fasilitas2: "CCTV",
                        fasilitas3: "Parking",
                        fasilitas4: "Canteen"
                    }
                ],
                reviews: [
                    {
                        person: "Bagus ini lapangan sangat bagus",
                        person2: "Di sini fasilitas cukup lengkap saya sangat puas"
                    }
                ],
                opening_hours:
                    [
                        {
                            Monday: "08:00 - 23:00",
                            Tuesday: "08:00 - 23:00",
                            Wenesday: "08:00 - 23:00",
                            Thursday: "08:00 - 23:00",
                            Friday: "13:00 - 23:00",
                            Sunday: "--Libur--"
                        }
                    ]
            },
            {
                id: 4,
                judul: "Tenis Field",
                image: "https://images.unsplash.com/photo-1567343391383-e36cb5959b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fFRlbmlzJTIwZmllbGR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                tempatDaerah: "Bogor",
                tersedia: "available",
                harga: "160K",
                about_pitches: [
                    {
                        feature: "indor and out",
                        feature2: "Capcity (2)"
                    },
                    {
                        fasilitas: "Bathroom",
                        fasilitas2: "CCTV",
                        fasilitas3: "Parking",
                        fasilitas4: "Canteen"
                    }
                ],
                reviews: [
                    {
                        person: "Bagus ini lapangan sangat bagus",
                        person2: "Di sini fasilitas cukup lengkap saya sangat puas"
                    }
                ],
                opening_hours:
                    [
                        {
                            Monday: "08:00 - 23:00",
                            Tuesday: "08:00 - 23:00",
                            Wenesday: "08:00 - 23:00",
                            Thursday: "08:00 - 23:00",
                            Friday: "13:00 - 23:00",
                            Sunday: "--Libur--"
                        }
                    ]
            },
            {
                id: 5,
                judul: "Golf Field",
                image: "https://images.unsplash.com/photo-1591701284171-b6b4af1ce95a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8R29sZiUyMGZpZWxkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                tempatDaerah: "Bogor",
                tersedia: "available",
                harga: "160K",
                about_pitches: [
                    {
                        feature: "indor and out",
                        feature2: "Capcity (5)"
                    },
                    {
                        fasilitas: "Bathroom",
                        fasilitas2: "CCTV",
                        fasilitas3: "Parking",
                        fasilitas4: "Canteen"
                    }
                ],
                reviews: [
                    {
                        person: "Bagus ini lapangan sangat bagus",
                        person2: "Di sini fasilitas cukup lengkap saya sangat puas"
                    }
                ],
                opening_hours:
                    [
                        {
                            Monday: "08:00 - 23:00",
                            Tuesday: "08:00 - 23:00",
                            Wenesday: "08:00 - 23:00",
                            Thursday: "08:00 - 23:00",
                            Friday: "13:00 - 23:00",
                            Sunday: "--Libur--"
                        }
                    ]
            }
        ]
    });
});

module.exports = router;