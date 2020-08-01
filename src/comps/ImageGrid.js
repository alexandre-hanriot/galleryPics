import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImage }) => {
    const { documents } = useFirestore('images');

    return (
        <div className='image-grid'>
            {documents && (
                documents.map(doc => (
                    <motion.div 
                        className='image-grid__wrap' 
                        key={doc.id}
                        onClick={() => setSelectedImage(doc.url)}
                        whileHover={{ opacity: 1 }}
                        layout
                    >
                        <motion.img className='image-grid__image' src={doc.url} alt='uploaded pic' 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        />
                    </motion.div>
                ))
            )}
        </div>
    );
};

export default ImageGrid;
