import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../components/LogOutModal';

// import dragonLeft from '../../assets/dragons/reddragon1.gif'
// import dragonRight from '../../assets/dragons/reddragon2.gif'
import './style.css';


export default function Header(props) {
    // console.log(props)
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    };

    const logout = () => {
        setModal(!modal)
        props.setUserId(0);
        props.setUsername("");
        props.setToken("");
        props.setEmail("");
        window.sessionStorage.removeItem("token");
        window.sessionStorage.removeItem("userId");
        window.sessionStorage.removeItem("UserData");
        navigate("/home");
        window.location.reload(false);
    };

    let ID = window.sessionStorage.getItem("userId")

    return (
        <>
            {props.type === "profile" ?
                <header className='header'>
                    <Link className='home-link' to='/home'>
                        <h1 className='title'>𝐾𝑅𝐸𝑍𝐾𝐸𝑇</h1>
                    </Link>
                    <>
                        {ID?
                            <>
                                <Link id='edit-link' to={"/edit"}>Edit Profile</Link>
                                <Link id='create-link' to={"/create"}>Create a Page</Link>
                                <Link id='logout-link' onClick={toggleModal}>Log Out</Link>
                            </>

                            :
                            <>
                                <Link className='nav-p' to='/login'>Log In</Link>
                            </>
                        }
                    </>
                    <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
                </header>

                : props.type === "otherProfile" ?
                    <header className='header'>
                        <Link className='home-link' to='/home'>
                            <h1 className='title'>𝐾𝑅𝐸𝑍𝐾𝐸𝑇</h1>
                        </Link>
                        <>
                            {ID?

                                <>
                                    <Link id='logout-link' onClick={toggleModal}>Log Out</Link>
                                </>

                                :
                                <>
                                    <Link className='nav-p' id='nav-p-log' to='/login'>Log In</Link>
                                </>
                            }
                        </>
                        <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
                    </header>

                    : props.type === "edit" ?
                        <header className='header'>
                            <Link className='home-link' to='/home'>
                                <h1 className='title'>𝐾𝑅𝐸𝑍𝐾𝐸𝑇</h1>
                            </Link>
                            <>
                                {ID?
                                    <>
                                        <Link id='profile-link' to={"/" + props.username}>{props.username}</Link>
                                        <Link id='logout-link' onClick={toggleModal}>Log Out</Link>
                                    </>
                                    :
                                    <>
                                        <Link id='login-link' to='/login'>Log In</Link>
                                    </>
                                }
                            </>
                            <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
                        </header>

                        : props.type === "page" ?
                            <header className='header'>
                                <Link className='home-link' to='/home'>
                                    <h1 className='title'>𝐾𝑅𝐸𝑍𝐾𝐸𝑇</h1>
                                </Link>
                                <>
                                    {ID?
                                        <>
                                            <Link id='profile-link' to={"/" + props.username}>{props.username}</Link>
                                            <Link id='logout-link' onClick={toggleModal}>Log Out</Link>
                                        </>
                                        :
                                        <>
                                            <Link id='login-link' to='/login'>Log In</Link>
                                        </>
                                    }
                                </>
                                <Modal modal={modal} logout={logout} toggleModal={toggleModal} />
                            </header>

                            :
                            <header className='header'>
                                <Link className='home-link' to='/home'>
                                    <h1 className='title'>𝐾𝑅𝐸𝑍𝐾𝐸𝑇</h1>
                                </Link>
                                <>
                                    {!ID === '' ?
                                        <>
                                            <Link id='profile-link' to={"/" + props.username}>{props.username}</Link>
                                            <Link id='logout-link' onClick={toggleModal}>Log Out</Link>
                                        </>
                                        :
                                        <>
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