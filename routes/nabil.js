const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    return res.json({
        status: 200,
        message: "Successfully",
        data: [
            {
                title: "Daughter of the Moon Goddess",
                img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627686439i/57789637.jpg",
                description: "",
                genre: ["Fantasy", "Fiction", "Romance"],
                author: "Sue Lynn Tan",
                rating: 4.3,
                reviews: 1200
            },
            {
                title: "Hester",
                img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1659421275l/59807978.jpg",
                description: "",
                genre: ["Fiction", "History Fiction", "Romance"],
                author: "Laurie Lico Albanese",
                rating: 4.2,
                reviews: 5200
            },
            {
                title: "Jackal",
                img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1653086275l/58756502._SY475_.jpg",
                description: "",
                genre: ["Horror", "Mystery", "Fiction"],
                author: "Erin E. Adams",
                rating: 4.1,
                reviews: 120
            },
            {
                title: "The Last Chairlift",
                img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1663779044l/60320396.jpg",
                description: "",
                genre: ["Fiction", "Mystery", "Novels", "Family"],
                author: "John Irving",
                rating: 4.0,
                reviews: 320
            },
            {
                title: "Five Survive",
                img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664370443i/61313902.jpg",
                description: "",
                genre: ["Young Adult", "Mystery", "Thriller"],
                author: "Malinda Lo",
                rating: 3.8,
                reviews: 560
            },
            {
                title: "Master Your Emotions: A Practical Guide to Overcome Negativity and Better Manage Your Feelings",
                img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1609429764i/40078926.jpg",
                description: "",
                genre: ["Nonfiction", "Self Help", "Psychology", "Health"],
                author: "Thibaut Meurisse",
                rating: 4.1,
                reviews: 340
            },
            {
                title: "A Book of Days",
                img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646936329i/60587120.jpg",
                description: "",
                genre: ["Art", "Nonfiction", "Biography"],
                author: "Patti Smith",
                rating: 4.3,
                reviews: 530
            },
            {
                title: "Now Is Not the Time to Panic",
                img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1647526587i/60415700.jpg",
                description: "",
                genre: ["Fiction", "Contemporary", "Young Adult", "Art"],
                author: "Kevin Wilson",
                rating: 3.6,
                reviews: 742
            },
            {
                title: "The Color of Ice",
                img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653951996i/59892389.jpg",
                description: "",
                genre: ["Fiction", "Romance", "Art"],
                author: "Barbara Linn Probst",
                rating: 4.2,
                reviews: 5351
            }
        ]
    });
});

module.exports = router;