const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    return res.json({
        status: "200",
        message: "sukses bro",
        data: [
            {
                title: "Crazy Runs in the Family",
                img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1528799798l/36423457._SY475_.jpg",
                author: "Max Bemis",
                Genre: ["Science Fiction", "Comic", "Action"],
                rating: 4.7
            },
            {
                title: "Ultraman",
                img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1432257439l/25074600._SX318_.jpg",
                author: "Eiichi Shimizu",
                Genre: ["Science Fiction", "Comic", "Action"],
                rating: 3.7
            },
            {
                title: "Jackal",
                img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1653086275l/58756502._SY475_.jpg",
                author: "Erin E. Adams",
                Genre: ["Horror", "Mystery", "Fiction"],
                rating: 4.1
            },
            {
                title: "A History of God",
                img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386924363l/3873.jpg",
                author: "Karen Armstrong",
                Genre: ["Religion", "History", "Nonfiction"],
                rating: 3.8
            },

            {
                title: "The Amityville Horror",
                img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1306079371l/293101.jpg",
                author: "Jay Anson",
                Genre: ["Horror", "Thriller", "Fiction"],
                rating: 3.8
            },
            {
                title: "The Shuddering City",
                img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1657220989l/61407069.jpg",
                author: "Sharon Shinn",
                Genre: ["Fiction", "Romance", "Fantasy"],
                rating: 4.2
            },
            {
                title: "1984",
                img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1657781256l/61439040._SX318_.jpg",
                author: " George Orwell",
                Genre: ["Classics", "Fiction", "Novels"],
                rating: 4.8
            },
            {
                title: "The London Girls",
                img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1654608930l/61031329.jpg",
                author: " Soraya M. Lane",
                Genre: ["War", "History", "Fiction"],
                rating: 4.9
            }
        ]
    });
});

module.exports = router;