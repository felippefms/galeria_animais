import { Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Terrestres from './components/Terrestres';
import Voadores from './components/Voadores';
import Aquaticos from './components/Aquaticos';
import Dashboard from './components/Dashboard';
import DeviceList from './components/DeviceList';

function App() {
  return (
  <>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Terrestres" element={<Terrestres />} />
            <Route path="/Voadores" element={<Voadores />} />
            <Route path="/Aquaticos" element={<Aquaticos />} />
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/DeviceList" element={<DeviceList />}></Route>
          </Routes>
      </div>
  </>
  );
}

export default App;