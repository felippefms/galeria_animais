import './PhotoBox.css';
import Modal from 'react-modal';
import React from 'react';

Modal.setAppElement('#root');

function PhotoBox(props){
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className='PhotoBox' onClick={openModal}>
                <img src={props.imagem} alt="Imagem"/>
                <p className='Photo-Text'>{props.Caption}</p>
            </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <p>nome: {props.nome}</p>
        <p>tipo: {props.tipo}</p>
        <img src={props.imagem} alt='imagem'></img>
        </Modal>
        </>
    )
}

export default PhotoBox