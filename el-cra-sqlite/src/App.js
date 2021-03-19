import logo from './logo.svg';
import './App.css';
const electron = window.require('electron');
const ipcRenderer  = electron.ipcRenderer;

function testSend() {
  ipcRenderer.send('test-channel', 'hello world')
}

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
        <button onClick={testSend}>test</button>
      </header>
    </div>
  );
}

export default App;
