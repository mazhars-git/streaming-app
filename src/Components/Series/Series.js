import React from 'react';

const Series = (props) => {
    const {title, images} = props.sInfo;
    return (
        <div className="col-md-3 align-self-center pb-3">
            <img className="img-fluid" src={images["Poster Art"].url} alt="" />
            <h6 className="text-center">{title}</h6>
        </div>
    );
};

export default Series;