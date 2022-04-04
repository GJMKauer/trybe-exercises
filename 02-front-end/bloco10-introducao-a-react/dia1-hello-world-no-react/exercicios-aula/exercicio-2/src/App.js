import logo from './logo.svg';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <Content />
        <img src={logo} className='App-logo' alt='logo' />
        <Footer />
      </header>
    </div>
  );
}

export default App;
