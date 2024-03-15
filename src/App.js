import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello Viki...How are you....
         I'm fine.....Thank you......
        </p>
        <a>
          click me
        </a>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Host
        </a>
      </header>
    </div>
  );
}

export default App;
