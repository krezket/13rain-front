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

  const toggleEdit = () => {
    window.location.pathname = `${props.username}/edit`;
  };

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

      <div className='navbar'>
        <div id='navbar'>

          {props.userId ?
            <div className='edit-out'>

              <p className='nav-p' id='nav-p-log'>
                <Link id='logout-btn' onClick={toggleEdit}>Edit Profile</Link>
              </p>

              <p className='nav-p' id='nav-p-log'>
                <Link id='logout-btn' to={"/create"}>Create a Page</Link>
              </p>

              <p className='nav-p' id='nav-p-log'>
                <Link id='logout-btn' onClick={toggleModal}>Log Out</Link>
              </p>

            </div>
            :
            <p className='nav-p' id='nav-p-log'>Log In</p>
          }

        </div >
        <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
      </div>

      : props.type === "edit" ?
        <div className='navbar'>
          <div id='navbar'>
            <div id='nav-links'>

              {props.userId ?
                <p className='nav-p' id='nav-p-user'>
                  <Link to={"/" + props.username} id='username'>{props.username}</Link>
                </p>
                :
                null
              }

              <p className='nav-p' id='nav-p-log'>
                {props.userId ?
                  <Link id='logout-btn' onClick={toggleModal}>Log Out</Link>
                  :
                  <Link id='login-link' to='/login'>Log In</Link>
                }
              </p>

            </div>
          </div >
          <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
        </div>

        :
        <div className='navbar'>
          <div id='navbar'>
            <div id='nav-links'>

              {props.userId ?
                <p className='nav-p' id='nav-p-user'>
                  <Link to={"/" + props.username} id='username'>{props.username}</Link>
                </p>
                :
                null
              }

              <p className='nav-p' id='nav-p-log'>
                {props.userId ?
                  <Link id='logout-btn' onClick={toggleModal}>Log Out</Link>
                  :
                  <Link id='login-link' to='/login'>Log In</Link>
                }
              </p>

            </div>
          </div >
          <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
        </div>
  );
};

export default Navbar