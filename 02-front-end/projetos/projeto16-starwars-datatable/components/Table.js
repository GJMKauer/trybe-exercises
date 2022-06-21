import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { headerInfo } from '../helpers';

function Table() {
  const { filteredData } = useContext(MyContext);

  return (
    <table>
      <thead>
        <tr>
          { headerInfo.map((header, index) => (
            <th key={ index }>{ header }</th>
          )) }
        </tr>
      </thead>
      <tbody>
        { filteredData.map((planet, index) => (
          <tr key={ index }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>
              { planet.films.map(
                (link, i) => (i === planet.films.length - 1
                  ? <a href={ link } key={ `${link}-${i}` }>{ link }</a>
                  : <a href={ link } key={ `${link}-${i}` }>{ `${link}, ` }</a>),
              ) }
            </td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td><a href={ planet.url } key={ planet.url }>{ planet.url }</a></td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
