import { Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Terrestres from './components/Terrestres';
import Voadores from './components/Voadores';
import Aquaticos from './components/Aquaticos';

function App() {
  return (
  <>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Terrestres" element={<Terrestres />} />
            <Route path="/Voadores" element={<Voadores />} />
            <Route path="/Aquaticos" element={<Aquaticos />} />
          </Routes>
      </div>
  </>
  );
}

export default App;