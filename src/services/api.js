import axios from "axios";
const BASE_URL = `https://rickandmortyapi.com/api/character`;
const getCharacters = () => {
  return axios.get(`${BASE_URL}`).then((response) => {
    return response.data;
  });
};
export default getCharacters;
