import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCharacters, getCharactersByName } from "../../services/api";
import Form from "../../components/Form/Form";
import css from "./CharactersPage.module.css";
import image from "../../picture/picture.jpg";
const CharactersPage = () => {
  const [characters, setCharacters] = useState(() => {
    return JSON.parse(localStorage.getItem("characters")) ?? [];
  });

  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.localStorage.setItem("characters", JSON.stringify(characters));
  }, [characters]);
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
    //navigate({ ...location, search: `query=${query}` });
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
    <div className={css.div}>
      <img src={image} alt="Rick and Morty" className={css.image} />
      <Form onSubmit={handleSubmit} />
      {characters && (
        <ul className={css.list}>
          {characters.map(({ id, name, species }) => (
            <li key={id} className={css.item}>
              <Link
                to={`/${id}`}
                state={{ from: location }}
                className={css.link}
              >
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
