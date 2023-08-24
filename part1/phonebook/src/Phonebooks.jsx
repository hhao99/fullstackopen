import { useEffect, useState } from "react";

import AddPhonebook from "./AddPhonebook";
import Phonebook from "./Phonebook";
import PhonebookFilter from "./PhonebookFilter";

const Phonebooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((books) => setBooks(books));

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
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    setBooks([...books, { id, ...book }]);
  };
  const handleFilter = (e) => {
    if (e.key === "Enter") {
      setFilter(e.target.value);
    }
    if (e.key === "Escape") {
      setFilter("");
    }
  };
  return (
    <div>
      <h1>Phonebooks</h1>

      <PhonebookFilter onFilter={handleFilter} onClear={handleFilter} />
      <ul>
        {filteredBooks &&
          filteredBooks.map((book) => <Phonebook key={book.id} book={book} />)}
      </ul>
      <div>
        <AddPhonebook onAdd={handleAdd} />
      </div>
    </div>
  );
};
export default Phonebooks;
