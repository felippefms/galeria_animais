import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Terrestres from './components/Terrestres';
import Voadores from './components/Voadores';
import Aquaticos from './components/Aquaticos';

function App() {
  return (
  <>
  <Router>
    <div className="App">
      <Switch>
        <Route path='/Home' exact component={Home}/>
        <Route path='/Terrestres' component={Terrestres}/>
        <Route path='/Voadores' component={Voadores}/>
        <Route path='/Aquaticos' component={Aquaticos}/>
      </Switch>
  </div>
  </Router>
  </>
  );
}

export default App;