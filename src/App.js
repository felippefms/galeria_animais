import './App.css';
import './components/PhotoBox';
import PhotoBox from './components/PhotoBox';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Galeria de fotos de animais</h1>
        <p>Projeto feito por Felipe Madureira de Souza.</p>
      </header>
      <div className='menuwrapper'>
        <nav className="menu">
          <ul>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
            <li><a href='#'>OPTION</a></li>
          </ul>
        </nav>
      </div>
      <PhotoBox></PhotoBox>
      <PhotoBox></PhotoBox>
      <PhotoBox></PhotoBox>
      <PhotoBox></PhotoBox>
    </div>
  );
}

export default App;