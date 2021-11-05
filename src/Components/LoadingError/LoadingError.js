import React from 'react';
import Footer from '../Footer/Footer';
import MainMenu from '../MainMenu/MainMenu';

const LoadingError = () => {
    return (
        <container>
            <MainMenu />
            <div className="container" style={{minHeight: '80vh'}}>
                <h1 className="py-5">Oops, something went wrong...</h1>
            </div>
            <Footer />            
        </container>
    );
};

export default LoadingError;