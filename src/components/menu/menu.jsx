/* ====== Styles ====== */
import "./menu.css";
/* ====== React Router ====== */
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <header className="menu">
        <ul className="menu_lista">
            <li className="menu_item">
                <Link to="/">Home</Link>
            </li>
            <li className="menu_item">
                <Link to="/characters">Characters</Link>
            </li>
            <li className="menu_item">
                <Link to="/episodes">Episodes</Link>
            </li>
        </ul>
    </header>
  )
}