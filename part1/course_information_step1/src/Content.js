import course_info from "./course";

function Content() {
  const { part1, exercises1, part2, exercises2, part3, exercises3 } =
    course_info;
  return (
    <div>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </div>
  );
}

export default Content;
