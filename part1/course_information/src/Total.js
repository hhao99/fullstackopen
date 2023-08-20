import course_info from "./course";
function Header() {
  const { parts } = course_info;

  let exercises_total = parts.reduce(
    (total, part) => total + part.exercises,
    0
  );
  return (
    <div>
      <p>Number of exercises {exercises_total}</p>
    </div>
  );
}

export default Header;
