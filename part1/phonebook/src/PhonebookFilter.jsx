import { useState } from "react";

const PhonebookFilter = ({ onFilter, onClear }) => {
  const [nameFilter, setNameFilter] = useState("");
  const handleFilter = (e) => {
    if (e.key === "Enter") {
      //  console.log("set filter", nameFilter);
      onFilter(e);
    } else if (e.key === "Escape") {
      //  console.log("clear filter");
      setNameFilter("");
      onClear(e);
    }
  };

  return (
    <div>
      Name Filter{" "}
      <input
        onKeyDown={(e) => handleFilter(e)}
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      ></input>
    </div>
  );
};

export default PhonebookFilter;
