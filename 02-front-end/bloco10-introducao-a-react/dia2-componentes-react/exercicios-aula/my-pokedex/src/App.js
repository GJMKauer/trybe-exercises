import './App.css';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';
import pokemons from './data';

function App() {
  return (
    <div className='pokedex'>
      <Pokedex />
      <section className='pokemon-container-container'>
        {pokemons.map((element) => (
          <Pokemon name={element.name} type={element.type} avgweightvalue={element.averageWeight.value} avgweightmeasurement={element.averageWeight.measurementUnit} image={element.image} />
        ))}
      </section>
    </div>
  );
}

export default App;
