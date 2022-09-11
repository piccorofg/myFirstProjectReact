import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import ByeWorld from './components/ByeWorld';
import GreetWorld from './components/GreetWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        < HelloWorld />
        < ByeWorld />
        < GreetWorld name= 'Piccoro' age ='42'/>
      </header>
    </div>
  );
}

export default App;
