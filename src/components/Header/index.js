import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export default function Header() {

    return (
        <header className='header'>
            <Link className='home-link' to='/home'>
                <h1 className='title'>++ 13RAINST0RM ++</h1>
            </Link>
        </header>
    );
};