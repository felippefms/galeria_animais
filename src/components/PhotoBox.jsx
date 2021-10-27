import './PhotoBox.css'

function PhotoBox(props){
    return (
        <div className='PhotoBox'>
            <img src={props.Imagem}/>
        </div>
    )
}

export default PhotoBox