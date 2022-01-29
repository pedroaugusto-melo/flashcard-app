import './App.css';
import { Routes, Route } from 'react-router-dom';
import Menu from '../components/menu/Menu';
import Topics from '../features/topics/Topics';

function App() {
  return (
    <div className="App">
      <Menu />
      
      <Routes>
        <Route exact path="/" element={null} />
        <Route path="/topics" element={<Topics />}/>
      </Routes>

    </div>
  );
}

export default App;
