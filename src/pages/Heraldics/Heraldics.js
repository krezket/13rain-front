import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer';
import hchet from '../../assets/chet.jpg'
import './style.css';

function Heraldics(props) {
  // console.log("heraldics:", props)
  return (
    <div>
      <Header />
      <Navbar userId={props.userId}
        username={props.username}
        setUserId={props.setUserId}
        setEmail={props.setEmail}
        setUsername={props.setUsername}
        setToken={props.setToken} />
      <main className='main-herald'>
        <p>Heraldics</p>
        <img id='chet' src={hchet} alt='heraldic'></img>
      </main>
      <Footer />
    </div>
  )
}

export default Heraldics