import './App.css';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import MenuApp from '../components/menu-app/MenuApp';
import Topics from '../features/topics/Topics';
import NewDeck from '../features/new-deck/NewDeck';
import Decks from '../features/decks/Decks';
import Game from '../features/game/Game';
import MenuGame from '../components/menu-game/MenuGame';

function App() {
  const [ searchParams ] = useSearchParams();
  const isGameActive = searchParams.get('id');

  return (
    <div className="App">
      {isGameActive ? 
        <MenuGame />
        :
        <MenuApp />
      }
      
      <Routes>
        <Route exact path="/" element={null} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/new-deck" element={<NewDeck />} />
        <Route path="/decks" element={<Decks />} />
        <Route path="/game/*" element={<Game />} />
      </Routes>

    </div>
  );
}

export default App;
