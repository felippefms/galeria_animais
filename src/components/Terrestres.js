import React from 'react';
import PhotoBox from './PhotoBox';
import cachorro from'../imgs/cachorro.jpg';

function Terrestres(){
    return(
        <div className='content-wrapper'>
            <PhotoBox imagem={cachorro} nome='cachorro' tipo='mamifero'></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
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
    )
}

export default Terrestres;