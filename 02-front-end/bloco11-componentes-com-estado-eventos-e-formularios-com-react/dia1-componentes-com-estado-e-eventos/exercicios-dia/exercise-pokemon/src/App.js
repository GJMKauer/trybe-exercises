import React, { Component } from 'react';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';
import pokemons from './data';
import './App.css';

let pokemonType = pokemons;
const allPokemon = pokemons;
const bugPokemon = pokemons.filter((element) => element.type === 'Bug');
const dragonPokemon = pokemons.filter((element) => element.type === 'Dragon');
const electricPokemon = pokemons.filter(
  (element) => element.type === 'Electric'
);
const firePokemon = pokemons.filter((element) => element.type === 'Fire');
const normalPokemon = pokemons.filter((element) => element.type === 'Normal');
const poisonPokemon = pokemons.filter((element) => element.type === 'Poison');
const psychicPokemon = pokemons.filter((element) => element.type === 'Psychic');

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };

    // this.showAllPokemon = this.showAllPokemon.bind(this);
    // this.showPokemon = this.showPokemon.bind(this);
    // this.showNextPokemon = this.showNextPokemon.bind(this);
  }

  showPokemon(pokemonTypes) {
    const nextPokemonButton = document.querySelector('.next-pokemon-button');
    nextPokemonButton.disabled = false;

    pokemonType = pokemonTypes;

    const pokemonTypeArray = pokemonTypes.map((element) => element);

    this.setState({
      currentIndex: 0,
    });

    this.setState(<Pokemon />);

    if (pokemonTypeArray.length === 1) {
      nextPokemonButton.disabled = true;
    }

    return pokemonTypeArray;
  }

  showNextPokemon(pokemonType) {
    this.setState((oldState, _props) => ({
      currentIndex: oldState.currentIndex + 1,
    }));

    if (this.state.currentIndex === pokemonType.length - 1) {
      this.setState({
        currentIndex: 0,
      });
    }
  }

  render() {
    const { currentIndex } = this.state;

    return (
      <div className="pokedex">
        <Pokedex />
        <section className="pokemon-container-container">
          <Pokemon
            name={pokemonType[currentIndex].name}
            type={pokemonType[currentIndex].type}
            avgweightvalue={pokemonType[currentIndex].averageWeight.value}
            avgweightmeasurement={
              pokemonType[currentIndex].averageWeight.measurementUnit
            }
            image={pokemonType[currentIndex].image}
          />
          <div className="pokemon-type-container">
            <button
              className="filter-pokemon-all"
              onClick={() => this.showPokemon(allPokemon)}>
              All
            </button>
            <button
              className="filter-pokemon-bug"
              onClick={() => this.showPokemon(bugPokemon)}>
              Bug
            </button>
            <button
              className="filter-pokemon-dragon"
              onClick={() => this.showPokemon(dragonPokemon)}>
              Dragon
            </button>
            <button
              className="filter-pokemon-electric"
              onClick={() => this.showPokemon(electricPokemon)}>
              Electric
            </button>
            <button
              className="filter-pokemon-fire"
              onClick={() => this.showPokemon(firePokemon)}>
              Fire
            </button>
            <button
              className="filter-pokemon-normal"
              onClick={() => this.showPokemon(normalPokemon)}>
              Normal
            </button>
            <button
              className="filter-pokemon-poison"
              onClick={() => this.showPokemon(poisonPokemon)}>
              Poison
            </button>
            <button
              className="filter-pokemon-psychic"
              onClick={() => this.showPokemon(psychicPokemon)}>
              Psychic
            </button>
          </div>
          <div className="teste">
            <button
              className="next-pokemon-button"
              onClick={() => this.showNextPokemon(pokemonType)}>
              Próximo Pokémon -{'>'}
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
