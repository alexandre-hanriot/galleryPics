import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImage, setSelectedImage }) => {
    const handleClick = (event) => {
        if (!event.target.classList.contains('modal__image')) {
            setSelectedImage(null);
        }
    };

    const handleClose = (event) => {
        setSelectedImage(null);
    };

    return (
        <motion.div className='modal' onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img 
                src={selectedImage} 
                alt='enlarged pic' 
                className='modal__image'
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
            />
            <button 
                type="button" 
                className='modal__close'
                onClick={handleClose}
                >
                    X
            </button>
        </motion.div>
    );
};

export default Modal;