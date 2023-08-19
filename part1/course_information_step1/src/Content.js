import course_info from "./course";

function Part({ part, exercises }) {
  return (
    <p>
      {part} {exercises}
    </p>
  );
}
function Content() {
  const { part1, exercises1, part2, exercises2, part3, exercises3 } =
    course_info;
  return (
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  );
}

export default Content;
