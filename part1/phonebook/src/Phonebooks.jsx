import "./Phonebooks.css";

import { useEffect, useState } from "react";

import AddPhonebook from "./AddPhonebook";
import Phonebook from "./Phonebook";
import PhonebookFilter from "./PhonebookFilter";
import bookService from "./phonebookService";

const Phonebooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const messageStyle = error ? { color: "red" } : { color: "green" };

  useEffect(() => {
    bookService.getAll().then((books) => setBooks(books));
    setFilteredBooks(books);
  }, []);

  useEffect(() => {
    console.log("enter filter effect");
    if (filter === "") {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(
        books.filter((book) =>
          book.name.toLowerCase().includes(filter.toLowerCase())
        )
      );
    }
  }, [filter, books]);

  const handleAdd = (book) => {
    if (book.name === "") {
      setError(true);
      setMessage("Name is required");
      return;
    }
    setError(false);
    bookService.add(book).then((book) => {
      setBooks([...books, book]);
    });
    setMessage(`Added ${book.name}`);
  };
  const handleFilter = (e) => {
    if (e.key === "Enter") {
      setFilter(e.target.value);
    }
    if (e.key === "Escape") {
      setFilter("");
    }
  };

  const handleDelete = (id) => {
    bookService.remove(id).then(() => {
      setBooks(books.filter((book) => book.id !== id));
    });
  };
  return (
    <div>
      <h1>Phonebooks</h1>
      <div style={messageStyle}>{message}</div>
      <PhonebookFilter onFilter={handleFilter} />

      <ul>
        {filteredBooks &&
          filteredBooks.map((book) => (
            <Phonebook key={book.id} onDelete={handleDelete} book={book} />
          ))}
      </ul>
      <div>
        <AddPhonebook onAdd={handleAdd} />
      </div>
    </div>
  );
};
export default Phonebooks;
