import course_info from "./course";
function Header() {
  const { course } = course_info;
  return <h1>{course}</h1>;
}

export default Header;
