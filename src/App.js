import logo from './logo.svg';
import './App.css';

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
      </header>

      <main style={{maxWidth: '300px', margin: 'auto'}}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam ullamcorper imperdiet. Donec vitae nunc egestas, malesuada arcu eget, blandit est. Proin sit amet justo eros. Donec sed tristique enim. Proin lorem libero, placerat sit amet urna vitae, consectetur lacinia eros. Aliquam nec ornare justo, vitae pharetra est. Quisque ultrices arcu vel dui porttitor, sed maximus dolor aliquet. Sed sollicitudin, sapien et posuere finibus, purus est tristique mauris, vel pellentesque neque erat vel justo.</p>
      </main>

    </div>
  );
}

export default App;
