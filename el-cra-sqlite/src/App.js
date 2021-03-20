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
    </div>
  );
}

export default App;
