import React from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

function Header(){
    return(
        <div>
            <header className='Wellcome-Text'>
                <h1>Galeria de fotos de animais</h1>
                <p>Projeto feito por Felipe Madureira de Souza.</p>
            </header>

            <div className="Initial-Text">
                <p>Bem-Vindo(a) ao projeto de galeria de imagens feito inteiramente em ReactJS !<br/>O objetivo do projeto é fazer uma bela galeria de imagens em uma aplicação web responsiva.</p>
            </div>

            <nav className='menu'>
                    <Link to='/' className='menu-link'>PÁGINA INICIAL</Link>
                    <Link to='/Terrestres' className='menu-link'>TERRESTRES</Link>
                    <Link to='/Voadores' className='menu-link'>VOADORES</Link>
                    <Link to='/Aquaticos' className='menu-link'>AQUÁTICOS</Link>
            </nav>
        </div>
    )
}

export default Header;