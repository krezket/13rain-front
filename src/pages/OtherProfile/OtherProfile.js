import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer';
import API from '../../utils/API';

export default function OtherProfile(props) {
  const [user, setUser] = useState("")
  console.log(user)

  let username = window.location.pathname;

  useEffect(() => {
    API.getProfileByName(username)
      .then((data) => {
        // CONSOLE LOG //
        // console.log("Get User:", data)
        setUser(data)
      })
      .catch((err) => {
        console.log("oh noes");
        console.log(err);
      });
  })


  return (
    <>
      <Header />

      <Navbar
        type={props.type}
        username={props.username}
        userId={props.userId}
        setUserId={props.setUserId}
        setEmail={props.setEmail}
        setUsername={props.setUsername}
        setToken={props.setToken}
      />

      <main className='pr-main'>
        <div className='h1-ar'>

          <div className='usr-fri'>

            <h1 className='profile-username'>{user.username}</h1>

            {!props.friends ?
              <h3 className='profile-pages'>Friends: 0</h3>
              :
              <h3 className='profile-pages'>Friends: {props.friends.length}</h3>
            }
            {!props.pages ?
              <h3 className='profile-pages'>No Pages Yet</h3>
              :
              <h3 className='profile-pages'>Total Pages: {user.pages.length}</h3>
            }

          </div>

          <article className='profile-bio'>
            {!user.bio ?
              <p>no bio yet</p>
              :
              <p>{user.bio}</p>
            }
          </article>

        </div>

      </main>

      <Footer />

    </>
  )
}
