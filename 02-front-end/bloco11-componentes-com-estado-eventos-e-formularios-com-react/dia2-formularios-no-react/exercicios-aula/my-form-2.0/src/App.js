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
    this.createDiv = this.createDiv.bind(this);
    this.divCounter = this.divCounter.bind(this);
    this.handleButtonMouse = this.handleButtonMouse.bind(this);
    this.handleAll = this.handleAll.bind(this);

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
      divCount: 0,
      buttonDiv: false,
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

  handleMouse() {
    if (this.state.onEvent === false) {
      alert('Preencha com cuidado esta informação.');
    }
    this.setState({
      onEvent: true,
    });
  }

  divCounter() {
    this.setState({
      divCount: this.state.divCount + 1,
    });
  }

  createDiv() {
    const rowList = [];

    for (let i = 0; i < this.state.divCount; i += 1) {
      rowList.push(
        <div>
          <span className="span-resumo">
            Seu nome: {this.state.formName.toUpperCase()}
          </span>
          <span className="span-resumo">Seu email: {this.state.formEmail}</span>
          <span className="span-resumo">Seu CPF: {this.state.formCPF} </span>
          <span className="span-resumo">
            Seu endereço: {this.state.formAddress}{' '}
          </span>
          <span className="span-resumo">
            Sua cidade: {this.state.formCity}{' '}
          </span>
          <span className="span-resumo">
            Seu estado: {this.state.formState}{' '}
          </span>
          <span className="span-resumo">
            Tipo da sua casa: {this.state.formHouseType}{' '}
          </span>
          <span className="span-resumo">
            Resumo do seu currículo: {this.state.formCurriculum}{' '}
          </span>
          <span className="span-resumo">
            Seu cargo atual: {this.state.formCurriculum2}{' '}
          </span>
          <span className="span-resumo">
            Descrição do cargo: {this.state.formCurriculum3}{' '}
          </span>
        </div>
      );
    }
    return rowList;
  }

  handleButtonMouse() {
    this.setState({
      buttonDiv: true,
    });
  }

  handleAll() {
    this.setState({
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
      divCount: 0,
      buttonDiv: false,
    });
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
        {this.createDiv()}
        <ButtonDiv
          handleDiv={this.divCounter}
          handleMouse={this.handleButtonMouse}
        />
        <ButtonRemoveAll handleAll={this.handleAll} />
      </form>
    );
  }
}

export default App;
