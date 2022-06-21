import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

function FetchProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const FETCH_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const fetchAPI = async () => {
      const apiData = await fetch(FETCH_URL);
      const { results } = await apiData.json();
      const filteredResults = results.filter((result) => delete result.residents);
      setData(filteredResults);
      setFilteredData(filteredResults);
    };
    fetchAPI();
  }, []);

  return (
    <main>
      <MyContext.Provider value={ { data, setData, filteredData, setFilteredData } }>
        { children }
      </MyContext.Provider>
    </main>
  );
}

FetchProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default FetchProvider;
