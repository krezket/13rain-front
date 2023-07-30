import React, { useState, useEffect } from 'react';
// import { useGetAllPagesQuery } from '../../redux/features/pagesSlice';
import API from "../../utils/API";
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
    },[]);

    return (
        <section>
            {!pages ?
                <p id='fp-loading'>loading</p>
                :
                <div>pages here</div>
            }
        </section>
    )
}
