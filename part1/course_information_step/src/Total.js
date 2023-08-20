import course_info from "./course";
function Header() {
  const { parts } = course_info;
  let exercises_total = 0;
  parts.forEach((part) => {
    exercises_total += part.exercises;
  });
  return (
    <div>
      <p>Number of exercises {exercises_total}</p>
    </div>
  );
}

export default Header;
