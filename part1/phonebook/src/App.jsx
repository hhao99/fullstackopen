import "./App.css";

import Phonebooks from "./Phonebooks";
import { useState } from "react";

const phone_list = [
  { id: 1, name: "eric", num: "555-555-5555" },
  { id: 2, name: "sophia", num: "555-555-5555" },
];

function App() {
  const [books, setBooks] = useState(phone_list);
  const handleAdd = (book) => {
    const id = phone_list.length ? phone_list[phone_list.length - 1].id + 1 : 1;
    setBooks([...books, { id, ...book }]);
  };
  return (
    <div>
      <h1>PhoneBooks</h1>
      <Phonebooks books={books} onAdd={handleAdd} />
    </div>
  );
}

export default App;
