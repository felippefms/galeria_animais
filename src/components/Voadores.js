import React from 'react';
import PhotoBox from './PhotoBox';
import papagaio from '../imgs/papagaio.jpg'

function Voadores(){
    return(
    <div className='content-wrapper'>
        <PhotoBox></PhotoBox>
        <PhotoBox></PhotoBox>
        <PhotoBox></PhotoBox>
        <PhotoBox></PhotoBox>
        <PhotoBox></PhotoBox>
        <PhotoBox></PhotoBox>
        <PhotoBox></PhotoBox>
        <PhotoBox></PhotoBox>
        <PhotoBox imagem={papagaio} nome=' Arara' nomecien=' Ara chloropterus' classe=' Ave' anos='60'></PhotoBox>
        <PhotoBox></PhotoBox>
        <PhotoBox></PhotoBox>
        <PhotoBox></PhotoBox>
        <PhotoBox></PhotoBox>
        <PhotoBox></PhotoBox>
        <PhotoBox></PhotoBox>
    </div>
    )
}

export default Voadores;