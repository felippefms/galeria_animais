import React from 'react';
import PhotoBox from './PhotoBox';
import Header from './Header';

import './Aquaticos.css';

import golfinho from '../imgs/golfinho.jpg'

function Aquaticos(){
    return(
        <div id='AquaticosWrapper'>
            <Header/>
            <div className='content-wrapper'>
                <PhotoBox></PhotoBox>
                <PhotoBox></PhotoBox>
                <PhotoBox></PhotoBox>
                <PhotoBox></PhotoBox>
                <PhotoBox></PhotoBox>
                <PhotoBox></PhotoBox>
                <PhotoBox imagem={golfinho} nome=' Golfinho' nomecien=' Delphinus delphis' classe=' Mamifero' anos='30'></PhotoBox>
                <PhotoBox></PhotoBox>
                <PhotoBox></PhotoBox>
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

export default Aquaticos;