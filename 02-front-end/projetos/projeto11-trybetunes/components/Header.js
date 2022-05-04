import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getUser } from '../services/userAPI';

class Header extends Component {
  constructor() {
    super();

    this.getUserFunc = this.getUserFunc.bind(this);

    this.state = {
      user: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.getUserFunc();
  }

  async getUserFunc() {
    const fetchName = await getUser();
    this.setState({
      user: fetchName.name,
      loading: true,
    }, () => {
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { loading, user } = this.state;
    const headerContent = (
      <div>
        <p data-testid="header-user-name">{ user }</p>
        <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
        <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
      </div>
    );

    return (
      <header data-testid="header-component">
        { loading ? <Loading /> : headerContent}
      </header>
    );
  }
}

export default Header;
