import React from 'react';
import imageTwo from '../../image/two.png';
import imageThree from '../../image/three.png';
import imageFour from '../../image/four.png';
import imageFive from '../../image/five.png';
import './Auctions.css';

const auctions = () => {
    return (
        <div>
            <div className='auctions'>
                <h1>HOT AUCTIONS</h1>
                <p>View all</p>
            </div>

            <div class="card-group">
                <div class="card">
                    <img src={imageTwo} class="card-img-top" alt="..." />
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
                    <img src={imageThree} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5>Dolor sit amet</h5>
                        <h5>0.21 Weth</h5>
                    </div>
                    <div class="card-footer">
                        <small>Ends in 01.34.45</small>
                        <button>Bid</button>
                    </div>
                </div>
                <div class="card">
                    <img src={imageFour} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5>Dignissim curabitu..</h5>
                        <h5>0.01 Weth</h5>
                    </div>
                    <div class="card-footer">
                        <small>Ends in 56.44.45</small>
                        <button>Bid</button>
                    </div>
                </div>
                <div class="card">
                    <img src={imageFive} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5>Amet pellentesq..</h5>
                        <h5>0.55 Weth</h5>
                    </div>
                    <div class="card-footer">
                       <small>Ends in 01.34.45</small>
                       <button>Bid</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default auctions; 