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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
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