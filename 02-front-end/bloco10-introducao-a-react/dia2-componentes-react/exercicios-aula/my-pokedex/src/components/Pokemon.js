import React, { Component } from 'react';
import './Pokemon.css';
import pokemons from '../data';

class Pokemon extends Component {
  render() {
    const { name, type, image, avgweightvalue, avgweightmeasurement } = this.props;

    return (
        <div className='pokemon-container'>
          <div className='pokemon-items'>
            <ul>
              <li className='pokemon-li'>{name}</li>
              <li className='pokemon-li'>{type}</li>
              <li className='pokemon-li'>
                Average weight: {avgweightvalue}
                {avgweightmeasurement}
              </li>
            </ul>
          </div>
          <div className='pokemon-image'>
            <ul>
              <img src={image} width='100px'></img>
            </ul>
          </div>
        </div>
    );
  }
}

export default Pokemon;
