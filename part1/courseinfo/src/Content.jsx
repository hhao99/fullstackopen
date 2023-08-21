import React from "react";
function Part({ part, exercises }) {
  return (
    <p>
      {part} {exercises}
    </p>
  );
}
function Content({ parts }) {
  console.log(parts);
  return (
    <div>
      {parts && parts.length > 0
        ? parts.map((part) => (
            <Part key={part.name} part={part.name} exercises={part.exercises} />
          ))
        : "No parts"}
    </div>
  );
}

export default Content;
