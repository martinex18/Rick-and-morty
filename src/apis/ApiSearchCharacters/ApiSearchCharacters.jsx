import axios from 'axios';

export const QueryCharacters = {
  searchCharacters: (query) => {
    return axios.get(`https://rickandmortyapi.com/api/character?name=${query}`)
      .then(response => response.data.results)
      .catch(error => {
        console.log(error);
      });
  }
};
