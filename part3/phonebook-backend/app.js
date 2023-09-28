const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const cors = require("cors");

const { Person, mongoose } = require("./mongo");
const log = (request, response, next) => {
  console.log("request method: ", request.method);
  console.log("request path: ", request.path);
  console.log("request body: ", request.body);
  next();
};
const app = express();
// some middleware
// cors, allow cross-origin requests
app.use(cors());
app.use(express.json());

// static files
app.use(express.static("dist"));
app.use(log);

// morgan log request
morgan.token("body", (req, res) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/books", async (req, res) => {
  let people = await Person.find().then((data) => data);
  res.send(people);
});

app.get("/books/info", (req, res) => {
  const now = new Date();
  res.send(
    `<p>Book info: there are ${
      books.length
    } books.</p> Last updated: ${now.toString()}</p>`
  );
});

app.get("/books/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const person = await Person.findById(id).then((person) => person);
  if (person === undefined) {
    res.status(404).send("Book not found");
  }
  res.status(200).send(person);
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

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
