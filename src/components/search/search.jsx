/* ====== Styles ====== */
import './search.css'
import PropTypes from 'prop-types';
/* ====== Hooks ====== */
import { useState, useEffect } from 'react'
import { QueryCharacters } from '../../apis/ApiSearchCharacters/ApiSearchCharacters';

const Search = ({ onSearch }) => {
/* ====== API ====== */
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    QueryCharacters.searchCharacters(searchQuery)
    .then(results => {
      onSearch(results);
    })
    .catch(error => {
      console.log(error);
      onSearch([])
    })
  }, [searchQuery, onSearch]);

  const searcher = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <>
        <input type="text" onChange={searcher} value={searchQuery} placeholder='Search Character' className='search'/>
    </>
  )
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search