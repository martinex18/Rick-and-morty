/* ====== HOOKS ====== */
import { useState, useEffect } from 'react'
/* ====== API ====== */
import ApiContext from "./ApiContext";
import { ApiCharacters } from '../ApiCharacters/ApiCharacters'

export const ApiProvaider = ({ children }) => {
    const [character, setCharacter] = useState([]) // Se almacena los datos de la Api

    useEffect(() => {
        ApiCharacters.fetchData() // Se llama a la función fechData, que contiene los datos de la Api
        .then(data => setCharacter(data))
        .catch(error => console.log(error));
    }, []);

    return(
        <ApiContext.Provider value={{character}}>
            {children}
        </ApiContext.Provider>
    )
}