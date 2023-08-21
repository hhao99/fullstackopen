import React from "react";
function Header({ parts }) {
  let exercises_total =
    parts && parts.length > 0
      ? parts.reduce((total, part) => total + part.exercises, 0)
      : 0;
  return (
    <div>
      <p>Number of exercises {exercises_total}</p>
    </div>
  );
}

export default Header;
