import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const { name, type, image, avgweightvalue, avgweightmeasurement } =
      this.props;

    return (
      <section className="general-container">
        <div className="pokemon-container">
          <div className="pokemon-items">
            <ul>
              <li className="pokemon-li">{name}</li>
              <li className="pokemon-li">{type}</li>
              <li className="pokemon-li">
                Average weight: {avgweightvalue}
                {avgweightmeasurement}
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <img src={image} width="120px" alt="Pokémon gif"></img>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Pokemon;
