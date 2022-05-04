import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const planeta = 'Planeta ';

    return (
      <section>
        <div data-testid="planet-card">
          <img
            src={ planetImage }
            alt={ planeta + planetName }
            className={ planetName }
          />
        </div>
        <div>
          <p data-testid="planet-name" className="planet-name">
            { planetName }
          </p>
        </div>
      </section>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
