import React from 'react';

import PhotoBox from './PhotoBox';
import Cachorro from '../imgs/cachorro.jpg';
import Golfinho from '../imgs/golfinho.jpg';
import Papagaio from '../imgs/papagaio.jpg';


function Home() {
    return(
        <div>
            <div className="Initial-Text">
                <p>Bem-Vindo(a) ao projeto de galeria de imagens feito interamente em ReactJS !<br/>O objeto do projeto é fazer uma bela galeria de imagens em uma aplicação web responsiva.</p>
            </div>

            <div className="content-wrapper">
                <PhotoBox imagem={Cachorro} Caption={'Seja Bem-Vindo !'} nome='Cachorro' nomecien=' Canis lupus familiaris' classe=' Mamifero' anos='13'></PhotoBox>
                <PhotoBox imagem={Golfinho} Caption={'Basta clicar em uma imagem.'} nome='Golfinho' nomecien=' Delphinus delphis' classe=' Mamifero' anos='30'></PhotoBox>
                <PhotoBox imagem={Papagaio} Caption={'Escolha uma categoria acima.'} nome='Arara' nomecien=' Ara chloropterus' classe=' Ave' anos='60'></PhotoBox>
            </div>
        </div>
    )
}

export default Home;