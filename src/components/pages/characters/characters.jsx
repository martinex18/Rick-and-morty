/* ====== Styles ====== */
import "./characters.css"
/* ====== Hooks ====== */
import { useEffect, useState } from "react"
import axios from "axios"

/* ====== Pages ====== */
import { Menu } from "../../menu/menu"

export const Characters = () => {

  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      const characters = response.data.results;
      setCharacters(characters);
    })

    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <>
      <Menu />
      <div className="characters">
      { characters && characters.map((character, index) => (
        <div className="character" key={index}>
          <p>{character.name}</p>
        </div>
      ))}
      </div>
    </>
  )
}