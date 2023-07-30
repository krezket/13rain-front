import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../../components/LogOutModal'
import './style.css'

function Navbar(props) {
  // console.log("navbar props:", props)
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  };

  // const toggleEdit = () => {
  //   window.location.pathname = `${props.username}/edit`;
  // };

  const logout = () => {
    setModal(!modal)
    props.setUserId(null);
    props.setUsername("");
    props.setToken("");
    props.setEmail("");
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("userId");
    window.sessionStorage.removeItem("UserData");
    navigate("/home");
    window.location.reload(false);
  };

  return (

    props.type === "profile" ?

      <nav className='navbar'>
        <>
          {props.userId ?
            <div className='link-con'>
              <Link id='edit-link' to={"/edit"}>Edit Profile</Link>
              <Link id='create-link' to={"/create"}>Create a Page</Link>
              <Link id='logout-link' onClick={toggleModal}>Log Out</Link>
            </div>
            :
            <div className='link-con-loggedout'>
              <Link className='nav-p' id='nav-p-log'>Log In</Link>
            </div>
          }
        </>
        <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
      </nav>

      : props.type === "edit" ?
        <nav className='navbar'>
          <>
            {props.userId ?
              <div className='link-con'>
                <Link id='profile-link' to={"/" + props.username}>{props.username}</Link>
                <Link id='logout-link' onClick={toggleModal}>Log Out</Link>
              </div>
              :
              <div className='link-con-loggedout'>
                <Link id='login-link' to='/login'>Log In</Link>
              </div>
            }
          </>
          <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
        </nav>

        :
        <nav className='navbar'>
          <>
            {props.userId ?
              <div className='link-con'>
                <Link id='profile-link' to={"/" + props.username}>{props.username}</Link>
                <Link id='logout-link' onClick={toggleModal}>Log Out</Link>
              </div>
              :
              <div className='link-con-loggedout'>
                <Link id='login-link' to='/login'>Log In</Link>
              </div>
            }
          </>
          <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
        </nav>
  );
};

export default Navbar