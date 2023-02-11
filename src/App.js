import './App.css';
import Top50 from './stranice/Top50';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Genres from './stranice/Genres';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Top50 />} />
          <Route path="/genres" element={<Genres />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
