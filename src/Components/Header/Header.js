import React from 'react';
import { Link } from 'react-router-dom';
import Video_Icon from '../../images/video.png';
import '../Css/Header.css';

const Header = () => {
    return (
        <section className="header">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3 text-center">
                        <Link to="/series">
                            <div className="content">
                                <img className="img-fluid" style={{width: '120px'}} src={Video_Icon} alt="" />
                                <div className="title">
                                    <h3>Series</h3>
                                </div>
                            </div>
                        </Link>

                        <p className="pt-2">Popular Series</p>
                    </div>
                    
                    <div className="col-md-3 text-center">
                        <Link to="/movies">
                            <div className="content">
                                <img className="img-fluid" style={{width: '120px'}} src={Video_Icon} alt="" />
                                <div className="title">
                                    <h3>Movies</h3>
                                </div>
                            </div>
                        </Link>
                        <p className="pt-2">Popular Movies</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;