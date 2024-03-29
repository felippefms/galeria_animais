import React from 'react';
import PhotoBox from './PhotoBox';
import Header from './Header';

import './Aquaticos.css';

import baleia from '../imgs/baleia.jpg';
import golfinho from '../imgs/golfinho.jpg';
import polvo from '../imgs/polvo.jpg';
import carangueijo from '../imgs/carangueijo.jpg';
import peixepalhaco from '../imgs/peixepalhaco.png';
import garoupa from '../imgs/garoupa.jpg';
import tartaruga from '../imgs/tartaruga.jpg';
import sweetlips from '../imgs/sweetlips.jpg';
import peixedemonio from '../imgs/peixedemonio.jpg';
import andinoacara from '../imgs/andinoacara.jpg';
import peixeleao from '../imgs/peixeleao.jpg';
import arraia from '../imgs/arraia.jpg';
import peixebalao from '../imgs/peixebalao.jpg';
import tubarao from '../imgs/tubarao.jpg';
import tabaraobaleia from '../imgs/tubaraobaleia.jpg';
import baleiacaxalote from '../imgs/baleiacaxalote.jpg';

function Aquaticos(){
    return(
        <div id='AquaticosWrapper'>
            <Header/>
            <div className='content-wrapper'>
                <PhotoBox imagem={baleia} nome=' Baleia Orca' nomecien=' Orcinus orca' classe=' Mamífero' anos='40'></PhotoBox>
                <PhotoBox imagem={polvo} nome=' Polvo' nomecien=' Octopoda' classe=' Molusco' anos='4'></PhotoBox>
                <PhotoBox imagem={carangueijo} nome=' Carangueijo' nomecien=' Brachyura' classe=' Crustáceo' anos='4'></PhotoBox>
                <PhotoBox imagem={peixepalhaco} nome=' Peixe-Palhaço' nomecien=' Amphiprioninae' classe=' Peixe' anos='8'></PhotoBox>
                <PhotoBox imagem={garoupa} nome=' Garoupa' nomecien=' Epinephelinae' classe=' Peixe' anos='10'></PhotoBox>
                <PhotoBox imagem={tartaruga} nome=' Tartaruga' nomecien=' Testudines' classe=' Réptil' anos='100'></PhotoBox>
                <PhotoBox imagem={golfinho} nome=' Golfinho' nomecien=' Delphinus delphis' classe=' Mamífero' anos='30'></PhotoBox>
                <PhotoBox imagem={sweetlips} nome=' Sweetlips' nomecien=' Plectorhinchus lineatus' classe=' Peixe' anos='4'></PhotoBox>
                <PhotoBox imagem={peixedemonio} nome=' Demônio azul oriental' nomecien=' Paraplesiops bleekeri' classe=' Peixe' anos='4'></PhotoBox>
                <PhotoBox imagem={andinoacara} nome=' Terror Verde' nomecien=' Andinoacara rivulatus' classe=' Peixe' anos='8'></PhotoBox>
                <PhotoBox imagem={peixeleao} nome=' Peixe-Leão' nomecien=' Pterois' classe=' Peixe' anos='15'></PhotoBox>
                <PhotoBox imagem={arraia} nome=' Arraia-Uge-Manchas-Azuis' nomecien=' Taeniura lymma' classe=' Peixe' anos='15'></PhotoBox>
                <PhotoBox imagem={peixebalao} nome=' Peixe-Balão-Estrelado' nomecien=' Arothron stellatus' classe=' Peixe' anos='14'></PhotoBox>
                <PhotoBox imagem={tubarao} nome=' Tubarão Branco' nomecien=' Carcharodon carcharias' classe=' Peixe' anos='70'></PhotoBox>
                <PhotoBox imagem={tabaraobaleia} nome=' Tubarão Baleia' nomecien=' Rhincodon typus' classe=' Peixe' anos='30'></PhotoBox>
                <PhotoBox imagem={baleiacaxalote} nome=' Baleia Cachalote' nomecien=' Physeter macrocephalus' classe=' Mamífero' anos='70'></PhotoBox>
            </div>
        </div>
    )
}

export default Aquaticos;