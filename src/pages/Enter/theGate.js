import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'
import enter from '../../assets/enter/enter-8.gif'
import smokeskull from '../../assets/death/smokeskull.gif'

function Enter() {
  return (
    <div id='enter'>
      <img src={smokeskull} alt='smoking skull'></img>
      <Link to='/home'>
        <img src={enter} alt='enter-here'></img>
      </Link>
    </div>
  );
};

export default Enter