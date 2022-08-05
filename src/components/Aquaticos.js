import React from 'react';
import PhotoBox from './PhotoBox';
import Header from './Header';

import './Aquaticos.css';

import baleia from '../imgs/baleia.jpg';
import golfinho from '../imgs/golfinho.jpg';
import polvo from '../imgs/polvo.jpg';
import carangueijo from '../imgs/carangueijo.jpg';

function Aquaticos(){
    return(
        <div id='AquaticosWrapper'>
            <Header/>
            <div className='content-wrapper'>
                <PhotoBox imagem={baleia} nome=' Baleia Orca' nomecien=' Orcinus orca' classe=' Mamifero' anos='40'></PhotoBox>
                <PhotoBox imagem={polvo} nome=' Polvo' nomecien=' Octopoda' classe=' Molusco' anos='4'></PhotoBox>
                <PhotoBox imagem={carangueijo} nome=' Carangueijo' nomecien=' Brachyura' classe=' Crustáceo' anos='4'></PhotoBox>
                <PhotoBox imagem={golfinho} nome=' Golfinho' nomecien=' Delphinus delphis' classe=' Mamifero' anos='30'></PhotoBox>
                <PhotoBox imagem={golfinho} nome=' Golfinho' nomecien=' Delphinus delphis' classe=' Mamifero' anos='30'></PhotoBox>
                <PhotoBox></PhotoBox>
                <PhotoBox imagem={golfinho} nome=' Golfinho' nomecien=' Delphinus delphis' classe=' Mamifero' anos='30'></PhotoBox>
                <PhotoBox></PhotoBox>
                <PhotoBox imagem={golfinho} nome=' Golfinho' nomecien=' Delphinus delphis' classe=' Mamifero' anos='30'></PhotoBox>
                <PhotoBox imagem={golfinho} nome=' Golfinho' nomecien=' Delphinus delphis' classe=' Mamifero' anos='30'></PhotoBox>
                <PhotoBox imagem={golfinho} nome=' Golfinho' nomecien=' Delphinus delphis' classe=' Mamifero' anos='30'></PhotoBox>
                <PhotoBox imagem={golfinho} nome=' Golfinho' nomecien=' Delphinus delphis' classe=' Mamifero' anos='30'></PhotoBox>
                <PhotoBox imagem={golfinho} nome=' Golfinho' nomecien=' Delphinus delphis' classe=' Mamifero' anos='30'></PhotoBox>
                <PhotoBox imagem={golfinho} nome=' Golfinho' nomecien=' Delphinus delphis' classe=' Mamifero' anos='30'></PhotoBox>
                <PhotoBox imagem={golfinho} nome=' Golfinho' nomecien=' Delphinus delphis' classe=' Mamifero' anos='30'></PhotoBox>
                <PhotoBox imagem={golfinho} nome=' Golfinho' nomecien=' Delphinus delphis' classe=' Mamifero' anos='30'></PhotoBox>
            </div>
        </div>
    )
}

export default Aquaticos;