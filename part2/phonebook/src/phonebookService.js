import axios from "axios";
const baseURL = "http://localhost:3001/books";
function getAll() {
  return axios.get(baseURL).then((res) => res.data);
}

function add(book) {
  return axios.post(baseURL, book).then((res) => res.data);
}

function remove(id) {
  return axios.delete(`${baseURL}/${id}`).then((res) => res.data);
}

export default { getAll, add, remove };
