/* ====== Styles ====== */
import "./home.css";
/* ====== Img ====== */
import RickMorty from "../../../assets/rick-morty.png";
/* ====== Components ====== */
import Menu  from "../../menu/menu";

export const Home = () => {
  return (
    <>
    <Menu />
      <main className="home">
        <img src={RickMorty} alt="Rick & Morty" className="home_img" />
          <h1 className="home_title">Rick & Morty</h1>
      </main>
    </>
  )
}
