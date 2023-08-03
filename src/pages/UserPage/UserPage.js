import React from 'react';
import { Link } from 'react-router-dom'
import DayJS from 'react-dayjs';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer';
import './style.css'


function UserPage(props) {
  console.log("UserPage Props:", props)

  return (
    <>
      {/* <Header /> */}
      <>
        <Navbar
          type={props.type}
          userId={props.userId}
          setUserId={props.setUserId}
          setEmail={props.setEmail}
          setUsername={props.setUsername}
          setToken={props.setToken}
        />
      </>
      <main className='page-main'>

        <div className='title-div'>
          <h1 className='page-title'>{props.title}</h1>
        </div>

        <div className='username-div'>
          <h3 className='page-username'> By: <Link to={"/" + props.username} id='user-link'>{props.username}</Link></h3>
        </div>
        
        <p className='page-text'>{props.text}</p>

        <div className='date-div'>
          <p className='date-created'><DayJS className="dayjs" format="M/D/YYYY h:mm a">{props.createdAt}</DayJS></p>
        </div>

      </main>
      <Footer />
    </>
  )
}

export default UserPage