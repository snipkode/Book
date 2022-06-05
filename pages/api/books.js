const books = [
    {
        title: "Berkunjung ke Taman Buah",
        author: "Bimo Sakti",
        thumb: "berkunjung.png",
        bookId: 1,
        views: 200
    },
    {
        title: "Bagaimana Manusia Dapat Hidup Bahagia Lahir Batin",
        author: "S. Kusumopradoto",
        thumb: "bagaimana.png",
        bookId: 2,
        views: 210
    },
    {
        title: "Ayo Tengok Lautku",
        author: "Rahmawati, SH.",
        thumb: "laut.png",
        bookId: 3,
        views: 230
    },
    {
        title: "Antologi Studi Agama dan Pendidikan",
        author: "Prof. H. Abdurrahman Mas'ud, Ph.D.",
        thumb: "antologi.png",
        bookId: 4,
        views: 200
    },
    {
        title: "Aku Ingin Menjadi Nelayan Kaya",
        author: "Rahadiyanti Aditya",
        thumb: "nelayan.png",
        bookId: 5,
        views: 450
    },
    {
        title: "Ada Apa Dengan Narkoba",
        author: "Winarto, S.S.",
        thumb: "narkoba.png",
        bookId: 5,
        views: 456
    },
]
export default function handler(req, res) {
    res.status(200).json(books)
  }
  