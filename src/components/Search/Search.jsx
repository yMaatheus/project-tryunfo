import React from 'react';
import * as S from './styles';
import useAppStore from '../../store';

function Search() {
  const search = useAppStore((state) => state.search);
  const searchRare = useAppStore((state) => state.searchRare);
  const searchTrunfo = useAppStore((state) => state.searchTrunfo);

  return (
    <S.Container>
      <S.Title>Filtros de busca</S.Title>
      <S.Form>
        <input
          type="text"
          id="searchName"
          name="search"
          placeholder="Nome da carta"
          value={ search }
          onChange={ (event) => useAppStore.setState({ search: event.target.value }) }
          data-testid="name-filter"
        />
        <select
          id="searchRare"
          name="searchRare"
          value={ searchRare }
          onChange={ (event) => (
            useAppStore.setState({ searchRare: event.target.value })
          ) }
          data-testid="rare-filter"
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <S.Label htmlFor="searchTrunfo">
          <input
            type="checkbox"
            id="searchTrunfo"
            name="searchTrunfo"
            defaultChecked={ searchTrunfo }
            onChange={ () => useAppStore.setState({ searchTrunfo: !searchTrunfo }) }
            data-testid="trunfo-filter"
          />
          Super Trybe Trunfo
        </S.Label>
      </S.Form>
    </S.Container>
  );
}

export default Search;
