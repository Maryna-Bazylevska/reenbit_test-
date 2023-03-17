import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getCharacterInfo } from "../../services/api";
import { ReactComponent as ArrowIcon } from "../../picture/arrow_back.svg";
import css from "./CharacterInfoPage.module.css";
const CharacterInfoPage = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (id) {
      getCharacterInfo(id).then((data) => setCharacter(data));
    }
  }, [id]);

  return (
    <>
      {character && (
        <div>
          <button
            type="button"
            className={css.button}
            onClick={() => navigate(location?.state?.from ?? "/")}
          >
            <span className={css.span}>
              <ArrowIcon />
            </span>
            Go back
          </button>
          <div className={css.div}>
            <div className={css.imgWrapper}>
              <img
                src={character.image}
                alt={character.name}
                className={css.img}
              />
              <h2 className={css.title}>{character.name}</h2>
            </div>
            <div className={css.infoWrapper}>
              <h3 className={css.subtitle}>Informations</h3>
              <ul className={css.list}>
                <li className={css.item}>
                  <h4 className={css.presubtitle}>Gender</h4>
                  <p className={css.text}>{character.gender}</p>
                </li>
                <li className={css.item}>
                  <h4 className={css.presubtitle}>Status</h4>
                  <p className={css.text}>{character.status}</p>
                </li>
                <li className={css.item}>
                  <h4 className={css.presubtitle}>Species</h4>
                  <p className={css.text}>{character.species}</p>
                </li>
                <li className={css.item}>
                  <h4 className={css.presubtitle}>Origin</h4>
                  <p className={css.text}>{character.origin.name}</p>
                </li>
                <li className={css.item}>
                  <h4 className={css.presubtitle}>Type</h4>
                  <p className={css.text}>
                    {" "}
                    {character.type ? character.type : "Unknown"}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CharacterInfoPage;
