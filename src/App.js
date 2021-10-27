import './App.css';
import './components/PhotoBox';
import PhotoBox from './components/PhotoBox';
import Cachorro from '../src/imgs/cachorro.jpg';
import Golfinho from '../src/imgs/golfinho.jpg';
import Papagaio from '../src/imgs/Papagaio.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Galeria de fotos de animais</h1>
        <p>Projeto feito por Felipe Madureira de Souza.</p>
      </header>
        <nav className="menu">
          <ul>
            <li><a href='#'>TERRESTRES</a></li>
            <li><a href='#'>VOADORES</a></li>
            <li><a href='#'>AQUÁTICOS</a></li>
          </ul>
        </nav>
        <div className="Initial-Text">
          <p>Bem-Vindo(a) ao projeto de galeria de imgagens feito interamente em ReactJS !<br/>O objeto do projeto é fazer uma bela galeria de imagens em uma aplicação web responsiva.</p>
        </div>
        <div className="content-wrapper">
          <PhotoBox Imagem={Cachorro}></PhotoBox>
          <PhotoBox Imagem={Golfinho}></PhotoBox>
          <PhotoBox Imagem={Papagaio}></PhotoBox>
        </div>
      </div>
  );
}

export default App;