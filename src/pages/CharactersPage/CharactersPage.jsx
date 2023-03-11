import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getCharacters from "../../services/api";
import Image from "../../components/Image/Image";
import Form from "../../components/Form/Form";
import css from "./CharactersPage.module.css";
const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getCharacters()
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => console.warn(error));
  }, []);
  return (
    <div>
      <Image />
      <Form />
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
