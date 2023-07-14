import React from 'react';
import { Link } from 'react-router-dom'
// import API from "../../utils/API";
import DayJS from 'react-dayjs';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer';


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
      <h1 className='profile-username'> By: <Link>{props.username}</Link></h1>
      <h2 className='profile-username'>{props.title}{props.text}</h2>
      <h2 className='profile-fullname'>{props.text}</h2>
      <h2 className='profile-email'>Created On: <DayJS format="M/D/YYYY h:mm a">{props.createdAt}</DayJS></h2>
      {/* <h2 className='profile-pages'>Pages: {pages.length}</h2> */}
    </main>
        <Footer />
    </div>
  )
}

export default UserPage