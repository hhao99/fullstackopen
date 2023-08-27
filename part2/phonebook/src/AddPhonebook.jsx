import { useState } from "react";
const AddPhonebook = ({ onAdd }) => {
  const [name, setName] = useState("test");
  const [number, setNumber] = useState("555-555-5555");

  const handleAdd = () => {
    onAdd({ name, number });
    setName("test");
    setNumber("555-555-5555");
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h3>Add phone to book</h3>
      <div>
        <label>
          Name:{" "}
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </label>
      </div>
      <div>
        <label>
          number:{" "}
          <input
            type="text"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          ></input>
        </label>
      </div>
      <div>
        <input
          type="submit"
          onClick={() => {
            handleAdd();
          }}
          value="Add"
        ></input>
      </div>
    </form>
  );
};

export default AddPhonebook;
