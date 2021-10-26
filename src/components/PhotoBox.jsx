import './PhotoBox.css'
import Cachorro from '../imgs/cachorro.jpg'

function PhotoBox(){
    return (
        <div className='PhotoBox'>
            <img src={Cachorro} alt="Imagem"/>
        </div>
    )
}

export default PhotoBox