import axios from 'axios';

export const ApiCharacters = {
    fetchData: () => {
        return axios.get('https://rickandmortyapi.com/api/character')
        .then(Response => Response.data.results)
        .catch(error => {
            console.log(error);
        })
    }
}