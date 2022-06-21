import React from 'react';
import FetchProvider from './context/FetchProvider';
import Header from './components/Header';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <main>
      <FetchProvider>
        <Header />
        <Table />
      </FetchProvider>
    </main>
  );
}

export default App;
