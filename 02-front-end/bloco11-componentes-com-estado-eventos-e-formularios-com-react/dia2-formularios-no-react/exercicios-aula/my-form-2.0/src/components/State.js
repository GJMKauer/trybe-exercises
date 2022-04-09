import React, { Component } from 'react';

class State extends Component {
  render() {
    const { handleChange, handleDefault } = this.props;
    const states = [
      'Acre',
      'Alagoas',
      'Amapá',
      'Amazonas',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espírito Santo',
      'Goiás',
      'Maranhão',
      'Mato Grosso',
      'Mato Grosso do Sul',
      'Minas Gerais',
      'Pará',
      'Paraíba',
      'Paraná',
      'Pernambuco',
      'Piauí',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rio Grande do Sul',
      'Rondônia',
      'Roraima',
      'Santa Catarina',
      'São Paulo',
      'Sergipe',
      'Tocantins',
    ];

    return (
      <div className="name-form">
        <label>
          Seu estado:
          <select
            name="formState"
            value={this.element}
            onClick={handleChange}
            onBlur={handleDefault}
            required>
              <option value="estadoPadrao">Selecione o seu estado</option>
            {states.map((element, index) => (
              <option key={element}>{element}</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

export default State;
