import React from 'react';
// import API from "../../utils/API";
// import API from "../../utils/API";
import Header from '../../components/Header';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer';
import './style.css'


function Profile(props) {
  console.log('profile props:',props)
  
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
        <h1 className='profile-username'>{props.username}</h1>
        <h2 className='profile-fullname'>{props.fullName}</h2>
        <h2 className='profile-email'>{props.email}</h2>
        {!props.pages ?
        <h2 className='profile-pages'>Total Pages: 0</h2>
        :
        <h2 className='profile-pages'>Total Pages: {props.pages.length}</h2>
        }
      </main>
      <Footer/>
    </div>
  )
}

export default Profile