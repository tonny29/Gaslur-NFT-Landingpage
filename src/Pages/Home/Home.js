import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import imageOne from '../../image/one.png';
import profile from '../../image/profile.png';
import './Home.css';

const Home = () => {
    return (
        <div className='header-style'>
            <div>
                <h2>Discover, collect, <br /> and charity in extraordinary NFT marketplace</h2>
                <p>In aenean posuere lorem risus nec. Tempor tincidunt <br /> aenean purus vestibulum nibh mi <br /> venenatis</p>
                <button className='buttons'>Explore</button>
                <button>CREATE</button>
            </div>

            <div>
                <div className='header-image'>
                    <div className="img-back-style">
                        <img src={imageOne} alt="" />
                        <div className='image-text '>
                            <div className='home-image'>
                                <div>
                                    <img src={profile} alt="" />
                                </div>
                                <div style={{
                                    paddingLeft:"8px"
                                }}>
                                    <h4>Laura</h4>
                                    <p>0.21 weth</p>
                                </div>
                            </div>
                            <div className='icon-area'>
                                <h4>WE ARE HERE</h4>
                                {/* <FontAwesomeIcon icon="fa-regular fa-heart" /> */}
                                <p><FontAwesomeIcon icon={faHeart} />25</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;