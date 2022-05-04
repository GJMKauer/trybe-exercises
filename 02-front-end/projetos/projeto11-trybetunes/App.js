import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Album from './components/Album';
import Favorites from './components/Favorites';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import NotFound from './components/NotFound';
import Loading from './components/Loading';
import Header from './components/Header';
import { createUser } from './services/userAPI';
import searchAlbumsAPI from './services/searchAlbumsAPI';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.createUserFunc = this.createUserFunc.bind(this);
    this.validateButtonLogin = this.validateButtonLogin.bind(this);
    this.searchArtist = this.searchArtist.bind(this);
    this.validateButtonSearch = this.validateButtonSearch.bind(this);

    this.state = {
      nameValue: '',
      searchValue: '',
      searchedArtist: '',
      emptyAlbum: '',
      returnedAlbum: [],
      isDisabledButton: true,
      loading: false,
      wasButtonClicked: false,
    };
  }

  createUserFunc() {
    this.setState({
      loading: true,
    }, async () => {
      const { nameValue } = this.state;
      await createUser({ name: nameValue });
      this.setState({
        loading: false,
        wasButtonClicked: true,
      });
    });
  }

  validateButtonLogin({ target }) {
    const { value } = target;
    this.setState({
      nameValue: value,
    }, () => {
      const { nameValue } = this.state;
      const MIN_LENGTH = 3;
      if (nameValue.length >= MIN_LENGTH) {
        this.setState({
          isDisabledButton: false,
        });
      } else {
        this.setState({
          isDisabledButton: true,
        });
      }
    });
  }

  async searchArtist() {
    const { searchValue, returnedAlbum } = this.state;
    this.setState({
      loading: true,
    }, async () => {
      if (returnedAlbum.length === 0) {
        this.setState({
          emptyAlbum: 'Nenhum álbum foi encontrado',
        });
      }
      this.setState({
        returnedAlbum: await searchAlbumsAPI(searchValue),
        searchedArtist: searchValue,
        searchValue: '',
        loading: false,
        wasButtonClicked: true,
        isDisabledButton: true,
      });
    });
  }

  validateButtonSearch({ target }) {
    const { value } = target;
    this.setState({
      searchValue: value,
    }, () => {
      const { searchValue } = this.state;
      const MIN_LENGTH = 2;
      if (searchValue.length >= MIN_LENGTH) {
        this.setState({
          isDisabledButton: false,
        });
      } else {
        this.setState({
          isDisabledButton: true,
        });
      }
    });
  }

  render() {
    const {
      isDisabledButton,
      loading,
      wasButtonClicked,
      searchValue,
      emptyAlbum,
      searchedArtist,
      returnedAlbum,
    } = this.state;
    const login = (<Login
      disable={ isDisabledButton }
      createUserFunc={ this.createUserFunc }
      validateButton={ this.validateButtonLogin }
    />);
    const albumResult = (
      <div>
        <p>{ `Resultado de álbuns de: ${searchedArtist}` }</p>
        { returnedAlbum.map((
          { artworkUrl100, collectionName, artistName, collectionId }, index,
        ) => (
          <div key={ index }>
            <img src={ artworkUrl100 } alt={ collectionName } />
            <p>
              { artistName }
            </p>
            <p>
              { collectionName }
            </p>
            <Link
              to={ `/album/${collectionId}` }
              data-testid={ `link-to-album-${collectionId}` }
            >
              Acessar álbum
            </Link>
          </div>
        )) }
      </div>
    );

    return (
      <Switch>
        <Route exact path="/">
          { loading ? <Loading /> : login }
          { wasButtonClicked && <Redirect to="/search" /> }
        </Route>
        <Route exact path="/search">
          <Header />
          <Search
            disable={ isDisabledButton }
            searchValue={ searchValue }
            createUserFunc={ this.searchArtist }
            validateButton={ this.validateButtonSearch }
          />
          { loading && <Loading /> }
          { returnedAlbum.length > 0 ? albumResult : <p>{ emptyAlbum }</p> }
        </Route>
        <Route
          exact
          path="/album/:id"
          render={ (props) => (
            <div>
              <Header />
              <Album { ...props } />
            </div>) }
        />
        <Route exact path="/favorites">
          <Header />
          <Favorites />
        </Route>
        <Route exact path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route exact path="/profile/edit">
          <Header />
          <ProfileEdit />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    );
  }
}

export default App;
