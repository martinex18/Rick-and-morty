/* ====== Styles ====== */
import "./episodes.css"
/* ====== Hooks ====== */
import { useState, useEffect } from "react";

/* ====== Pages ====== */
import { Menu } from '../../menu/menu'
import { ApiCharacters } from "../../../apis/ApiCharacters/ApiCharacters";

export const Episodes = () => {

  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    ApiCharacters.fetchData()
    .then(data => {
      setEpisodes(data)
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  console.log(episodes);

  return (
    <>
        <Menu />
        <div className="episodes">
      { episodes && episodes.map((episode, index) => (
        <div className="episode" key={index}>
          <p>{episode.name}</p>
          <p>Fecha de publicación: <span>{episode.air_date}</span> </p>
          <br />
        </div>
      ))}
      </div>
    </>
  )
}