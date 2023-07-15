import React from 'react';
import { Link } from 'react-router-dom'
// import API from "../../utils/API";
import DayJS from 'react-dayjs';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer';
import './style.css'


function UserPage(props) {
    console.log("UserPage Props:", props)

  return (
    <div>
        <Header />
        <nav>
      <Navbar
        type={props.type} 
        userId={props.userId}
        setUserId={props.setUserId} 
        setEmail={props.setEmail} 
        setUsername={props.setUsername} 
        setToken={props.setToken}
      />
    </nav>
    <main className='pr-main'>
      <h1 className='page-username'> By: <Link id='user-link'>{props.username}</Link></h1>
      <h2 className='page-title'>{props.title}</h2>
      <h2 className='page-text'>{props.text}</h2>
      <h2 className='date-created'>Created On: <DayJS className="dayjs" format="M/D/YYYY h:mm a">{props.createdAt}</DayJS></h2>
      {/* <h2 className='page-pages'>Pages: {pages.length}</h2> */}
    </main>
        <Footer />
    </div>
  )
}

export default UserPage