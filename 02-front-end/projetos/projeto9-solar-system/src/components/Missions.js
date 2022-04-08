import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <section>
        <div data-testid="missions" className="missions">
          <Title headline="Missões" />
        </div>
        <div className="missions-container">
          {missions.map((element) => (
            <MissionCard
              name={ element.name }
              year={ element.year }
              country={ element.country }
              destination={ element.destination }
              key={ element.name }
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Missions;
