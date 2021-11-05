import './PhotoBox.css';

function PhotoBox(props){
    return (
        <div className='PhotoBox'>
            <img src={props.Imagem} alt="Imagem"/>
            <p className='Photo-Text'>{props.Caption}</p>
        </div>
    )
}

export default PhotoBox