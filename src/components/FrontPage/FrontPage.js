import React, { useState, useEffect } from 'react';
// import { useGetAllPagesQuery } from '../../redux/features/pagesSlice';
import { Link } from 'react-router-dom'
import DayJS from 'react-dayjs';
import API from "../../utils/API";
import loading from '../../assets/wizbiz/reaplf.gif'
// import loading from '../../assets/wizbiz/baraduur.gif'
// import loading from '../../assets/wizbiz/death-demon.gif'
// import loading from '../../assets/wizbiz/plasmaball.gif'
// import loading from '../../assets/red/redlightbar.gif'
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

                <table className='fp-table'>
                    <tbody className='fp-table'>
                        <tr>
                            <th className='fp-title'>Title</th>
                            <th className='fp-title' id='less'>Username</th>
                            <th className='fp-title' id='less'>Created</th>
                        </tr>
                        {pages.map(({ id, title, users, createdAt }) => (
                            <tr key={title}>
                                <td className='fp-data'><Link id='fp-link' to={"/" + users.username + "/" + id}>{title}</Link></td>
                                <td className='fp-data'><Link id='fp-link' to={"/" + users.username}>{users.username}</Link></td>
                                <td className='fp-data'><DayJS id='fp-link' format="M/D/YYYY">{createdAt}</DayJS></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                // <section className='fp-section'>
                //     {pages.map(({ id, title, users }) => (
                //         <div className='card' key={title}>
                //             <Link id='fp-link' key={title} to={"/" + users.username + "/" + id}>{title} by: {users.username}</Link>
                //         </div>
                //     ))
                //     }
                // </section>
            }
        </>
    )
}
