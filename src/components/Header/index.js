import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../components/LogOutModal';

import dragonLeft from '../../assets/dragons/reddragon1.gif'
import dragonRight from '../../assets/dragons/reddragon2.gif'
import './style.css';


export default function Header(props) {
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
        <>
            {props.type === "profile" ?
                <header className='header'>
                    <>
                        {props.userId ?

                            <>
                                <Link className='home-link' to='/home'>
                                    <h1 className='title'>▌│𝐾𝑅𝐸𝑍𝐾𝐸𝑇 ║▌║▌║█│▌</h1>
                                    {/* <h1 className='title'>𝐾𝑅𝐸𝑍𝐾𝐸𝑇</h1> */}
                                </Link>
                                <Link id='edit-link' to={"/edit"}>Edit Profile</Link>
                                <Link id='create-link' to={"/create"}>Create a Page</Link>
                                <Link id='logout-link' onClick={toggleModal}>Log Out</Link>
                            </>

                            :
                            <>
                                <Link className='home-link' to='/home'>
                                    <h1 className='title'>▌│𝐾𝑅𝐸𝑍𝐾𝐸𝑇 ║▌║▌║█│▌</h1>
                                    {/* <h1 className='title'>𝐾𝑅𝐸𝑍𝐾𝐸𝑇</h1> */}
                                </Link>
                                <Link className='nav-p' id='nav-p-log'>Log In</Link>
                            </>
                        }
                    </>
                    <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
                </header>

                : props.type === "edit" ?
                    <header className='header'>
                        <>
                            {props.userId ?
                                <>
                                    <Link className='home-link' to='/home'>
                                        <h1 className='title'>▌│𝐾𝑅𝐸𝑍𝐾𝐸𝑇 ║▌║▌║█│▌</h1>
                                        {/* <h1 className='title'>𝐾𝑅𝐸𝑍𝐾𝐸𝑇</h1> */}
                                    </Link>
                                    <Link id='profile-link' to={"/" + props.username}>{props.username}</Link>
                                    <Link id='logout-link' onClick={toggleModal}>Log Out</Link>
                                </>
                                :
                                <>
                                    <Link className='home-link' to='/home'>
                                        <h1 className='title'>▌│𝐾𝑅𝐸𝑍𝐾𝐸𝑇 ║▌║▌║█│▌</h1>
                                        {/* <h1 className='title'>𝐾𝑅𝐸𝑍𝐾𝐸𝑇</h1> */}
                                    </Link>
                                    <Link id='login-link' to='/login'>Log In</Link>
                                </>
                            }
                        </>
                        <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
                    </header>

                    : props.type === "page" ?
                        <header className='header'>
                            <>
                                {props.userId ?
                                    <>
                                        <Link className='home-link' to='/home'>
                                            <h1 className='title'>▌│𝐾𝑅𝐸𝑍𝐾𝐸𝑇 ║▌║▌║█│▌</h1>
                                            {/* <h1 className='title'>𝐾𝑅𝐸𝑍𝐾𝐸𝑇</h1> */}
                                        </Link>
                                        <Link id='profile-link' to={"/" + props.username}>{props.username}</Link>
                                        <Link id='logout-link' onClick={toggleModal}>Log Out</Link>
                                    </>
                                    :
                                    <>
                                        <Link className='home-link' to='/home'>
                                            <h1 className='title'>▌│𝐾𝑅𝐸𝑍𝐾𝐸𝑇 ║▌║▌║█│▌</h1>
                                            {/* <h1 className='title'>𝐾𝑅𝐸𝑍𝐾𝐸𝑇</h1> */}
                                        </Link>
                                        <Link id='login-link' to='/login'>Log In</Link>
                                    </>
                                }
                            </>
                            <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
                        </header>

                        :
                        <header className='header'>
                            <>
                                {props.userId ?
                                    <>
                                        <Link className='home-link' to='/home'>
                                            <h1 className='title'>▌│𝐾𝑅𝐸𝑍𝐾𝐸𝑇 ║▌║▌║█│▌</h1>
                                            {/* <h1 className='title'>𝐾𝑅𝐸𝑍𝐾𝐸𝑇</h1> */}
                                        </Link>
                                        <Link id='profile-link' to={"/" + props.username}>{props.username}</Link>
                                        <Link id='logout-link' onClick={toggleModal}>Log Out</Link>
                                    </>
                                    :
                                    <>
                                        <Link className='home-link' to='/home'>
                                            <h1 className='title'>▌│𝐾𝑅𝐸𝑍𝐾𝐸𝑇 ║▌║▌║█│▌</h1>
                                            {/* <h1 className='title'>𝐾𝑅𝐸𝑍𝐾𝐸𝑇</h1> */}
                                        </Link>
                                        <Link id='login-link' to='/login'>Log In</Link>
                                    </>
                                }
                            </>
                            <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
                        </header>
            }
        </>
    );
};