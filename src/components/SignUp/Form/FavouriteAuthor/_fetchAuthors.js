import axios from "axios";

const AUTHORS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

const fetchAuthors = async () => {
  return await axios.get(AUTHORS_ENDPOINT).then(res => res.data);
};

export default fetchAuthors;
