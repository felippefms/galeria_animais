import React from 'react';

function Terrestres(){
    return(
        <div>
            <div className="Initial-Text">
          <p>Bem-Vindo(a) ao projeto de galeria de imgagens feito interamente em ReactJS !<br/>O objeto do projeto é fazer uma bela galeria de imagens em uma aplicação web responsiva.</p>
        </div>
        <div className="content-wrapper">
          <PhotoBox Imagem={Cachorro}></PhotoBox>
          <PhotoBox Imagem={Golfinho}></PhotoBox>
          <PhotoBox Imagem={Papagaio}></PhotoBox>
        </div>
        </div>
    )
}

export default Terrestres;