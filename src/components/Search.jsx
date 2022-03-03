import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { search, searchRare, searchTrunfo,
      onInputSearchChange, onSearchButtonClick } = this.props;
    return (
      <section>
        <h2>Filtro de Busca</h2>
        <form>
          <label htmlFor="searchName">
            <input
              type="text"
              id="searchName"
              name="search"
              value={ search }
              onChange={ onInputSearchChange }
              data-testid="name-filter"
            />
          </label>
          <label htmlFor="searchRare">
            <select
              id="searchRare"
              name="searchRare"
              value={ searchRare }
              onChange={ onInputSearchChange }
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
              checked={ searchTrunfo }
              onChange={ onInputSearchChange }
              data-testid="trunfo-filter"
            />
          </label>
          <button type="submit" onClick={ onSearchButtonClick }>Buscar</button>
        </form>
      </section>
    );
  }
}

Search.propTypes = {
  search: PropTypes.string,
}.isRequired;

export default Search;
