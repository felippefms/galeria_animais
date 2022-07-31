import React from 'react';
import './Voadores.css';

import PhotoBox from './PhotoBox';
import papagaio from '../imgs/papagaio.jpg';
import Header from "./Header";
import aguia from '../imgs/aguia.jpg';

function Voadores(){
    return(
    <div id='Voadores-Wrapper'>
        <Header/>
        <div className='content-wrapper'>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
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