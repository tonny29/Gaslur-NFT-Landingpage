import React from 'react';
import imageSix from '../../image/six.png';
import imageSeven from '../../image/seven.png';
import imageEight from '../../image/eight.png';
import imageNine from '../../image/nine.png';
import imageTen from '../../image/ten.png';
import imageEleven from '../../image/eleven.png';
import imageTwelve from '../../image/twelve.png';
import imageThirteen from '../../image/thriteen.png';
import category from '../../image/Icon.png';
import dropdown from '../../image/dropdown.png';
import filter from '../../image/Iconthree.png';
import './Discover.css';

const Discover = () => {
    return (
        <div>
            <div className='discover-part'>
                <div><h1>Discover</h1></div>
                <div className='discover-nav-item'>
                    <p><img src={category} alt=""/> {' '}Category</p>
                    <p>Cheapest{' '}<img src={dropdown} alt="" /></p>
                    <p>Newest{' '}<img src={dropdown} alt="" /></p>
                    <button><img src={filter} alt="" />{' '}Filter</button>
                </div>
            </div>
            <div class="card-group card-second-group">
                <div class="card">
                    <img src={imageSix} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5>Lorem Ipsum</h5>
                        <h5>1.20 Weth</h5>
                    </div>
                    <div class="card-footer">
                        <small>Ends in 01.34.45</small>
                        <button>Bid</button>
                    </div>
                </div>
                <div class="card">
                    <img src={imageSeven} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5>Dolor sit amet</h5>
                        <h5>0.21 Weth</h5>
                    </div>
                    <div class="card-footer">
                        <small><span style={{color:"#BCBCBC"}}>Ends in</span> 01.34.45</small>
                        <button>Bid</button>
                    </div>
                </div>
                <div class="card">
                    <img src={imageEight} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5>Dignissim curabitu..</h5>
                        <h5>0.01 Weth</h5>
                    </div>
                    <div class="card-footer">
                        <small><span style={{color:"#BCBCBC"}}>Ends in</span> 56.44.45</small>
                        <button>Bid</button>
                    </div>
                </div>
                <div class="card">
                    <img src={imageNine} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5>Amet pellentesq..</h5>
                        <h5>0.55 Weth</h5>
                    </div>
                    <div class="card-footer">
                        <small><span style={{color:"#BCBCBC"}}>Ends in</span> 01.34.45</small>
                        <button>Bid</button>
                    </div>
                </div>
            </div>
            <div class="card-group thrid-card-group">
                <div class="card">
                    <img src={imageTen} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5>Lorem Ipsum</h5>
                        <h5>1.20 Weth</h5>
                    </div>
                    <div class="card-footer">
                        <small><span style={{color:"#BCBCBC"}}>Ends in</span> 01.34.45</small>
                        <button>Bid</button>
                    </div>
                </div>
                <div class="card">
                    <img src={imageEleven} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5>Dolor sit amet</h5>
                        <h5>0.21 Weth</h5>
                    </div>
                    <div class="card-footer">
                        <small><span style={{color:"#BCBCBC"}}>Ends in </span>01.34.45</small>
                        <button>Bid</button>
                    </div>
                </div>
                <div class="card">
                    <img src={imageTwelve} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5>Dignissim curabitu..</h5>
                        <h5>0.01 Weth</h5>
                    </div>
                    <div class="card-footer">
                        <small><span style={{color:"#BCBCBC"}}>Ends in</span> 56.44.45</small>
                        <button>Bid</button>
                    </div>
                </div>
                <div class="card">
                    <img src={imageThirteen} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5>Amet pellentesq..</h5>
                        <h5>0.55 Weth</h5>
                    </div>
                    <div class="card-footer">
                        <small><span style={{color:"#BCBCBC"}}>Ends in</span> 01.34.45</small>
                        <button>Bid</button>
                    </div>
                </div>
            </div>

            <div className='load-more-button'>
                <button>LOAD MORE</button>
            </div>
        </div>
    );
};

export default Discover;