import course_info from "./course";
function Header() {
  const { exercises1, exercises2, exercises3 } = course_info;
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
}

export default Header;
