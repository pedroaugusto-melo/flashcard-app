import './App.css';
import { Routes, Route } from 'react-router-dom';
import Menu from '../components/menu/Menu';
import Topics from '../features/topics/Topics';
import NewDeck from '../features/new-deck/NewDeck';

function App() {
  return (
    <div className="App">
      <Menu />
      
      <Routes>
        <Route exact path="/" element={null} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/new-deck" element={<NewDeck />} />
      </Routes>

    </div>
  );
}

export default App;
