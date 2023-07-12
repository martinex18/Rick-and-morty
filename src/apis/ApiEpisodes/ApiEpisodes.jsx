import axios from 'axios'

export const ApiEpisodes = {
    fetchData: () => {
        return axios.get('https://rickandmortyapi.com/api/episode')
        .then(Response => Response.data.results)
        .catch(error => {
            console.log(error);
        })
    }
}