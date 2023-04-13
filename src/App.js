import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header>
        {/* tabs in between */}
        <h2>Programming Portfolio          Dec 2021 - Present</h2>
        <h4>tadahiroueta.com</h4>
      </header>

      <div className="Sites">
        <a href='https://digit.tadahiroueta.com'>
          <h3>Digit-Recognition Neural Network</h3>
        </a>
        <a href='https://pheromones.tadahiroueta.com'>
          <h3>Ant Colony Heuristic - Salesperson Problem</h3>
        </a>
        <a href='https://playlist.tadahiroueta.com'>
          <h3>Spotify Client Search Algorithm</h3>
        </a>
        <a href='https://mmvacuo.tadahiroueta.com/'>
          <h3>Commercial Website for scientific equipment supplier</h3>
        </a>
      </div>

    </div>
  );
}

export default App;
