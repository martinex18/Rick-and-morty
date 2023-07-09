/* ====== Styles ====== */
import "./episodes.css"
/* ====== Hooks ====== */
import { useState, useEffect } from "react";
import axios from "axios";

/* ====== Pages ====== */
import { Menu } from '../../menu/menu'

export const Episodes = () => {

  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode')
    .then(response => {
      const episodes = response.data.results;
      setEpisodes(episodes)
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
          <p>Fecha de publicación: {episode.air_date} </p>
          <br />
        </div>
      ))}
      </div>
    </>
  )
}