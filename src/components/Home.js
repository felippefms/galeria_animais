import React from 'react';

import PhotoBox from './PhotoBox';
import Cachorro from '../imgs/cachorro.jpg';
import Golfinho from '../imgs/golfinho.jpg';
import Papagaio from '../imgs/papagaio.jpg';


function Home() {
    return(
        <div>
            <div className="Initial-Text">
                <p>Bem-Vindo(a) ao projeto de galeria de imgagens feito interamente em ReactJS !<br/>O objeto do projeto é fazer uma bela galeria de imagens em uma aplicação web responsiva.</p>
            </div>

            <div className="content-wrapper">
                <PhotoBox Imagem={Cachorro} Caption={'Seja Bem-Vindo !'}></PhotoBox>
                <PhotoBox Imagem={Golfinho} Caption={'Basta clicar em uma imagem.'}></PhotoBox>
                <PhotoBox Imagem={Papagaio} Caption={'Escolha uma categoria acima.'}></PhotoBox>
            </div>
        </div>
    )
}

export default Home;