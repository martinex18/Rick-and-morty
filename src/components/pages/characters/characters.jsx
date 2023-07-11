/* ====== Styles ====== */
import "./characters.css"
/* ====== Hooks ====== */
import { useEffect, useState } from "react"
import axios from "axios"

/* ====== Pages ====== */
import { Menu } from "../../menu/menu"

export const Characters = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return() => clearTimeout(timer);
  }, []);

  /* ====== API ====== */
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
      { loading ? (
        <div className="loading">
          <box-icon name='loader-circle' animation='spin' color='#00ffff' size="90px" ></box-icon>
        </div>
      ) :(
          <section className="characters">
            <h1 className="characters_title">Characters</h1>
            <div className="character">
              {!characters ? 'No characters' : characters.map((character, index) => (
                <div className="character-container" key={index}>
                  <div>
                    <img src={character.image} alt={character.name} />
                  </div>
                  <div>
                    <h3>{character.name}</h3>
                    <h6>
                      {character.status === "Alive" ? (
                        <>
                          <span className="alive" />
                          Alive
                        </>
                      ) : (
                        <>
                          <span className="dead" />
                          Dead
                        </>
                      )}
                    </h6>
                    <p>
                      <span className="text-grey">Episodios: </span>
                      <span>{character.episode.length}</span>
                    </p>
                    <p>
                      <span className="text-grey">Especie: </span>
                      <span>{character.species}</span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}
    </>
  )
}