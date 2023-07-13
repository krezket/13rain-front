import React from 'react';
// import API from "../../utils/API";
import welcome from '../../assets/welcome/welcome-11.gif';
// import fire from '../../assets/fire/fire-2.gif';
// import shield from '../../assets/Heraldry/heraldry.gif'
import { Link } from 'react-router-dom'
import Header from "../../components/Header";
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/';
import './style.css';

export default function Home(props) {
    // console.log("home props:", props)

    let LinkComponents = undefined;

    const pagesData = window.sessionStorage.getItem("pageData");
    const parsedData = JSON.parse(pagesData);

    parsedData === null ?
    LinkComponents = undefined
    :
    LinkComponents = parsedData.map(({title, id}) => (
        <Link key={title} to={"/" + props.username + "/" + id}>
            <p>{title}</p>
        </Link>
    ));

    return (
        <div className='page-container'>
            <Header />
        <nav>
            <Navbar 
            userId={props.userId} 
            username={props.username}
            setUserId={props.setUserId} 
            setEmail={props.setEmail} 
            setUsername={props.setUsername} 
            setToken={props.setToken}
        />
        </nav>
        <main className="main">
            <aside className='aside-left'>
                <h1>Links</h1>
                {!parsedData && !props.username ?
                <p> No links yet </p>
                :
                <div>{LinkComponents}</div>
                }
            </aside>
            <section className='main-section'>
                <header className='hp-header'>
                    <img id='welcome' src={welcome} alt='welcome'></img>
                </header>
                <article id='hp-article'>
                    <p id='home-intro'>Inspired by the styles of the old net, "13rainstorm" is an experimental webpage designed as a simple social media platform. Here a user can create and login to their account, and create pages. ♥ ♦ ♣ ♠</p>
                </article>
            </section>
            <aside className='aside-right'>
                {!props.token ?
                <p> Sign In To Create A Page </p>
                :
                <>
                <h1>Other Links</h1>
                <Link to={"/create"}>Create a Page</Link>
                </>
                }
            </aside>
        </main>
            <div className='fire-div'>
                {/* <img id='shield' src={shield} alt='shield'></img> */}
                {/* <img src={fire} alt='fire'></img>  */}
                {/* <img src={fire} alt='fire'></img>  */}
                {/* <img src={fire} alt='fire'></img> */}
            </div>
            <Footer />
        </div>
    );
};