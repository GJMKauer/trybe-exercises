import React, { Component } from 'react';
import propTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  constructor() {
    super();

    this.getSongs = this.getSongs.bind(this);
    this.addSongToFavorites = this.addSongToFavorites.bind(this);

    this.state = {
      allSongs: [],
      removedAlbum: [],
      favSongs: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getSongs();
    this.returnFavSongs();
  }

  async getSongs() {
    const { propId } = this.props;
    const fetchSongs = await getMusics(propId);
    this.setState({
      allSongs: fetchSongs,
    }, () => {
      const { allSongs } = this.state;
      const newArrayOfSongs = [...allSongs];
      newArrayOfSongs.splice(0, 1);
      this.setState({
        removedAlbum: newArrayOfSongs,
      });
    });
  }

  async addSongToFavorites({ target }) {
    const { value, checked } = target;
    this.setState({
      loading: true,
    }, async () => {
      this.setState(({
        loading: false,
      }));
      this.returnFavSongs();
      const parsedValue = JSON.parse(value);
      if (checked === true) await addSong(parsedValue);
    });
  }

  async returnFavSongs() {
    this.setState({
      loading: true,
    }, async () => {
      const getFavSongsAPI = await getFavoriteSongs();
      this.setState({
        loading: false,
        favSongs: getFavSongsAPI,
      });
    });
  }

  render() {
    const { removedAlbum, loading, favSongs } = this.state;

    const normalReturn = (
      removedAlbum.map(({ previewUrl, trackName, trackId }, index) => (
        <div key={ index }>
          <p>{ trackName }</p>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            { `O seu navegador não suporta o elemento ${<code>audio</code>}.` }
          </audio>
          <label htmlFor={ trackId }>
            Favorita
            <input
              id={ trackId }
              data-testid={ `checkbox-music-${trackId}` }
              type="checkbox"
              value={ JSON.stringify({ previewUrl, trackName, trackId }) }
              checked={
                favSongs.some((some) => some.trackId === trackId)
              }
              onChange={ this.addSongToFavorites }
            />
          </label>
        </div>
      ))
    );

    return (
      <div>
        { loading && <Loading /> }
        { normalReturn }
      </div>
    );
  }
}

MusicCard.propTypes = {
  propId: propTypes.string.isRequired,
};

export default MusicCard;
