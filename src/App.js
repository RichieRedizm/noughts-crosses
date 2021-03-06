import { Board } from './components/Board';

import './App.css';

function App() {
  return (
    <div className='app'>
      <header className='app__header'>
        <h1>Richie's Noughts And Crosses</h1>
        <p className='app__info'>Click any square to start the game</p>
      </header>
      <div className='app__body'>
        <Board />
      </div>
    </div>
  );
}

export default App;
