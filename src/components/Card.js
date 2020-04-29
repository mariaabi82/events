import React from 'react';

const Card = ({ eventTitle, promoters, image }) => {

    return (
        <div className="card">
            <img src={image} alt="band/singer"></img>
            <div className="text">
                <h2>{eventTitle}</h2>
                <p>{promoters && promoters.slice(0, 75)} ...<a href="www.ticketmaster.com">Read more</a></p>
                
            </div>
        </div>
    )
}

export default Card;