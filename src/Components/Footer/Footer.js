import React from 'react';
import '../Css/Footer.css';
import apple from '../../images/apple.png';
import google from '../../images/Google.png';
import microsoft from '../../images/misoft.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className="footer-area">
            <div className="container footer">
                <ul className="d-flex">
                    <li><a href="#">Home | </a></li>
                    <li><a href="#"> Terms and Conditions | </a></li>
                    <li><a href="#"> Privacy Policy | </a></li>
                    <li><a href="#"> Collection Statement | </a></li>
                    <li><a href="#"> Manage Account</a></li>
                </ul>
                <p>Copyright &copy; 2016 Demo streaming all rights reserved.</p>

                <div className="row">
                    <div className="col-md-6">
                        <ul className="d-flex social-icon">
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faCameraRetro} /></a></li>
                        </ul>
                    </div>
                    <div className="col-md-6"> 
                        <ul className="d-flex justify-content-end ml-2">
                            <li><a href="#"><img style={{width: '90px', border: '1px solid #fff', borderRadius: '5px'}} src={apple} alt="" /></a></li>
                            <li><a href="#"><img style={{width: '95px', border: '1px solid #fff', borderRadius: '5px'}} src={google} alt="" /></a></li>
                            <li><a href="#"><img style={{width: '80px'}} src={microsoft} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;