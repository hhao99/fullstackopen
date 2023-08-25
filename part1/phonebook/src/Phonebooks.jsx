import { useEffect, useState } from "react";

import AddPhonebook from "./AddPhonebook";
import Phonebook from "./Phonebook";
import PhonebookFilter from "./PhonebookFilter";
import bookService from "./phonebookService";

const Phonebooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filter, setFilter] = useState("");

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
    bookService.add(book).then((book) => {
      setBooks([...books, book]);
    });
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
