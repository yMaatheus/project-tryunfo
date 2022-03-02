import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          <input type="text" id="name-input" name="name-input" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          <textarea
            id="description-input"
            name="description-input"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          <input
            type="number"
            id="attr1-input"
            name="attr1-input"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          <input
            type="number"
            id="attr2-input"
            name="attr2-input"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          <input
            type="number"
            id="attr3-input"
            name="attr3-input"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          <input
            type="text"
            id="image-input"
            name="image-input"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          <select id="rare-input" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            id="trunfo-input"
            name="trunfo-input"
            data-testid="trunfo-input"
          />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
