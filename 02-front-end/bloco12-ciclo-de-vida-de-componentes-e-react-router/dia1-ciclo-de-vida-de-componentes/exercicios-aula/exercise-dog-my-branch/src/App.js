import React, { Component } from 'react';
import DogButton from './Button';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.saveDog = this.saveDog.bind(this);

    this.state = {
      loading: true,
      dogObject: undefined,
      dogPictures: [],
    };
  }

  componentDidMount() {
    this.fetchDog();
    // this.saveDog();
  }

  async fetchDog() {
    this.setState(
      { loading: true },
      async () => {
        const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false,
          dogObject: requestObject,
        });
      },
    );
  }

  saveDog() {
    const { dogObject } = this.state;
    this.setState((prevState) => ({
      dogPictures: [...prevState.dogPictures, dogObject],
    }));

    this.fetchDog();
  }

  render() {
    const { loading, dogObject, dogPictures } = this.state;
    const loadingElement = <span>Loading...</span>;
    const spanDog = (
      <div className="dog-container">
        <span>
          {dogPictures.map((element, index) => (
            <img key={ index } src={ element.message } alt={ element } />
          ))}
        </span>
      </div>
    );

    return (
      <div className="button-div">
        <p>
          {loading
            ? loadingElement
            : <DogButton dogObject={ dogObject.message } />}
        </p>
        <button type="button" onClick={ this.saveDog }>
          Mostrar novo doguinho
        </button>
        {spanDog}
      </div>
    );
  }
}

export default App;
