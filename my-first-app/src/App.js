import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import ByeWorld from './components/ByeWorld';
import GreetWorld from './components/GreetWorld';
import RenderButton from './components/RenderButton';

function App() {

  const userName = "Freddy Guzman";
  const ageUserName = 42;
  
  const user = {
    name: "Freddy Guzman Array",
    age: 42,
    color: 'blue'
  }

  const greetfn = (name, age) => { 
    alert( 'Hi '+ name +' from App.js!' )

    //Template Strings
    console.log(`Hi ${ name } you are ${ age } years old `);
  } 

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
        < HelloWorld userInfo = { user }/>
        < ByeWorld />
        < GreetWorld name= { userName } age = {ageUserName } />
        < RenderButton greetfn = { greetfn } userInfo = { user }/>
      </header>
    </div>
  );
}

export default App;
