import React, { useState, useEffect } from 'react';
// import { useGetAllPagesQuery } from '../../redux/features/pagesSlice';
import { Link } from 'react-router-dom'
import API from "../../utils/API";
// import loading from '../../assets/wizbiz/plasmaball.gif'
import loading from '../../assets/red/redlightbar.gif'
// import loading from '../../assets/red/fly-red.gif'
import './fp.css'

export default function FrontPage() {

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
    }, []);

    return (
        <>
            {!pages ?

                <img src={loading} alt='loading'></img>
                :

                <section className='fp-section'>
                    {pages.map(({ id, title, users }) => (
                        <div className='card' key={title}>
                            <Link id='fp-link' key={title} to={"/" + users.username + "/" + id}>{title} by: {users.username}</Link>
                        </div>
                    ))
                    }
                </section>
            }
        </>
    )
}
