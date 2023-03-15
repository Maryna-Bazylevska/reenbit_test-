import axios from "axios";
const BASE_URL = `https://rickandmortyapi.com/api/character`;
export const getCharacters = () => {
  return axios.get(`${BASE_URL}`).then((response) => {
    return response.data;
  });
};
export const getCharactersByName = (query) => {
  return axios.get(`${BASE_URL}/?name=${query}`).then((response) => {
    return response.data;
  });
};
export const getCharacterInfo = (id) => {
  return axios.get(`${BASE_URL}/${id}`).then((response) => {
    return response.data;
  });
};
