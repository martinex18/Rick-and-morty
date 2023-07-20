/* ====== Styles ====== */
import "./menu.css";
/* ====== React Router ====== */
import { Link } from "react-router-dom";

const Menu = () => {
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
                <Link to="/credits">Credits</Link>
            </li>
        </ul>
    </header>
  )
}

export default Menu