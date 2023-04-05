import './index.less';

import logo from '@/asset/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <a className="App-link" href="https://www.electronjs.org/zh/docs/latest" target="_blank" rel="noopener noreferrer">
          Learn Electron
        </a>
        <a className="App-link" href="https://www.electronforge.io/" target="_blank" rel="noopener noreferrer">
          Learn Electron Forge
        </a>
        <a className="App-link" href="https://webpack.docschina.org/concepts" target="_blank">
           Learn WebPack 5
        </a>
      </header>
    </div>
  );
}

export default App;
