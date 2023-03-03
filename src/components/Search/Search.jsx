import React, { useState } from 'react';
import * as S from './styles';
import useAppStore from '../../store';

function Search() {
  const [search, setSearch] = useState('');
  const [searchRare, setSearchRare] = useState('todas');
  const [searchTrunfo, setSearchTrunfo] = useState(false);

  const onSearchButtonClick = (event) => {
    event.preventDefault();
    useAppStore.setState({ search, searchRare, searchTrunfo });
  };

  return (
    <S.Container>
      <S.Title>Filtro de Busca</S.Title>
      <S.Form>
        <label htmlFor="searchName">
          <input
            type="text"
            id="searchName"
            name="search"
            value={ search }
            onChange={ (event) => setSearch(event.target.value) }
            data-testid="name-filter"
          />
        </label>
        <label htmlFor="searchRare">
          <select
            id="searchRare"
            name="searchRare"
            value={ searchRare }
            onChange={ (event) => setSearchRare(event.target.value) }
            data-testid="rare-filter"
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="searchTrunfo">
          <input
            type="checkbox"
            id="searchTrunfo"
            name="searchTrunfo"
            defaultChecked={ searchTrunfo }
            onChange={ () => setSearchTrunfo(!searchTrunfo) }
            data-testid="trunfo-filter"
          />
        </label>
        <button type="submit" onClick={ onSearchButtonClick }>Buscar</button>
      </S.Form>
    </S.Container>
  );
}

export default Search;
