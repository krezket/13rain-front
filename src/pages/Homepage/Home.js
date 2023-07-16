import React from 'react';
// import React, { useEffect } from 'react';
import API from "../../utils/API";
import { Link } from 'react-router-dom'
import Header from "../../components/Header";
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/';
import './style.css';

export default function Home(props) {
    // console.log("home props:", props)

    API.getPages()
        .then((data) => {
            // console.log("all pages data",data);
        })
        .catch((err) => {
            console.log("oh noes");
            console.log(err);
        });

    let LinkComponents = undefined;

    const pagesData = window.sessionStorage.getItem("UserData");
    const parsedData = JSON.parse(pagesData);
    // console.log(parsedData)

    parsedData === null ?
        LinkComponents = undefined
        :
        LinkComponents = parsedData.pages.map(({ title, id }) => (
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
                    <h1>Featured Links</h1>
                    {!parsedData && !props.username ?
                        <p> No links yet </p>
                        :
                        <div>{LinkComponents}</div>
                    }
                </aside>
                <section className='main-section'>
                    <article id='hp-article'>
                        <p id='home-intro'>pages will be shown here</p>
                        {/* {!pageNUser ?
                    <p id='home-intro'>♥ ♦ ♣ ♠</p>
                    :
                    <p id='home-intro'>pages will be shown here</p>
                    } */}
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