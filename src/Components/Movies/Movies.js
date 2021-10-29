import React, { useEffect, useState } from 'react';
import fakeData from '../FakeData/FakeData';
import Footer from '../Footer/Footer';
import MainMenu from '../MainMenu/MainMenu';
import Movie from './Movie';

const Movies = () => {
    const [state, setState] =useState([]);
    const moviesData = fakeData.entries.filter(m => m.releaseYear >= 2010 && m.programType == 'movie');

    useEffect(() => {
        setState(moviesData);
    }, [])
   
    console.log(state);
    return (
        <section>
            <MainMenu />
            <div className="container py-5">
                <div className="row">
                    {
                        state.map(data => <Movie movie={data}></Movie>)
                    }  
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Movies;