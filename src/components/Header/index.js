import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export default function Header() {

    return (
        <header className='header'>
            <Link className='home-link' to='/home'>
                {/* <h1 className='title'>++ 𝔎𝔯𝔢𝔷𝔎𝔢𝔱 ++</h1> */}
                <h1 className='title'>13𝖗𝖆𝖎𝖓𝖘𝖙𝖔𝖗𝖒</h1>
                {/* <h1 className='title'>𝙆𝙍𝙀𝙕𝙏𝙀𝘾𝙃</h1> */}
            </Link>
        </header>
    );
};