import { useEffect, useState } from "react";

import AddPhonebook from "./AddPhonebook";
import Phonebook from "./Phonebook";
import PhonebookFilter from "./PhonebookFilter";

const Phonebooks = ({ books, onAdd }) => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter === "") {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(
        books.filter((book) =>
          book.name.toLowerCase().includes(filter.toLowerCase())
        )
      );
    }
  }, [filter]);

  const handleAdd = (book) => {
    onAdd(book);
    setFilteredBooks(
      books.filter((book) =>
        book.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
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
