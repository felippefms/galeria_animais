import React from 'react';
import PhotoBox from './PhotoBox';

import golfinho from '../imgs/golfinho.jpg'

function Aquaticos(){
    return(
        <div className='content-wrapper'>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox imagem={golfinho} nome='Golfinho' nomecien='Delphinus delphis' tipo='Mamifero' anos='30'></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
        </div>
    )
}

export default Aquaticos;