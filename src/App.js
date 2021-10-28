import './App.css';
import { Switch,Route,Link } from 'react-router-dom';

import PhotoBox from './components/PhotoBox';

import Cachorro from '../src/imgs/cachorro.jpg';
import Golfinho from '../src/imgs/golfinho.jpg';
import Papagaio from '../src/imgs/Papagaio.jpg';

import Terrestres from './components/Terrestres';
import Voadores from './components/Voadores';
import Aquaticos from './components/Aquaticos';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Galeria de fotos de animais</h1>
        <p>Projeto feito por Felipe Madureira de Souza.</p>
      </header>
        <nav className='menu'>
          <Link to='/'>Home</Link>
          <Link to='/Terrestres'>TERRESTRES</Link>
          <Link to='/Voadores'>VOADORES</Link>
          <Link to='/Aquaticos'>AQUATICOS</Link>
        </nav>

        <Switch>
          <Route path='/Terrestres' component={Terrestres}/>
          <Route path='/Voadores' component={Voadores}/>
          <Route path='/Aquaticos' component={Aquaticos}/>
        </Switch>
      </div>
  );
}

export default App;