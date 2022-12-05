const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    return res.json({
        status: "200",
        message: "sukses bro",
        data: [
            {
                id: "1",
                gambar: "https://media.istockphoto.com/id/618335156/photo/africa-egypt-cairo-giza-pyramids.jpg?b=1&s=170667a&w=0&k=20&c=s-ZRIsDDcjUSj65mzq-3zQYUQk02qz9CAKuVexSEzdg=",
                lokasi: "MESIR",
                judul: "Spinx",
                diskon: "30% off",
                duration: "2 Days",
                ratings: "500 Reviews",
                harga: "300 USD",
                deskripsi: "The Great Sphinx of Giza is a limestone statue in the shape of a reclining sphinx. The sphinx is a mythological creature with the head of a human and the body of a lion. The statue faces straight from west to east, and is located on the Giza Plateau on the west bank of the Nile River in Giza, Egypt."
            },
            {
                id: "2",
                gambar: "https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVybGlvbiUyMHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                lokasi: "SINGAPORE",
                judul: "Merlion Park",
                diskon: "50% off",
                duration: "4 Days",
                ratings: "450 Reviews",
                harga: "450 USD",
                deskripsi: "Merlion Park, is a landmark and major tourist attraction of Singapore, located at One Fullerton, Singapore, near the Central Business District. The Merlion is a mythical creature with the head of a lion and the body of a fish that is widely used as the mascot and national personification of Singapore."
            },
            {
                id: "3",
                gambar: "https://images.unsplash.com/photo-1605976528013-638e49b6599f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFzamlkJTIwbmFiYXdpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                lokasi: "SAUDI ARABIA",
                judul: "Masjid Nabawi",
                diskon: "40% off",
                duration: "3 Days",
                ratings: "500 Reviews",
                harga: "350 USD",
                deskripsi: "The Prophet's Mosque is a mosque in the city of Medina, Saudi Arabia. The Nabawi Mosque is the third mosque built in Islamic history and is one of the second largest mosques in the world. This mosque is considered a holy place by Muslims besides the Grand Mosque in Mecca."
            },
            {
                id: "4",
                gambar: "https://images.unsplash.com/photo-1602154663343-89fe0bf541ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3VudW5nJTIwYnJvbW98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                lokasi: "INDONESIA",
                judul: "Mount Bromo",
                diskon: "50% off",
                duration: "5 Days",
                ratings: "500 Reviews",
                harga: "500 USD",
                deskripsi: "Mount Bromo or in the Tengger language spelled 'Brama' also called the Tengger Caldera, is an active volcano in East Java, Indonesia."
            },
            {
                id: "5",
                gambar: "https://media.istockphoto.com/id/1426628495/photo/dome-of-the-rock-at-night.jpg?b=1&s=170667a&w=0&k=20&c=jsSei4YezBJh7XeC_c6_IM8aPx8o3JwfnMhB-5SJtk4=",
                lokasi: "PALESTINA",
                judul: "Masjid Al-aqsa",
                diskon: "50% off",
                duration: "7 Days",
                ratings: "500 Reviews",
                harga: "500 USD",
                deskripsi: "Masjidilaqsa or Al-Aqsa Mosque, also known as Baitulmaqdis or the Temple, Al Haram Asy Sharif, Temple Mount, is the name of a complex covering an area of 144,000 square meters located in the Old City of Jerusalem. This complex is a holy place for Muslims, Jews and Christians."
            },
            {
                id: "6",
                gambar: "https://images.unsplash.com/photo-1562008928-6185cc645f76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGluayUyMGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                lokasi: "LOMBOK",
                judul: "Pink Beach",
                diskon: "30% off",
                duration: "2 Days",
                ratings: "200 Reviews",
                harga: "400 USD",
                deskripsi: "Pink sand beaches with crystal clear waters & coral reefs filled with tropical fish & strong currents."
            },
            {
                id: "7",
                gambar: "https://images.unsplash.com/photo-1573531447902-d9706a79e038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG93bnN2aWxsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                lokasi: "AUSTRALIA",
                judul: "Townsville",
                diskon: "45% off",
                duration: "3 Days",
                ratings: "400 Reviews",
                harga: "550 USD",
                deskripsi: "Townsville is a city in Australia. It is located in the northeastern part of the country in the state of Queensland to be precise. Founded in 1865. Its population is 143,328 people. The city is located 1,300 km from Brisbane and 350 km south of Cairns."
            },
            {
                id: "8",
                gambar: "https://images.unsplash.com/photo-1664489689704-748fa89bc172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFuZ2VscyUyMGZhbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                lokasi: "VENEZUELA",
                judul: "Angels Fals",
                diskon: "35% off",
                duration: "4 Days",
                ratings: "450 Reviews",
                harga: "450 USD",
                deskripsi: "Angel Falls or Salto Angel is the highest free-falling waterfall in the world with a height of 979 meters with an unhindered fall of about 807 meters. This waterfall is located in Rio Caroni, Canaima National Park, Venezuela."
            },
            {
                id: "9",
                gambar: "https://images.unsplash.com/photo-1595846415458-404defd93fb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFtdWtrYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                lokasi: "TURKI",
                judul: "Pamukkale",
                diskon: "45% off",
                duration: "5 Days",
                ratings: "500 Reviews",
                harga: "500 USD",
                deskripsi: "Translated from English-Pamukkale, which means cotton castle in Turkish, is a natural site in Denizli Province in southwest Turkey. This area is famous for the carbonate minerals left by the hot springs."
            },
            {
                id: "10",
                gambar: "https://media.istockphoto.com/id/1187439022/photo/mount-everest-himalaya-aerial-view.jpg?b=1&s=170667a&w=0&k=20&c=IBe0UclX6zaos4ezM1MklXrfoL3IWOchsU-IHxDZ5mM=",
                lokasi: "NEPAL",
                judul: "Mounth Everest",
                diskon: "50% off",
                duration: "3 Days",
                ratings: "500 Reviews",
                harga: "450 USD",
                deskripsi: "Mount Everest is the highest mountain in the world. Its peak ridge marks the border between Nepal and Tibet; the peak is in Tibet. In Nepal, this mountain is called Sagarmatha and in Tibetan Chomolangma or Qomolangma, pronounced in Chinese 珠穆朗瑪峰"
            },
            {
                id: "11",
                gambar: "https://images.unsplash.com/photo-1619558627520-477004f49550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGd1bnVuZyUyMGJsYW5jfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                lokasi: "PRANCIS",
                judul: "Mounth Blanc",
                diskon: "30% off",
                duration: "4 Days",
                ratings: "400 Reviews",
                harga: "500 USD",
                deskripsi: "Mount Blanc also known as La Dame Blanche in Italian, is the highest mountain in western Europe with an altitude of around 4,810 meters. This mountain is part of the Alps."
            },
            {
                id: "12",
                gambar: "https://cdn.idntimes.com/content-images/post/20190819/2-edbca19ce245b9ca03f7ee1c1b6cf790.jpg",
                lokasi: "ITALIA",
                judul: "Mounth Vesuvius",
                diskon: "35% off",
                duration: "2 Days",
                ratings: "250 Reviews",
                harga: "200 USD",
                deskripsi: "Mount Vesuvius is the only active volcano in Mainland Europe located east of Naples, Italy. In 79, this volcanic eruption destroyed the city of Pompeii. Pompeii is an ancient Roman city that has been in ruins near the city of Naples and is now in the Campania region, Italy."
            },
            {
                id: "13",
                gambar: "https://images.unsplash.com/photo-1547823065-4cbbb2d4d185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGd1bnVuZyUyMGZ1aml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                lokasi: "JEPANG",
                judul: "Mounth Fuji",
                diskon: "50% off",
                duration: "4 Days",
                ratings: "550 Reviews",
                harga: "450 USD",
                deskripsi: "Mount Fuji, located on the island of Honshu, is the highest mountain in Japan, at 3,776.24 m. This mountain is the second highest volcano located on an island in the continent of Asia, and the seventh highest peak of an island on Earth."
            },
            {
                id: "14",
                gambar: "https://images.unsplash.com/photo-1599921614325-12c01757afb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FpbnQlMjBtYWxvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                lokasi: "PRANCIS",
                judul: "Saint Malo",
                diskon: "30% off",
                duration: "5 Days",
                ratings: "500 Reviews",
                harga: "500 USD",
                deskripsi: "Saint-Malo is a city in France located in the west. Precisely in the province of Brittany on the English Channel. The population is 50,675 people and has an area of 36.58 km². The population density is 1,385 people/km². The current mayor is Claude Renoult"
            },
            {
                id: "15",
                gambar: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FudG9yaW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                lokasi: "YUNANI",
                judul: "Santorini",
                diskon: "40% off",
                duration: "2 Days",
                ratings: "300 Reviews",
                harga: "300 USD",
                deskripsi: "Santorini is a circular group of volcanic islands in the Aegean Sea, located 200 km from mainland Greece. This island is part of the Cyclades Islands group. This island has an area of 73 km² and a population of 13,600 people. The island is known for its tourism sector and wine industry."
            },
            {
                id: "16",
                gambar: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFsYXdhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                lokasi: "FILIPINA",
                judul: "Palawan",
                diskon: "50% off",
                duration: "4 Days",
                ratings: "450 Reviews",
                harga: "350 USD",
                deskripsi: "Palawan Province is a province in the Philippines. Its capital is Puerto Princesa City. This province is located in the MIMAROPA region. This province has an area of 14,896 km² with a population of 892,660 people or 178,532 residences. This province has a population density of 67 people/km²."
            },
            {
                id: "17",
                gambar: "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                lokasi: "INDONESIA",
                judul: "Bali",
                diskon: "45% off",
                duration: "5 Days",
                ratings: "500 Reviews",
                harga: "400 USD",
                deskripsi: "Bali is a province area located in Indonesia. The capital city is Denpasar. Bali Province is located in the western part of the Nusa Tenggara Islands."
            },
            {
                id: "18",
                gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDZPRjxcxRe8Ztbgm3_zMgdjcxLOruGlGhA&usqp=CAU",
                lokasi: "BELGIA",
                judul: "Hallerbos",
                diskon: "35% off",
                duration: "3 Days",
                ratings: "500 Reviews",
                harga: "200 USD",
                deskripsi: "Translated from English-The Hallerbos is a forest in Belgium, covering an area of 552 ha. Most of it is located in the municipality of Halle, in Flemish Brabant and also a small part in Walloon Brabant. The region's forests are known for the carpet of blue bells that cover the forest floor for several weeks each spring, attracting large numbers of visitors."
            },
            {
                id: "19",
                gambar: "https://media.guideku.com/thumbs/2018/08/08/77154-hutan-otzarreta-undiscoverplanet/745x489-img-77154-hutan-otzarreta-undiscoverplanet.jpg",
                lokasi: "SPANYOL",
                judul: "Otzarreta",
                diskon: "50% off",
                duration: "5 Days",
                ratings: "450 Reviews",
                harga: "350 USD",
                deskripsi: "Zubizabala Erreka, Altzusta, Bizkaia, Spanyol"
            },
            {
                id: "20",
                gambar: "https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBmb3Jlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                lokasi: "JERMAN",
                judul: "Black Forest",
                diskon: "50% off",
                duration: "3 Days",
                ratings: "500 Reviews",
                harga: "450 USD",
                deskripsi: "The Black Forest is a large forest area in the state of Baden-Württemberg in southwestern Germany. This forest is surrounded by the Rhine Valley from west to south. The highest peak is in Feldberg at 1,493 m. The area is triangular in shape with a length of 160 km and a width of up to 60 km"
            },
            {
                id: "21",
                gambar: "https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9uJTIwZm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                lokasi: "SOUTH AMERICA",
                judul: "Amazon",
                diskon: "25% off",
                duration: "7 Days",
                ratings: "900 Reviews",
                harga: "400 USD",
                deskripsi: "The Amazon Jungle is a rainforest in the Amazon, South America. This region, which is also called Amazonia or the Amazon Basin, covers an area of seven million square kilometers, despite its own forest"
            }
        ]
    });
});

module.exports = router;