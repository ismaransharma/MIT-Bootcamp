const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

// CRUD
// Bad practice -- DON'T DO IT IN REAL LIFE
let books = [{ id: 1, name: "Crime and Punishment", author: "Fedor dostoyevsky", page: 100 }, { id: 2, name: "Harry Putter", author: "Pajiii", page: 800 }];

// Read
app.get('/books', (req, res) => {
    res.status(200).json(books);
});

// Create
app.get('/books/:id', (req, res) => {
    const [book] = books.filter(book => book.id == req.params.id);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(200).json({ message: "Book not found" });
    }
});

// Create
app.post('/books', (req, res) => {
    books.push(req.body);
    res.status(201).json({ message: "Book is create" });
});

// Update
app.patch('/books/:id', (req, res) => {
    const [book] = books.filter(book => book.id == req.params.id);

    if (!book) {
        res.status(200).json({ message: "Book not found" });
    } 

    book.name = req.body.name;
    book.author = req.body.author;
    book.page = req.body.page;

    res.status(200).json(book);
});

// Delete
app.delete('/books/:id', (req, res) => {
    const [ book ] = books.filter(book => book.id == req.params.id);

    if(!book){
        res.status(200).json({message: "Book not found"});
    }

    books = books.filter(book => book.id != req.params.id);
    res.status(200). json("Book deleted Successfully.");


});



app.listen(port, () => console.log(`${port} is running.`))