/* ====== Styles ====== */
import "./characters.css"
/* ====== Hooks ====== */
import { useEffect, useState } from "react"
/* ====== API ====== */
import { ApiCharacters } from "../../../apis/ApiCharacters/ApiCharacters"
/* ====== Components ====== */
import Menu from "../../menu/menu"
import Search from "../../search/search"
import Loading from "../../loading/loading"
import NullCharacters from "../../NullCharacters/NullCharacters"

export const Characters = () => {
  /* ====== Loading ====== */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return() => clearTimeout(timer);
  }, []);

  /* ====== API ====== */
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    ApiCharacters.fetchData()
    .then(data => {
      setCharacters(data);
    })
    .catch(error => {
      console.log(error)
    });
  }, []);

  const handleSearch = (results) => {
    setCharacters(results);
  };

  return (
    <>
      <Menu />
      { loading ? (
        <Loading />
      ) :(
          <section className="characters">
            <h1 className="characters_title">Characters</h1>
            <Search onSearch={handleSearch}/>
            <div className="cards">
              {!characters ? <NullCharacters /> : characters.map((character) => (
                <div className="card" key={character.id}>
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
                    <p>
                      <span className="text-grey">Gender: </span>
                      <span>{character.gender}</span>
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