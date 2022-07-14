import React from 'react';
import PhotoBox from './PhotoBox';

import cachorro from'../imgs/cachorro.jpg';
import girafa from'../imgs/girafa.jpg';
import leao from'../imgs/leao.jpg';
import gato from'../imgs/gato.jpg';


function Terrestres(){
    return(
        <div className='content-wrapper'>
            <PhotoBox imagem={girafa} nome=' Girafa' nomecien=' Giraffa camelopardalis' classe=' Mamifero' anos='33'></PhotoBox>
            <PhotoBox imagem={leao} nome=' Leão' nomecien=' Panthera leo' classe=' Mamifero' anos='16'></PhotoBox>
            <PhotoBox imagem={gato} nome=' Gato' nomecien=' Felis catus' classe=' Mamifero' anos='14'></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox imagem={cachorro} nome=' Cachorro' nomecien=' Canis lupus familiaris' classe=' Mamifero' anos='13'></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
        </div>
    )
}

export default Terrestres;