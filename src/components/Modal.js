import React from 'react';

const Modal = ({ image, eventTitle, city, state, date, promoters }) => {

    return (
        <div className="modal">
            <img src={image} alt="band/singer"></img>
            <div className="textModal">
                <h3>{eventTitle}</h3>
                <h5>in {city}, {state} on {date}</h5>
                <p>{promoters && promoters.slice(0, 100)}</p>
                <button a href="www.ticketmaster.com">BUY TICKETS</button>
            </div>
        </div>
    )
}

export default Modal;