// import logo from '../../logo.svg';
import './App.css';
import Heder from '.././header/Header'
import Main from '.././main/Main'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heder/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Heder/>
      <Main/>
    </div>
  );
}

export default App;
