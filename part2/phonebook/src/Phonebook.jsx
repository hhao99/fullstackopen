import "./Phonebook.css";
const Phonebook = ({ book, onDelete }) => {
  const handleRemove = () => {
    window.confirm("Are you sure to delete this book with id " + book.id);
    onDelete(book.id);
  }; // handleRemove
  return (
    <li>
      Name: {book.name} - number: {book.number}{" "}
      <span>
        <button onClick={() => handleRemove()}>Delete</button>
      </span>
    </li>
  );
};

export default Phonebook;
