import React, { useState, useEffect } from 'react';
// import { useGetAllPagesQuery } from '../../redux/features/pagesSlice';
import { Link } from 'react-router-dom'
import API from "../../utils/API";
import plasmaball from '../../assets/wizbiz/plasmaball.gif'
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
        <section>
            {!pages ?

                <img src={plasmaball} alt='loading'></img>
                :

                <div>
                    {pages.map(({ id, title, users }) => (
                        <div key={title}>
                            <Link id='fp-loading' key={title} to={"/" + users.username + "/" + id}>{title} by: {users.username}</Link>
                        </div>
                    ))
                    }
                </div>
            }
        </section>
    )
}
