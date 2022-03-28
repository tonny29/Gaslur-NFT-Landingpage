import React from 'react';
import security from '../../image/security.png';
import BoxIcon from '../../image/Box.png';
import imageFolder from '../../image/imagefolder.png';
import Booster from '../../image/boost.png';
import './Getstarted.css';

const Getstarted = () => {
    return (
        <div>
            <div className='getting-started-text'>
                <h1>Getting Started</h1>
                <p>Eu, molestie commondo, enim pellentesque turpis intenger sagittis</p>
            </div>
            <div className='background-shadow'>
            <div className='get-image-style'>
                <div className='image-border-area'>
                    <img src={security} alt="" />
                </div>
                <div className='image-border-area'>
                    <img src={BoxIcon} alt="" />
                </div>
                <div className='image-border-area'>
                    <img src={imageFolder} alt="" />
                </div>
                <div className='image-border-area'>
                    <img src={Booster} alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Getstarted;