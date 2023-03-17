import { ReactComponent as SearchIcon } from "../../picture/search.svg";
import { useState } from "react";
import css from "./Form.module.css";
const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };
  const handleQueryChange = (e) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
  return (
    <div className={css.div}>
      <form onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.span}>
            <SearchIcon />
          </span>
        </button>
        <input
          className={css.input}
          placeholder="Filter by name..."
          value={query}
          onChange={handleQueryChange}
        />
      </form>
    </div>
  );
};
export default Form;
