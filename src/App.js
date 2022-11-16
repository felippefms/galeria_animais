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
        <Route path='/galeria_animais' exact component={Home}/>
        <Route path='/galeria_animais/Terrestres' component={Terrestres}/>
        <Route path='/galeria_animais/Voadores' component={Voadores}/>
        <Route path='/galeria_animais/Aquaticos' component={Aquaticos}/>
      </Switch>
  </div>
  </Router>
  </>
  );
}

export default App;