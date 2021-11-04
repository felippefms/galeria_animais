import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';
import './App.css';

import Header from './components/Header.js';
import Home from './components/Home';
import Terrestres from './components/Terrestres';
import Voadores from './components/Voadores';
import Aquaticos from './components/Aquaticos';

function App() {
  return (
  <>
  <Router>
    <div className="App">
      <Header></Header>
      <nav className='menu'>
        <Link to='/' className='menu-link'>HOME</Link>
        <Link to='/Terrestres' className='menu-link'>TERRESTRES</Link>
        <Link to='/Voadores' className='menu-link'>VOADORES</Link>
        <Link to='/Aquaticos' className='menu-link'>AQUATICOS</Link>
      </nav>

      <Switch>
        <Route path='/' exact component={Home}/>
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