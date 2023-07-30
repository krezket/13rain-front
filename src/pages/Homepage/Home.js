import React, { useState, useEffect } from 'react'
import API from "../../utils/API";
import { Link } from 'react-router-dom'
import Header from "../../components/Header";
import Navbar from '../../components/Navbar/navbar';
import FrontPage from '../../components/FrontPage/FrontPage';
import Footer from '../../components/Footer/';
import './style.css';

export default function Home(props) {
    // CONSOLE LOG //
    console.log("home props:", props)

    const [pages, setPages] = useState("")
    console.log(pages)
    
    useEffect(() => {
        API.getPages()
        .then((data) => {
            // console.log('pages data:', data)
            setPages(data)
        })
        .catch((err) => {
            console.log("oh noes");
            console.log(err);
        });
    },[]);
    
    

    return (
        <div className='page-container'>
            <Header />

            <Navbar
                userId={props.userId}
                username={props.username}
                setUserId={props.setUserId}
                setEmail={props.setEmail}
                setUsername={props.setUsername}
                setToken={props.setToken}
            />

            <main className="main">

                <section className='main-section'>
                    <FrontPage />
                    <article id='hp-article'>
                        <p id='home-intro'>♥ ♦ ♣ ♠</p>
                    </article>
                </section>

            </main>

            <Footer />
        </div>
    );
};