const express = require("express");
const morgan = require("morgan");
const fs = require("fs");

const app = express();
// some middleware
// app.use(
//   morgan(":method :url :status :res[content-length] - :response-time ms")
// );
morgan.token("body", (req, res) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
app.use(express.json());

let books = require("./books.json").books;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/books", (req, res) => {
  res.send(books);
});
app.get("/books/info", (req, res) => {
  const now = new Date();
  res.send(
    `<p>Book info: there are ${
      books.length
    } books.</p> Last updated: ${now.toString()}</p>`
  );
});

app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find((book) => book.id === id);
  if (book === undefined) {
    res.status(404).send("Book not found");
  }
  res.status(200).send(book);
});
app.post("/books", (req, res) => {
  const { name, number } = req.body;
  const book = books.find((book) => book.name === name);
  if (book !== undefined) {
    res.status(409).send("Book already exists");
  } else {
    const newBook = {
      id: books.length + 1,
      name,
      number,
    };
    books.push(newBook);
  }
});
app.delete("/books/:id", (req, res) => {
  console.log(req.params.id);
  const id = Number(req.params.id);
  books = books.filter((book) => book.id !== id);
  res.status(200).send(books);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
