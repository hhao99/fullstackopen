import { useState } from "react";

const PhonebookFilter = ({ onFilter }) => {
  const [nameFilter, setNameFilter] = useState("");
  const handleFilter = (e) => {
    if (e.key === "Enter") {
      //  console.log("set filter", nameFilter);
      onFilter(e);
    } else if (e.key === "Escape") {
      //  console.log("clear filter");
      setNameFilter("");
      onFilter(e);
    }
  };

  return (
    <div>
      Name Filter{""}
      <input
        onKeyDown={(e) => handleFilter(e)}
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      ></input>
    </div>
  );
};

export default PhonebookFilter;
