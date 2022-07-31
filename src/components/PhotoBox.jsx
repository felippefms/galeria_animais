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
            <Modal overlayClassName="modal-overlay" isOpen={modalIsOpen} onRequestClose={closeModal} className="modal-content">
                <p>Nome: {props.nome}</p>
                <p>Nome Científico:{props.nomecien}</p>
                <p>Classe: {props.classe}</p>
                <p>Estimativa de Vida: {props.anos} Anos</p>
                <img src={props.imagem} alt='imagem' className='fullscimg'></img>
            </Modal>           
        </>
    )
}

export default PhotoBox