import "./App.css";

import Phonebooks from "./Phonebooks";
import { useState } from "react";

const phone_list = [
  { id: 1, name: "eric", number: "555-555-5555" },
  { id: 2, name: "sophia", number: "555-555-5555" },
];

function App() {
  const [books, setBooks] = useState(phone_list);
  const [filteredBooks, setFilterBooks] = useState(books);
  const [nameFilter, setNameFilter] = useState("");

  const handleFilter = (e) => {
    if (e.key === "Enter") {
      setFilterBooks(books.filter((book) => book.name.includes(nameFilter)));
    }
  };
  const handleClear = () => {
    setNameFilter("");
    setFilterBooks(books);
  };
  const handleAdd = (book) => {
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    console.log(id, book);
    setBooks([...books, { id, ...book }]);
    alert(`Added ${book.name}`);
    handleFilter({ key: "Enter" });
  };
  return (
    <div>
      <h1>PhoneBooks</h1>
      <div>
        Name Filter{" "}
        <input
          onKeyDown={(e) => handleFilter(e)}
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        ></input>
        <button onClick={(e) => handleClear()}>X</button>
      </div>
      <Phonebooks books={filteredBooks} onAdd={handleAdd} />
    </div>
  );
}

export default App;
