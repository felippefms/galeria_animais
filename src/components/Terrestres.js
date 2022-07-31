import React from 'react';
import PhotoBox from './PhotoBox';

import cachorro from'../imgs/cachorro.jpg';
import girafa from'../imgs/girafa.jpg';
import leao from'../imgs/leao.jpg';
import gato from'../imgs/gato.jpg';
import zebra from '../imgs/zebra.jpg';
import elefante from '../imgs/elefante.jpg';
import urso from '../imgs/urso.jpg';
import iguana from '../imgs/iguana.jpg';
import cavalo from '../imgs/cavalo.jpg';
import macaco from '../imgs/macaco.jpg';

import './terrestres.css';
import Header from './Header';

function Terrestres(){
    return(
        <div id='TerrestresWrapper'>
        <Header/>
        <div className='content-wrapper'>
            <PhotoBox imagem={girafa} nome=' Girafa' nomecien='Girafa camelopardalis' classe=' Mamifero' anos='33'></PhotoBox>
            <PhotoBox imagem={leao} nome=' Leão' nomecien=' Panthera leo' classe=' Mamifero' anos='16'></PhotoBox>
            <PhotoBox imagem={zebra} nome=' Zebra' nomecien=' Equus zebra' classe=' Mamifero' anos='20'></PhotoBox>
            <PhotoBox imagem={elefante} nome=' Elefante' nomecien=' Loxodonta' classe=' Mamifero' anos='60'></PhotoBox>
            <PhotoBox imagem={urso} nome=' Urso' nomecien=' Ursidae' classe=' Mamifero' anos='25'></PhotoBox>
            <PhotoBox imagem={iguana} nome=' Iguana' nomecien=' Iguana' classe=' Mamifero' anos='15'></PhotoBox>
            <PhotoBox imagem={cavalo} nome=' Cavalo' nomecien=' Equus caballus' classe=' Mamifero' anos='30'></PhotoBox>
            <PhotoBox imagem={macaco} nome=' Sagui Cara Branca' nomecien=' Callithrix geoffroyi' classe=' Mamifero' anos='12'></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox imagem={cachorro} nome=' Cachorro' nomecien='Canis lupus familiaris' classe=' Mamifero' anos='13'></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox imagem={gato} nome=' Gato' nomecien=' Felis catus' classe=' Mamifero' anos='14'></PhotoBox>
            <PhotoBox></PhotoBox>
            <PhotoBox></PhotoBox>
        </div>
        </div>
    )
}

export default Terrestres;