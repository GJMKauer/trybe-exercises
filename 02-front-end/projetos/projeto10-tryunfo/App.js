import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      // cardRare: 'Selecione a raridade',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      handleSpan: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { // Depois de muito sofrer, e com a ajuda do Pedro Caldas, entendi que era >AQUI< que tinha que ficar a callback do setState, e não separado.
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      } = this.state;
      const maxSum = 210;
      const maxUnit = 90;
      const minUnit = 0;
      if (
        cardName.length > 0
        && cardDescription.length > 0
        && cardImage.length > 0
        && cardRare.length > 0
        && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= maxSum
        && Number(cardAttr1) <= maxUnit
        && Number(cardAttr1) >= minUnit
        && Number(cardAttr2) <= maxUnit
        && Number(cardAttr2) >= minUnit
        && Number(cardAttr3) <= maxUnit
        && Number(cardAttr3) >= minUnit
      ) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
      if (cardTrunfo) {
        this.setState({
          hasTrunfo: true,
        });
      } else {
        this.setState({
          hasTrunfo: false,
        });
      }
    });
  }

  handleSaveButton() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      hasTrunfo,
      cardTrunfo,
    } = this.state;

    const newElement = (<Card
      cardName={ cardName }
      cardDescription={ cardDescription }
      cardAttr1={ cardAttr1 }
      cardAttr2={ cardAttr2 }
      cardAttr3={ cardAttr3 }
      cardImage={ cardImage }
      cardRare={ cardRare }
      cardTrunfo={ cardTrunfo }
    />);

    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      // cardRare: 'Selecione a raridade',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [...prevState.deck, newElement],
    }));

    if (hasTrunfo) {
      this.setState({
        handleSpan: true,
      });
    }
  }

  handleDelete({ target }) {
    const { deck } = this.state;

    if (deck[target.id].props.cardTrunfo === true) {
      this.setState({
        handleSpan: false,
        hasTrunfo: false,
      });
    }

    const arrayCartas = [...deck];
    arrayCartas.splice(target.id, 1);

    this.setState({
      deck: arrayCartas,
    });
  }

  // handleFilter(filterType) {

  // }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      hasTrunfo,
      handleSpan,
      cardTrunfo,
      isSaveButtonDisabled,
      deck,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="form-card-container">
          <div>
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
              handleSpan={ handleSpan }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.handleChange }
              onSaveButtonClick={ this.handleSaveButton }
            />
          </div>
          <div>
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
          </div>
        </div>
        <Deck deck={ deck } handleDelete={ this.handleDelete } />
      </div>
    );
  }
}

export default App;
