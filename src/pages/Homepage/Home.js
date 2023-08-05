import React from 'react'
import Header from "../../components/Header";
import Navbar from '../../components/Navbar/navbar';
import FrontPage from '../../components/FrontPage/FrontPage';
import Footer from '../../components/Footer/';
import './style.css';

export default function Home(props) {
    // CONSOLE LOG //
    console.log("home props:", props)

    return (
        <>
            <Header
                userId={props.userId}
                username={props.username}
                setUserId={props.setUserId}
                setEmail={props.setEmail}
                setUsername={props.setUsername}
                setToken={props.setToken}
            />

            <nav className='empty-nav'></nav>


            <main className="main">

                <FrontPage />

            </main>

            <Footer />
        </>
    );
};