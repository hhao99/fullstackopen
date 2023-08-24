import "./App.css";

import PhonebookFilter from "./PhonebookFilter";
import Phonebooks from "./Phonebooks";
import { useState } from "react";

const phone_list = [
  { id: 1, name: "eric", number: "555-555-5555" },
  { id: 2, name: "sophia", number: "555-555-5555" },
];

function App() {
  const [books, setBooks] = useState(phone_list);
  const [filteredBooks, setFilterBooks] = useState(books);
  const [filter, setFilter] = useState("");

  const handleAdd = (book) => {
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    console.log(id, book);
    setBooks([...books, { id, ...book }]);
    alert(`Added ${book.name}`);
  };

  return <Phonebooks books={filteredBooks} onAdd={handleAdd} />;
}

export default App;
