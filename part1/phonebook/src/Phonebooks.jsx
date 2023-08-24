import AddPhonebook from "./AddPhonebook";
import Phonebook from "./Phonebook";
import PhonebookFilter from "./PhonebookFilter";
import { useState } from "react";
const Phonebooks = ({ books, onAdd }) => {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const handleFilter = (e) => {
    if (e.key === "Enter") {
      setFilteredBooks(
        books.filter((book) =>
          book.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
    if (e.key === "Escape") {
      setFilteredBooks(books);
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
        <AddPhonebook onAdd={onAdd} />
      </div>
    </div>
  );
};
export default Phonebooks;
