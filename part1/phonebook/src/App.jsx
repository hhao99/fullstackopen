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
  const handleAdd = (book) => {
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    console.log("add book", id, book);
    setBooks([...books, { id, ...book }]);
    console.log("added", books);
  };

  return <Phonebooks books={books} onAdd={handleAdd} />;
}

export default App;
