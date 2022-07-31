import React from 'react';

import Header from './Header';
import PhotoBox from './PhotoBox';
import Cachorro from '../imgs/cachorro.jpg';
import Golfinho from '../imgs/golfinho.jpg';
import Papagaio from '../imgs/papagaio.jpg';

import './Home.css';

function Home() {
    return(
        <div className='HomeWrapper'>
            <Header></Header>
            <div className="content-wrapper">
                <PhotoBox imagem={Cachorro} Caption={'Seja Bem-Vindo !'} nome='Cachorro' nomecien='Canis lupus familiaris' classe=' Mamifero' anos='13'></PhotoBox>
                <PhotoBox imagem={Papagaio} Caption={'Basta clicar em uma imagem.'} nome='Arara' nomecien=' Ara chloropterus' classe=' Ave' anos='60'></PhotoBox>
                <PhotoBox imagem={Golfinho} Caption={'Escolha uma categoria acima.'} nome='Golfinho' nomecien=' Delphinus delphis' classe=' Mamifero' anos='30'></PhotoBox>
            </div>
        </div>
    )
}

export default Home;