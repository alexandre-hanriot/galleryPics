import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import '../index.scss';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const allowTypes = ['image/png', 'image/jpeg'];

    const handleChange = (event) => {
        let selectedImage = event.target.files[0];
        if (selectedImage && allowTypes.includes(selectedImage.type)) {
            setFile(selectedImage);
            setError('');
        }
        else {
            setFile(null);
            setError('please select an image file like png or jpeg');
        } 
    };

    return (
        <form className='form'>
            <label>
                <input 
                    type='file'
                    className='form__input'
                    onChange={handleChange}
                />
                <span className='form__add'>+</span>
            </label>
            
            <div className='form__output'>
                {error && (
                    <div className='error'>
                        {error}
                    </div>
                )}
                {file && (
                    <>
                        <div className='file'>
                            {file.name}
                        </div>
                        <div className='progress-bar__container'>
                            <ProgressBar file={file} setFile={setFile} />
                        </div>
                    </>
                )}
            </div>
        </form>
    );
};

export default UploadForm;