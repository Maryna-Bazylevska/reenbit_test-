import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCharacters, getCharactersByName } from "../../services/api";
import Form from "../../components/Form/Form";
import css from "./CharactersPage.module.css";
import image from "../../picture/picture.jpg";
import { useLocalStorage } from "../../hook/useLocalStorage";
const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [value, setValue] = useLocalStorage("query", "");
  const location = useLocation();
  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data.results);
    });
  }, []);
  useEffect(() => {
    if (value === null) {
      return;
    }
    getCharactersByName(value).then((data) => {
      if (data.results.length === 0) {
        return alert("Not found!");
      }
      setCharacters(data.results);
    });
  }, [value]);
  const handleSubmit = (value) => {
    if (value === "") {
      return alert("Please, enter a text!");
    }
    setValue(value);
  };

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
                  alt="search icon"
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
