/* ====== Styles ====== */
import "./characters.css"
/* ====== Hooks ====== */
import { useState } from "react"
/* ====== API ====== */
import { useApiContext } from "../../../apis/CharactersContext/ApiContext"
/* ====== Components ====== */
import Menu from "../../menu/menu"
import Search from "../../search/search"
import NullCharacters from "../../NullCharacters/NullCharacters"
import CharacterDetails from "../charactersDetails/characterDetails"

export const Characters = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const cerrarAlerta = () => {
    setSelectedCharacter(null);
  };

  /* ====== API ====== */
  const { character } = useApiContext();

  /* ====== BUSCADOR ====== */
  const [characters, setCharacters] = useState([]);
  const handleSearch = (results) => {
    setCharacters(results);
  };

  return (
    <>
      <Menu />
          <section className="characters">
            <h1 className="characters_title">Characters</h1>
            <Search onSearch={handleSearch}/>
            <div className="cards">
              {!characters ? <NullCharacters /> : characters.map((character) => (
                <div className="card" key={character.id} onClick={() => setSelectedCharacter(character)}>
                  <div className="img">
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
                    <p>
                      <span className="text-grey">Gender: </span>
                      <span>{character.gender}</span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </section>
        {/*{selectedCharacter && <CharacterDetails character={selectedCharacter} onClose={cerrarAlerta}/>} */}
        <CharacterDetails character={selectedCharacter} onClose={cerrarAlerta}/>
    </>
  )
}