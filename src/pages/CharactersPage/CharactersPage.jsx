import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCharacters, getCharactersByName } from "../../services/api";
import Image from "../../components/Image/Image";
import Form from "../../components/Form/Form";
import css from "./CharactersPage.module.css";
const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    getCharacters()
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => console.warn(error));
  }, []);
  useEffect(() => {
    if (query === null) {
      return;
    }
    getCharactersByName(query).then((data) => {
      if (data.results.length === 0) {
        return alert("Not found!");
      }
      setCharacters(data.results);
    });
  }, [query]);
  const handleSubmit = (query) => {
    if (query === "") {
      return alert("Please, enter a text!");
    }
    setQuery(query);
  };

  // useEffect(() => {
  //   window.localStorage.setItem("characters", JSON.stringify(characters));
  // }, [characters]);
  // useEffect(() => {
  //   const characters = JSON.parse(window.localStorage.getItem("characters"));
  //   if (characters) {
  //     setCharacters(characters);
  //   }
  // }, []);
  return (
    <div>
      <Image />
      <Form onSubmit={handleSubmit} />
      {characters && (
        <ul className={css.list}>
          {characters.map(({ id, name, species }) => (
            <li key={id} className={css.item}>
              <Link to={`characters/${id}`} className={css.link}>
                <img
                  src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
                  alt=""
                  className={css.img}
                />
                <p className={css.name}>{name}</p>
                <p className={css.species}>{species}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default CharactersPage;
