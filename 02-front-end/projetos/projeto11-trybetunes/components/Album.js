import React, { Component } from 'react';
import propTypes from 'prop-types';
import MusicCard from './MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  constructor() {
    super();

    this.getSongs = this.getSongs.bind(this);

    this.state = {
      songs: [],
      song: [],
    };
  }

  componentDidMount() {
    this.getSongs();
  }

  async getSongs() {
    const { match: { params: { id } } } = this.props;
    this.setState({
      songs: await getMusics(id),
    }, () => {
      const { songs } = this.state;
      this.setState({
        song: [songs[0]],
      });
    });
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { song } = this.state;

    return (
      <div data-testid="page-album">
        {song.map(({ artistName, collectionName }, index) => (
          <div key={ index }>
            <p data-testid="artist-name">{ artistName }</p>
            <p data-testid="album-name">{ collectionName }</p>
          </div>
        ))}
        <MusicCard propId={ id } />
      </div>
    );
  }
}

Album.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  }),
};

Album.defaultProps = {
  match: null,
};

export default Album;
