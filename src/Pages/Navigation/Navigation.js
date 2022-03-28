import React from 'react';
import './Navigation.css'; 
const Navigation = () => {
    return (
        <div className='nav-style' lg={4}>
            <div className='nav-text'>
                <p>GASLUR</p>
            </div>
            <div className='link-style'>
                <a href="">HOME</a>
                <a href="">PROFILE</a>
                <a href="">ACTIVITY</a>
                <a href="">HOW IT WORKS</a>
            </div>
            <div className='sing-in'>
                <button>CREACTE</button>
                <p>SIGN IN</p>
            </div>
        </div>
    );
};

export default Navigation;