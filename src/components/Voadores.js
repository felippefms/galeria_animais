import React from 'react';
import './Voadores.css';

import PhotoBox from './PhotoBox';
import papagaio from '../imgs/papagaio.jpg';
import Header from "./Header";
import aguia from '../imgs/aguia.jpg';
import beijaflor from '../imgs/beijaflor.jpg';
import cegonha from '../imgs/cegonha.jpg';
import gaivota from '../imgs/gaivota.jpg';

function Voadores(){
    return(
    <div id='Voadores-Wrapper'>
        <Header/>
        <div className='content-wrapper'>
            <PhotoBox imagem={beijaflor} nome=' Beija-Flor' nomecien=' Trochilidae' classe=' Ave' anos='4'></PhotoBox>
            <PhotoBox imagem={cegonha} nome=' Cegonha' nomecien=' Ciconia' classe=' Ave' anos='30'></PhotoBox>
            <PhotoBox imagem={gaivota} nome=' Gaivota' nomecien=' Larus dominicanus' classe=' Ave' anos='30'></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox imagem={aguia} nome=' Águia' nomecien=' Haliaeetus leucocephalus' classe=' Ave' anos='25'></PhotoBox>
            <PhotoBox imagem={papagaio} nome=' Arara' nomecien=' Ara chloropterus' classe=' Ave' anos='60'></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
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