import React from 'react';
import propTypes from 'prop-types';

class DogButton extends React.Component {
  render() {
    const { dogObject } = this.props;

    return (
      <div className="image-div">
        <img src={ dogObject } alt={ dogObject } />
      </div>
    );
  }
}

DogButton.propTypes = {
  dogObject: propTypes.string.isRequired,
};

export default DogButton;
