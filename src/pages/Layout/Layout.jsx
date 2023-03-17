import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import image from "../../picture/rick_and_morty.jfif";
const Layout = () => {
  return (
    <div>
      <h1 className={css.title}>WELCOM TO APP</h1>
      <img src={image} alt="rick_and_morty" width="100%" />
      <Outlet />
    </div>
  );
};
export default Layout;
