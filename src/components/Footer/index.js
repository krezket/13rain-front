import React from 'react';
import DayJS from 'react-dayjs';
import './style.css';


export default function Header() {
    return (    
    <footer className='footer'>
      <h1 className='outro'>&copy;<DayJS format="YYYY"></DayJS> Krezket</h1>
      
      <div className='footerbar'>
        <p className='footer-p'>
          <a className='footer-ig' id='link-footer' href='https://www.instagram.com/krezket/' target="_blank" rel="noreferrer">Instagram</a>
        </p>
            
        <p className='footer-p'>
          <a className='footer-sc' id='link-footer' href='https://soundcloud.com/krezket' target="_blank" rel="noreferrer">SoundCloud</a>
        </p>

        <p className='footer-p'>
          <a className='footer-yt' id='link-footer' href='https://youtube.com/@krezket' target="_blank" rel="noreferrer">YouTube</a>
        </p>
      </div>
    </footer>
    );
};