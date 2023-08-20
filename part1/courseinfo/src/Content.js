import course_info from "./course";

function Part({ part, exercises }) {
  return (
    <p>
      {part} {exercises}
    </p>
  );
}
function Content() {
  const { parts } = course_info;
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
}

export default Content;
