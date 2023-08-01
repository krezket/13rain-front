import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export default function Header() {

    return (
        <header className='header'>
            <Link className='home-link' to='/home'>
                {/* <h1 className='title'>▌│█║▌║▌║ 𐌊𐍂𐌴Ɀ𐌊𐌴𐨠 ║▌║▌║█│▌</h1> */}
                {/* <h1 className='title'>13𝖗𝖆𝖎𝖓𝖘𝖙𝖔𝖗𝖒</h1> */}
                {/* <h1 className='title'>▌│█║▌║▌║ ƘⱤƸⱿƘƸƬ ║▌║▌║█│▌</h1> */}
                {/* <h1 className='title'>❂𐂷 ƘⱤƸⱿƘƸƬ 𐂷❂</h1> */}
                {/* <h1 className='title'>𐌊𐌓𐌄Ɀ𐌊𐌄𐌕</h1> */}
                {/* <h1 className='title'>▌│█║▌║▌║ KREZKET ║▌║▌║█│▌</h1> */}
                <h1 className='title'>𝐾𝑅𝐸𝑍𝐾𝐸𝑇</h1>
            </Link>
        </header>
    );
};