import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import fakeData from '../FakeData/FakeData';
import Footer from '../Footer/Footer';
import MainMenu from '../MainMenu/MainMenu';
import Movie from './Movie';

const Movies = () => {
    const [state, setState] =useState([]);
    const moviesData = fakeData.entries.filter(m => m.releaseYear >= 2010 && m.programType == 'movie');
    const items = 21;
    const myMovies = moviesData.slice(0, items);

    useEffect(() => {
        setState(myMovies);
    }, [])
   
    console.log(state);
    return (
        <section>
            <MainMenu />
            <div className="container py-5">
                <div className="row" style={{minHeight: '70vh'}}>
                {
                    state.length === 0 && 
                    <Spinner>
                        <h2 >Loading...</h2>
                    </Spinner>
                }
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