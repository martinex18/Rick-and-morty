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
        <h1 className="characters_tittle">Characters</h1>
        <div className="character">
          {!characters ? 'No Characters' : characters.map((character, index) => (
            <div className="character_cards" key={index}>
              <div>
                <img src={character.image} alt={character.name}/>
              </div>

              <div className="character_info">
                <h3>{character.name}</h3>
                <p>
                  {character.status == "Alive" ? (
                    <>
                      <span className="alive">Alive</span>
                    </>
                  ): (
                    <span className="dead">Dead</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}