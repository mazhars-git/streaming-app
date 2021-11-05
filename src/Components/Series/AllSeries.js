import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import fakeData from '../FakeData/FakeData.json';
import Footer from '../Footer/Footer';
import MainMenu from '../MainMenu/MainMenu';
import Series from './Series';

const AllSeries = () => {
    const [infos, setInfos] = useState([]);
    const seriesData = fakeData.entries.filter(s => s.releaseYear >= 2010 && s.programType == 'series');
    const items = 21;
    const mySeries = seriesData.slice(0, items);


    useEffect(() => {
        setInfos(mySeries);
    },[])

    return (
        <section>
        <MainMenu />
        
        <div className="container py-5">
            <div className="row" style={{minHeight: '70vh'}}>
                {
                    infos.length === 0 && 
                    <Spinner>
                        <h2 >Loading...</h2>
                    </Spinner>
                }
                {
                    infos.map(data => <Series sInfo={data}></Series>)
                }  
            </div>
        </div>
        <Footer />
    </section>
    );
};

export default AllSeries;