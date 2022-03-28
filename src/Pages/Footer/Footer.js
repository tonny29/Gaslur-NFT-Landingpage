import React from 'react';
import { Col } from 'react-bootstrap';
import instagram from '../../image/Instagram.png';
import facebook from '../../image/Facebook.png';
import twitter from '../../image/Twitter.png';
// import {  } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-area'>
            <div className="footer-style row">
            <Col lg={4}>
                <h3>Etiam et id tincidunt <br /> facibus mollis a <br /> sociic pretium <br />fermentum quis <br /> magna faucibus <br /> lacus.</h3>
            </Col>
            <Col lg={3}>
                <h4>Marketplace</h4>
                <p>Home</p>
                <p>Activity</p>
                <p>Discover</p>
                <p>Learn more</p>
            </Col>
            <Col lg={3}>
                <h4>Company</h4>
                <p>About us</p>
                <p>Services</p>
                <p>Portfolio</p>
            </Col>
            <Col lg={2}>
            <h4>Contact</h4>
                <p>Fcaebook</p>
                <p>Twitter</p>
                <p>Email</p>
            </Col>
        </div>
            <hr />
            <div className='footer-part-second'>
                <div className='icon-style'>
                    <p><img src={instagram} alt="" /></p>
                    <p><img src={facebook} alt="" /></p>
                    <p><img src={twitter} alt="" /></p>
                </div>
                <div>
                    <small>Copyright2022</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;