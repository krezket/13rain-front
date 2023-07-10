import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import DayJS from 'react-dayjs';
import Modal from '../../components/LogOutModal'
import './style.css'

function Navbar(props) {
  // console.log("navbar props:", props)

  const navigate = useNavigate()
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  };
  const logout = () => {
      setModal(!modal)
      props.setUserId(null);
      props.setUsername("");
      props.setToken("");
      props.setEmail("");
      localStorage.removeItem("token");
      window.sessionStorage.removeItem("userId");
      localStorage.removeItem("pageData");
      navigate("/home");
      window.location.reload(false);
  };

  return (
    props.type !== "profile" ?

      <div className='navbar'>
        <div id='navbar'>
          <div id='nav-links'>
            { props.userId ? <p className='nav-p' id='nav-p-user'> <Link to={"/" + props.username} id='username'>{props.username}</Link></p> : null }
            <p className='nav-p' id='nav-p-log'>
              { props.userId ? <Link id='logout-btn' onClick={toggleModal}>Log Out</Link> : <Link id='login-link' to='/login'>Log In</Link> }
            </p>
          </div>
        </div >
        <Modal modal={modal} logout={logout} toggleModal={toggleModal}/>
        {/* <marquee className='currenttime'> Today is <DayJS format="dddd MMMM D, YYYY"></DayJS></marquee> */}
      </div>

      :
      <div className='navbar'>
        <div id='navbar'>
        {/* <h1 className='currenttime'> Today is <DayJS format="dddd MMMM DD, YYYY"></DayJS></h1> */}
          <p className='nav-p' id='nav-p-log'>
          { props.userId ? <Link id='logout-btn' onClick={toggleModal}>Log Out</Link> : <Link id='login-link' to='/login'>Log In</Link> }
          </p>
        </div >
        <Modal modal={modal} logout={logout} toggleModal={toggleModal}/>
      </div>
  ); 
};

export default Navbar