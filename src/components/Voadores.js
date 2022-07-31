import React from 'react';
import './Voadores.css';

import PhotoBox from './PhotoBox';
import papagaio from '../imgs/papagaio.jpg';
import Header from "./Header";
import aguia from '../imgs/aguia.jpg';
import beijaflor from '../imgs/beijaflor.jpg';
import cegonha from '../imgs/cegonha.jpg';
import gaivota from '../imgs/gaivota.jpg';
import arara from '../imgs/arara.jpg';
import tucano from '../imgs/tucano.jpg';
import bluejay from '../imgs/bluejay.jpg';
import coruja from '../imgs/coruja.jpg';
import cardeal from '../imgs/cardinal.jpg';
import flamingo from '../imgs/flamingo.jpg';

function Voadores(){
    return(
    <div id='Voadores-Wrapper'>
        <Header/>
        <div className='content-wrapper'>
            <PhotoBox imagem={beijaflor} nome=' Beija-Flor' nomecien=' Trochilidae' classe=' Ave' anos='4'></PhotoBox>
            <PhotoBox imagem={cegonha} nome=' Cegonha' nomecien=' Ciconia' classe=' Ave' anos='30'></PhotoBox>
            <PhotoBox imagem={gaivota} nome=' Gaivota' nomecien=' Larus dominicanus' classe=' Ave' anos='30'></PhotoBox>
            <PhotoBox imagem={arara} nome=' Papagaio' nomecien=' Amazona aestiva' classe=' Ave' anos='60'></PhotoBox>
            <PhotoBox imagem={tucano} nome=' Tucano' nomecien=' Ramphastidae' classe=' Ave' anos='20'></PhotoBox>
            <PhotoBox imagem={bluejay} nome=' Gaio-Azul' nomecien=' Cyanocitta cristata' classe=' Ave' anos='7'></PhotoBox>
            <PhotoBox imagem={coruja} nome=' Coruja' nomecien=' Strigiformes' classe=' Ave' anos='15'></PhotoBox>
            <PhotoBox imagem={aguia} nome=' Águia' nomecien=' Haliaeetus leucocephalus' classe=' Ave' anos='25'></PhotoBox>
            <PhotoBox imagem={papagaio} nome=' Arara' nomecien=' Ara chloropterus' classe=' Ave' anos='60'></PhotoBox>
            <PhotoBox imagem={cardeal} nome=' Cardeal' nomecien=' Paroaria' classe=' Ave' anos='14'></PhotoBox>
            <PhotoBox imagem={flamingo} nome=' Flamingo' nomecien=' Phoenicopterus' classe=' Ave' anos='50'></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
        </div>
    </div>
    )
}

export default Voadores;