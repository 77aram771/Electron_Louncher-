import React, {useState} from 'react';
import './style.css';
import Modal from 'react-modal';
import {Button, Table} from 'reactstrap';

export const Modals = ({text}) => {

    const [modalIsOpen, useModal] = useState(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '100%',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'red'
        }
    };
    const openModal = () => {
        useModal(true)
    };
    const closeModal = () => {
        useModal(false)
    };

    return (

        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>
                    {text}
                </div>
            </Modal>
        </div>
    )
}
