import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      data: [],
    };
  }

  onInputChange({ target: { type, name, value, checked } }) {
    this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    }, this.validateForm);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo, data } = this.state;
    const object = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      cardAttr1,
      cardAttr2,
      cardAttr3 };
    const array = [...data, object];
    this.setState({
      data: array,
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: array.some((card) => card.cardTrunfo),
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
    });
  }

  validateForm() {
    const maxNumberPerAtt = 90;
    const maxSumAtt = 210;
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage } = this.state;
    const arrayTotal = [cardName, cardDescription, cardImage,
      Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];
    const sum = arrayTotal.reduce(
      (acc, current) => typeof current === 'number' && current + acc, 0,
    );
    const validate = arrayTotal.every(
      (current) => (typeof current === 'number' ? current >= 0
       && current <= maxNumberPerAtt && sum <= maxSumAtt : current !== ''),
    );
    this.setState({ isSaveButtonDisabled: !validate });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, data } = this.state;
    return (
      <main>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {data.map((card, index) => (
          <section key={ index }>
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
          </section>))}
      </main>
    );
  }
}

export default App;
