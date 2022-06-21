import React, { useState, useEffect, useContext } from 'react';
import MyContext from '../context/MyContext';
import { columnFilter, operatorFilter, THREE } from '../helpers';

function Header() {
  const { data, setFilteredData } = useContext(MyContext);

  const [titleFilter, setTitleFilter] = useState('');
  const [typeFilters, setTypeFilters] = useState('population');
  const [operatorFilters, setOperatorFilters] = useState('maior que');
  const [valueFilters, setValueFilters] = useState(0);
  const [numericFilters, setNumericFilters] = useState([]);
  const [newColumns, setNewColumns] = useState(columnFilter);

  useEffect(() => {
    const filteredTitles = data.filter(
      (planet) => planet.name.toLowerCase().includes(titleFilter),
    );

    const newFilteredTitles = numericFilters.reduce(
      (accumulator, filter) => accumulator.filter((planet) => {
        switch (filter.operatorFilters) {
        case 'maior que':
          return Number(planet[filter.typeFilters]) > Number(filter.valueFilters);
        case 'menor que':
          return Number(planet[filter.typeFilters]) < Number(filter.valueFilters);
        case 'igual a':
          return Number(planet[filter.typeFilters]) === Number(filter.valueFilters);
        default:
          return true;
        }
      }), filteredTitles,
    );

    setFilteredData(newFilteredTitles);
  }, [titleFilter, data, setFilteredData, numericFilters]);

  const handleNumericFilters = () => {
    const newNumericFilters = {
      typeFilters,
      operatorFilters,
      valueFilters,
    };
    setNumericFilters([...numericFilters, newNumericFilters]);

    const columnIndex = newColumns.indexOf(typeFilters);
    const remainingColumns = newColumns.filter(
      (_column, index) => index !== columnIndex,
    );
    setNewColumns(remainingColumns);
    setTypeFilters(remainingColumns[0]);
  };

  const handleDelete = ({ target: { value: name, name: index } }) => {
    const renderedFilters = numericFilters.filter(
      (_filter, filterIndex) => filterIndex !== Number(index),
    );
    setNumericFilters(renderedFilters);
    switch (name) {
    case 'orbital_period':
      setTypeFilters(newColumns[0]);
      return newColumns[0] === 'population'
        ? newColumns.splice(1, 0, 'orbital_period')
        : newColumns.splice(0, 0, 'orbital_period');
    case 'diameter':
      setTypeFilters(newColumns[0]);
      return newColumns[0] === 'population' || newColumns[0] === 'orbital_period'
        ? newColumns.splice(2, 0, 'diameter')
        : newColumns.splice(0, 0, 'diameter');
    case 'rotation_period':
      setTypeFilters(newColumns[0]);
      return newColumns[0] === 'population'
      || newColumns[0] === 'orbital_period' || newColumns[0] === 'diameter'
        ? newColumns.splice(THREE, 0, 'rotation_period')
        : newColumns.splice(0, 0, 'rotation_period');
    case 'surface_water':
      setTypeFilters(newColumns[0]);
      newColumns[4] = 'surface_water';
      break;
    default:
      setTypeFilters(newColumns[0]);
      newColumns.splice(0, 0, 'population');
    }
  };

  const handleDeleteAll = () => {
    setNumericFilters([]);
    setNewColumns(columnFilter);
    setTypeFilters('population');
  };

  return (
    <main>
      <form>
        <label htmlFor="filter-by-name">
          Filtre por nome:
          <input
            data-testid="name-filter"
            id="filter-by-name"
            type="text"
            onChange={ ({ target: { value } }) => setTitleFilter(value.toLowerCase()) }
          />
        </label>
        <label htmlFor="column-filter">
          Selecione o filtro:
          <select
            data-testid="column-filter"
            id="column-filter"
            onChange={ ({ target: { value } }) => setTypeFilters(value) }
          >
            { newColumns.map((column, index) => (
              <option key={ `${column}-${index}` }>{ column }</option>
            )) }
          </select>
        </label>
        <label htmlFor="operator-filter">
          Selecione o operador:
          <select
            data-testid="comparison-filter"
            id="operator-filter"
            onChange={ ({ target: { value } }) => setOperatorFilters(value) }
          >
            { operatorFilter.map((operator, index) => (
              <option key={ index }>{ operator }</option>
            )) }
          </select>
        </label>
        <input
          data-testid="value-filter"
          type="number"
          min="0"
          value={ valueFilters }
          onChange={ ({ target: { value } }) => setValueFilters(value) }
        />
        <button
          data-testid="button-filter"
          type="button"
          disabled={ valueFilters < 0 || newColumns.length === 0 }
          onClick={ handleNumericFilters }
        >
          Filtrar
        </button>
      </form>
      { numericFilters.length > 0
        && (
          <button
            type="button"
            data-testid="button-remove-filters"
            onClick={ handleDeleteAll }
          >
            Remover todos os filtros
          </button>
        ) }
      { numericFilters.length > 0 && <p>Filtros aplicados:</p> }
      { numericFilters.map((filter, index) => (
        <section key={ `${filter.typeFilters}-${index}` }>
          <span data-testid="filter">
            { `${filter.typeFilters} ${filter.operatorFilters} ${filter.valueFilters}` }
            <button
              type="button"
              value={ filter.typeFilters }
              name={ index }
              onClick={ handleDelete }
            >
              Remover filtro
            </button>
          </span>

        </section>
      )) }
    </main>
  );
}

export default Header;
