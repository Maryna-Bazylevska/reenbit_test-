import { ReactComponent as SearchIcon } from "../../picture/search.svg";
import css from "./Form.module.css";
const Form = () => {
  return (
    <div className={css.div}>
      <form>
        <button className={css.button}>
          <span className={css.span}>
            <SearchIcon />
          </span>
        </button>
        <input className={css.input} placeholder="Filter by name..." />
      </form>
    </div>
  );
};
export default Form;
