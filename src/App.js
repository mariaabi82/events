import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Modal from './components/Modal';

function App() {


  const [event, setEvent] = useState([]);
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);

  console.log(event);

  useEffect(() => {
    fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=XKAKPPw6lIQRm9Hc5n3FLDW7D7fqhjiz')
      .then(res => res.json())
      .then(data => setEvent(data._embedded.events))
  }, []);

  const handleChange = e => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }


  const searchEvents = () => {
    fetch(`https://app.ticketmaster.com/discovery/v2/events?keyword=${search}&apikey=XKAKPPw6lIQRm9Hc5n3FLDW7D7fqhjiz`)
      .then(res => res.json())
      .then(data => setEvent(data._embedded.events));
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(search)
    searchEvents()
  }

  useEffect(searchEvents, []);

  // Mostrar un mensaje de error si no se encontró la búsqueda

  const handleClick = chosenEvent => {
    console.log("hiciste click en " + chosenEvent.title)
    handleClickModal()
  }

  const handleClickModal = () => {
    setOpenModal(!openModal)
  }





  console.log(setOpenModal)

  return (
    //<>
      //{openModal &&
      
        //<Modal eventTitle={e.name} image={e.images[0].url} city={venues[0].city.name} state={venues[0].state.name} date={dates.start.localDates} promoters={e.pleaseNote} onClick={handleClickModal} />
      //}
      <div className="App">
        <header>
          <h1>THE BEST EVENTS OF 2020</h1>
        </header>
        <nav>
          <div className="Home">
            <p>HOME</p>
          </div>
          <div className="cantMiss">
            <p>ALL EVENTS</p>
          </div>
          <div className="byDate">
            <p>SEARCH BY DATE</p>
          </div>
          <div className="accesibility">
            <p>ACCESIBLE VENUES</p>
          </div>
          <div className="socialMedia">
            <a href="https://twitter.com/ticketmaster"><i className="fa fa-twitter-square" id="tw" alt="twitter icon"></i></a>
            <a href="https://www.instagram.com/ticketmaster/?hl=en"><i className="fa fa-instagram" id="ig" alt="instagram icon"></i></a>
            <a href="https://www.facebook.com/Ticketmaster"><i className="fa fa-facebook-square" id="fb" alt="facebook icon" ></i></a>
          </div>
          <form onSubmit={handleSubmit}>
            <input className="search" type="text" placeholder="Search by event name, location, etc" onChange={handleChange} />
            <input className="submit" type="submit" />
          </form>
        </nav>


        <div className="wrapper">

          {event.map((e, i) => {
            return <Card key={i} eventTitle={e.name} promoters={e.pleaseNote} image={e.images[0].url} onClick={handleClickModal} />
            // {openModal && <div>Hola, soy un modal<div>}

          })

          }


        </div>

      </div>

    //</>
  );

}

export default App;
