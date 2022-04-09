import React, { Component } from 'react';
import Address from './components/Address';
import ButtonDiv from './components/ButtonDiv';
import ButtonRemoveAll from './components/ButtonRemoveAll';
import City from './components/City';
import CPF from './components/CPF';
import Curriculum from './components/Curriculum';
import Curriculum2 from './components/Curriculum2';
import Curriculum3 from './components/Curriculum3';
import Email from './components/Email';
import HouseType from './components/HouseType';
import Name from './components/Name';
import State from './components/State';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleDefault = this.handleDefault.bind(this);
    this.handleMouse = this.handleMouse.bind(this);

    this.state = {
      formName: '',
      formEmail: '',
      formCPF: '',
      formAddress: '',
      formCity: '',
      formState: '',
      formHouseType: '',
      formCurriculum: '',
      formCurriculum2: '',
      formCurriculum3: '',
      onEvent: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  handleBlur({ target }) {
    for (let i = 0; i <= 9; i += 1) {
      if (target.value[0].includes(i)) {
        this.setState({
          formCity: '',
        });
      }
    }
  }

  handleDefault({ target }) {
    if (target.value === 'estadoPadrao') {
      this.setState({
        formState: '',
      });
    }
  }

  handleMouse({ target }) {
    if (this.state.onEvent === false) {
      alert('Preencha com cuidado esta informação.')
    }
    this.setState({
      onEvent: true,
    })
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <Name name={this.state.formName} handleChange={this.handleChange} />
          <Email name={this.state.formEmail} handleChange={this.handleChange} />
          <CPF name={this.state.formCPF} handleChange={this.handleChange} />
          <Address
            name={this.state.formAddress}
            handleChange={this.handleChange}
          />
          <City
            name={this.state.formCity}
            handleChange={this.handleChange}
            handleBlur={this.handleBlur}
          />
          <State
            name={this.state.formState}
            handleChange={this.handleChange}
            handleDefault={this.handleDefault}
          />
          <HouseType
            name={this.state.formHouseType}
            handleChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <legend>Dados Profissionais</legend>
          <Curriculum
            name={this.state.formCurriculum}
            handleChange={this.handleChange}
          />
          <Curriculum2
            name={this.state.formCurriculum2}
            handleChange={this.handleChange}
            handleMouse={this.handleMouse}
          />
          <Curriculum3
            name={this.state.formCurriculum3}
            handleChange={this.handleChange}
          />
        </fieldset>
        <ButtonDiv />
        <ButtonRemoveAll />
        <button type="submit">Enviar dados</button>
      </form>
    );
  }
}

export default App;
