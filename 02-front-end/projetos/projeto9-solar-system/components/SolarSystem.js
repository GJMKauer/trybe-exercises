import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <section>
        <div data-testid="solar-system">
          <Title headline="Planetas" />
        </div>
        <div className="solar-system-container">
          {planets.map((element) => (
            <PlanetCard
              planetName={ element.name }
              planetImage={ element.image }
              key={ element.name }
            />
          ))}
        </div>
      </section>
    );
  }
}

export default SolarSystem;
