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
              {/* <button className='nav-p' id='nav-p-log'>
              </button>

              <button className='nav-p' id='nav-p-log'>
              </button>

              <button className='nav-p' id='nav-p-log'>
              </button> */}

            </div>
            :


            <button className='nav-p' id='nav-p-log'>Log In</button>
          }

        </>
        <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
      </nav>

      : props.type === "edit" ?
        <nav className='navbar'>
          <>
            <div className='link-con'>

              {props.userId ?
                <Link id='profile-link' to={"/" + props.username}>{props.username}</Link>
                // <p className='nav-p' id='nav-p-user'>
                // </p>
                :
                null
              }

              {props.userId ?
                <Link id='logout-link' onClick={toggleModal}>Log Out</Link>
                :
                <Link id='login-link' to='/login'>Log In</Link>
              }
              {/* <p className='nav-p' id='nav-p-log'>
              </p> */}

            </div>
          </>
          <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
        </nav>

        :
        <nav className='navbar'>
          <>
            <div className='link-con'>

              {props.userId ?
                <Link id='profile-link' to={"/" + props.username}>{props.username}</Link>
                // <p className='nav-p' id='nav-p-user'>
                // </p>
                :
                null
              }

              {props.userId ?
                <Link id='logout-link' onClick={toggleModal}>Log Out</Link>
                :
                <Link id='login-link' to='/login'>Log In</Link>
              }
              {/* <p className='nav-p' id='nav-p-log'>
              </p> */}

            </div>
          </>
          <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
        </nav>
  );
};

export default Navbar