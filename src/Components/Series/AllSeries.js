import React, { useEffect, useState } from 'react';
import fakeData from '../FakeData/FakeData.json';
import Footer from '../Footer/Footer';
import MainMenu from '../MainMenu/MainMenu';
import Series from './Series';

const AllSeries = () => {
    const [infos, setInfos] = useState([]);
    const seriesData = fakeData.entries.filter(s => s.releaseYear >= 2010 && s.programType == 'series');

    useEffect(() => {
        setInfos(seriesData);
    },[])

    return (
        <section>
        <MainMenu />
        <div className="container py-5">
            <div className="row">
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