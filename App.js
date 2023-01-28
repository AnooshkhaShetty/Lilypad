import logo from './logo.svg';
import pho from './pho.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pho} className="Pho" alt="pho" width="400"  height="500"/>
        <p>
          Yummy pho :O
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
