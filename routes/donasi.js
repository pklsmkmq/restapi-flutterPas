const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    return res.json({
        status: "200",
        message: "Success get data",
        data: [
            {
                id_donation: "1",
                judul: "Zakat to Help Orphans and Dhuafa",
                penggalang_dana: "Kitabisa.com",
                gambar: "https://awsimages.detik.net.id/community/media/visual/2022/04/25/ilustrasi-zakat.jpeg?w=700&q=90",
                uang_persen: "90%",
                orang: "100k",
                waktu: "1 Days left",
                raised: "$390.000",
                target: "$400.000",
                logo: "https://ditmawa.ugm.ac.id/wp-content/uploads/sites/1212/2022/01/maxresdefault-825x464.jpg",
                description: "Dalam perjalanan hidup, kelahiran seorang anak merupakan dambaan setiap orang tua. Nasib seperti apa yang akan terjadi di masa depan adalah rahasia yang tidak ada yang bisa tahu pasti kapan jadinya. Bahkan dalam kesempurnaan atau kekurangan saat lahir, tidak ada yang bisa memilih. Menjalani hidup dengan organ tubuh yang lengkap adalah dambaan setiap orang. Berbeda dengan nasib yang dialami Ameera, balita berusia 3 bulan 26 hari ini tidak seberuntung balita lainnya. Di usianya yang belum genap 4 bulan, Ameera harus menjalani operasi karena dari hasil diagnosa, mata kiri Ameera didiagnosa terkena retinoblastoma atau yang dikenal dengan kanker mata. Kanker jenis ini diketahui menyerang anak-anak kemudian dengan cepat melumpuhkan retina sehingga menyebabkan bagian terpenting dari mata yang berfungsi menerima cahaya kehilangan fungsinya. Tepat pada 26 September 2022, orang tua Ameera harus mengambil keputusan terberat setelah dokter menyarankan agar salah satu bola mata Ameera dioperasi untuk menghentikan penyebaran kanker ke bagian lain dari otak, tulang, dan organ tubuh. Dokter juga khawatir jika penyakit ini dibiarkan maka tekanan pada bola mata akan terganggu. Penyakitnya semakin parah."
            },
            {
                id_donation: "2",
                judul: "Help renovate the Langgar Al-Barokah Mosque in Cianjur",
                penggalang_dana: "Yayasan Khairunnas Peduli",
                gambar: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/e417820081fb84061a5de59b44ad4ca04fa4f42be76542a628dacdd30e590c4c.jpg",
                uang_persen: "79%",
                orang: "19k",
                waktu: "16 Days left",
                raised: "$600.000",
                target: "$420.000",
                logo: "https://www.qonitatku.com/wp-content/uploads/2019/09/smpkhairunnasmalang_4.jpg",
                description: "karena faktor kekhawatiran yang dirasakan terhadap bangunan masjid tua yang sebagian besar terbuat dari kayu dan bambu, sehingga rawan roboh dan terbakar jika digunakan untuk mendidik anak-anak dalam bidang agama. sebagai pimpinan dan santri putri sangat khawatir dan sangat membutuhkan tempat yang layak dan nyaman sehingga membuat mereka tenang dalam menuntut ilmu agama, dan menjadi generasi penerus bangsa yang berakhlak mulia, berakhlak mulia, serta berjiwa sosial dan religius. dilahirkan. Dengan niat dan segala keterbatasan, kami mohon doa dan semangatnya untuk rencana renovasi bangunan Masjid Langgar Al-Barokah, serta fasilitas pendukung lainnya yang mendukung kelangsungan pembangunan yayasan sosial-keagamaan ini. Demikian pula, sebagian dana akan digunakan untuk mendukung pembangunan masjid lain yang membutuhkan pertimbangan panitia sebelumnya."
            },
            {
                id_donation: "3",
                judul: "The priority of Alms Friday",
                penggalang_dana: "Badan Amil Zakat Nasional",
                gambar: "https://donasi.dkmgpr.com/wp-content/uploads/2021/08/sedekah-jumat.jpg",
                uang_persen: "50%",
                orang: "68k",
                waktu: "7 Days left",
                raised: "$350.000",
                target: "$700.000",
                logo: "https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/badan-amil-zakat-nasional.jpg",
                description: "“Dan tidak ada matahari yang terbit dan terbenam pada suatu hari yang lebih utama dibanding hari Jumat. Bersedekah pada hari Jumat lebih besar pahalanya daripada semua hari lainnya.” (HR. Abdurrazaq dalam Al-Mushannaf) Hari Jumat disebut sebagai sayyidul ayyam atau pemimpin hari-hari lainnya. Pada hari tersebut, Allah membuka pintu ampunan, doa yang terkabul dan amal baik yang berpahala besar."
            },
            {
                id_donation: "4",
                judul: "IN THE MIDDLE OF COVID 19 THE DEVELOPMENT OF THE PONPES WAS HOLDED",
                penggalang_dana: "Ponpes Al Misykah",
                gambar: "https://www.imamsyuhodo.sch.id/wp-content/uploads/2022/03/IMG_4936-2-scaled.jpg",
                uang_persen: "70%",
                orang: "90k",
                waktu: "7 Days left",
                raised: "$245.000",
                target: "$350.000",
                logo: "https://3.bp.blogspot.com/-TEPbj-uUfbY/W0r_PSfXw-I/AAAAAAAAAHA/YD7kBybaL2g7G9_EqyuVcmt4HivcYrOLACLcBGAs/s1600/LOGO%2BALMISYKAH%2BPNG.png",
                description: "“Ponpes ini berdiri tahun 2014,yang awal mulanya hanya terdapat 3 santri muqim dan 15 santri kalong (santri non muqim). Pada tahun 2014-2016 para santri belajar ngaji tanpa memiliki gedung pondok. Seiring berjalannya waktu karena antusias masyarakat akan pentingnya ilmu agama, kian waktu jumlah santri semakin meningkat hingga saat ini mencapai sekitar 130 santri muqim dan 30 santri non muqim. Namun antusius tersebut tidak diimbangi dengan fasilitas sarana dan prasarana yang memadai. Dan Pada tahun 2017, mulai membangun gedung aula/musholla pondok beserta Kamar santri. Namun kamar hanya berjumlah 4 ruangan dengan ukuran 3x4. Karena penuh, sebagian santri lain ditempatkan di ruangan bekas pertokoan sebagaimana sesuai pada gambar di atas. Karena itu, Kami berkeinginan untuk meneruskan pembangunan dengan menambah 7 kamar lagi, agar daya tampung per kamar tidak over sehingga ruang belajar pun menjadi nyaman. Namun Karena keterbatasan dana, maka dari itu kami mengetuk hati para donatur dan mengajak kepada para donatur untuk mendonasikan hartanya untuk pesantren kami, sehingga bisa terwujud fasilitas kebutuhan dan kepentingan pondok, terutama segera terwujudnya kamar santri yang layak untuk daya tampung santri supaya lebih nyaman dalam belajar ngaji. "
            },
            {
                id_donation: "5",
                judul: "Clean Water Access for Ubu Oleta Traditional Village",
                penggalang_dana: "Dedy Jekson Haning",
                gambar: "https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/07/16184717/Infaq-adalah1-810x456.jpg",
                uang_persen: "10%",
                orang: "100k",
                waktu: "15 Days left",
                raised: "$50.000",
                target: "$500.000",
                logo: "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=2000",
                description: "“Hal serupa pun dialami oleh keluarga Mama Salomi, salah satu masyarakat desa adat Ubu Oleta yang membutuhkan waktu kurang lebih 2 jam pulang pergi untuk menuju sumber air dan membawanya ke rumah mereka, tentunya dengan jalan setapak yang terjal dan licin. Padahal standar kebutuhan bagi satu individu yaitu 70 liter/hari sesuai rekomendasi WHO (World Health Organization), sehingga total kebutuhan air saat untuk masyarakat kampung adat dengan jumlah penduduk 40 jiwa yaitu sekitar 2800 liter/hari. Namun 10 tahun kemudian pastinya kebutuhan air akan semakin meningkat, dengan asumsi pertumbuhan penduduk 0.14% per tahunnya, maka di tahun 2030 jumlah kebutuhan air yang harus tersedia yaitu kurang lebih 9170 liter/hari. Oleh karena itu dibutuhkan solusi akses air bersih bukan hanya memenuhi kebutuhan saat ini, namun juga mengakomodir kebutuhan mendatang."
            },
            {
                id_donation: "6",
                judul: "Help a hungry cat on the street",
                penggalang_dana: "Herlina",
                gambar: "",
                uang_persen: "26%",
                orang: "23k",
                waktu: "50 Days left",
                raised: "$23.000",
                target: "$330.000",
                logo: "https://cdn-icons-png.flaticon.com/512/201/201634.png",
                description: "“Pada setiap sedekah terhadap mahluk yang memiliki hati (jantung) yang basah (hidup) akan dapatkan pahala kebaikan. Seorang muslim yang menanam tanaman atau tumbuh-tumbuh-an yang kemudian dimakan oleh burung-burung, manusia, atau binatang, maka baginya sebagai sedekah” (Bukhori, Muslim)."
            },
            {
                id_donation: "7",
                judul: "Zakat for Poor Poor Santri Education Fees",
                penggalang_dana: "YATIM MADANI",
                gambar: "https://static.vecteezy.com/system/resources/previews/004/435/689/non_2x/stray-cats-eating-on-the-street-a-group-of-homeless-and-hungry-street-cats-eating-food-given-by-volunteers-feeding-a-group-of-wild-stray-cats-animal-protection-and-adoption-concept-free-photo.JPG",
                uang_persen: "30%",
                orang: "44k",
                waktu: "74 Days left",
                raised: "$180.000",
                target: "$550.000",
                logo: "https://paybill.id/cfd/upload/logo/paybill-logo-awfvmp-1624618356937.png",
                description: "Saya Zaenal Arif Salah satu pengurus YATIM Madani Mengajak dan Membuat Galang Dana Yaitu Zakat Bersama dan Membantu Santri yang notabennya Dalam kondisi fakir miskin, di tempat kami sangatlah kurang dan masih banyak hal yang di pikirkan maka dengan adanya galang dana ini semoga dapat membantu biaya operasional pendidikan dan biaya kehidupan santri santri. Acara yang kami adakan adalah Pendidikan gratis untuk adek santri yang masih kurang mampu dalam biaya pendidikan . Sehingga cita cita santri tidak terkendala dalam hal biaya operasional dan kehidupan ."
            },
            {
                id_donation: "8",
                judul: "Thousands of Residents Affected by Floods in Central Kalimantan",
                penggalang_dana: "Kalimantan",
                gambar: "https://api.time.com/wp-content/uploads/2020/01/indonesia-floods-rescue.jpg?quality=85&w=3312",
                uang_persen: "80%",
                orang: "120k",
                waktu: "100 Days left",
                raised: "$158.400",
                target: "$198.000",
                logo: "https://vectrostudio.com/wp-content/uploads/2020/03/Kalimantan-Barat-Logo-Vector.jpg",
                description: "Beberapa pekan terakhir hujan mengguyur sejumlah wilayah di Kabupaten Kotawaringin Timur dan Kabupaten Katingan, Kalimantan Tengah. Hujan dengan intensitas tinggi ini menyebabkan banjir di puluhan desa. Sebelumnya pemerintah daerah sempat menetapkan status tanggap darurat pada 6-21 Agustus 2022, hingga banjir tersebut surut. Namun tak berselang lama, sekitar 2 minggu kemudian air tersebut kembali merendam pemukiman warga tepatnya pada 6 September 2022. Hingga saat ini, Kecamatan Kamipang, Kabupaten Katingan masih terendam banjir berminggu-minggu."
            },
            {
                id_donation: "9",
                judul: "Business Capital Alms for MSMEs",
                penggalang_dana: "Kitasobi",
                gambar: "https://berbagiberkah.org/campaign/uploads/CROWDFUNDING%20%20MODAL%20USAHA%20BARU.png",
                uang_persen: "26%",
                orang: "30k",
                waktu: "24 Days left",
                raised: "$112.000",
                target: "$200.000",
                logo: "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/user/10990785/23_10990785_1659675048_994_s.jpg",
                description: "Sobi tahu gak bahwa banyak dari saudara-saudara kita yang saat ini tengah berjuang untuk membangun usaha kecil untuk menghidupi keluarganya di rumah. Namun sayang, banyak dari mereka terpaksa gulung tikar karena minimnya modal yang ada. Untuk itu, kami dari Kitasobi ingin mengajak kalian untuk ikut berbagi rezeki untuk mereka dengan cara berdonasi bantu UMKM kecil."
            },
            {
                id_donation: "10",
                judul: "Rice Infaq for the Needs of Orphans & Memorizers of the Quran",
                penggalang_dana: "Panti Asuhan Baitul Yatim",
                gambar: "https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/07/16184717/Infaq-adalah1-810x456.jpg",
                uang_persen: "76%",
                orang: "42k",
                waktu: "89 Days left",
                raised: "$532.000",
                target: "$700.000",
                logo: "https://sribu-sg.s3.amazonaws.com/assets/media/contest_detail/2012/6/logo-for-social-responsibility-4fdd89173c0aa138dd00009f/f09eb3e081.jpg",
                description: "Sedekah Beras adalah program yang di peruntuhkan untuk memenuhi kebutuhan pangan santri, yatim-piatu dan dhuafa penghafal quran. Diharapkan dengan program ini para santri tidak lagi kekurangan dalam konsumsi khususnya beras dan membuat mereka fokus dengan belajar dan menghafal al-quran. Sebagian besar kami para pengurus panti asuhan-rumah tahfidz masih membutuhkan uluran tangan/bantuan donasi dari Orang Baik dan para Donatur Dermawan."
            }
        ]
    });
});

module.exports = router;