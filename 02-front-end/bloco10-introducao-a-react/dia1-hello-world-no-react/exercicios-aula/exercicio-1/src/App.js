import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return <li>{value}</li>;
};

const arrayTarefas = ['Me arrumar para o trabalho na SAFT;', 'Trabalhar na SAFT durante a manhã;', 'Chegar em casa, tomar banho e almoçar;', 'Estudar na Trybe das 14h00 às 20h00;', 'Conferir pendências do dia (mensagens);', 'Descansar e jogar um pouco com amigos.'];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ul>
          {arrayTarefas.map((element) => {
            return <ul>{Task(element)}</ul>;
          })}
        </ul>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
