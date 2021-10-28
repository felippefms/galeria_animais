import './PhotoBox.css';

function PhotoBox(props){
    return (
        <div className='PhotoBox'>
            <img src={props.Imagem} alt="Imagem"/>
        </div>
    )
}

export default PhotoBox