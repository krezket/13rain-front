import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import API from '../../utils/API';

export default function OtherProfile(props) {
  const [user, setUser] = useState("")

  useEffect(() => {
    API.getProfileByName(window.location.pathname)
      .then((data) => {
        // CONSOLE LOG //
        console.log("Get User:", data)
        setUser(data)
        // const CrntPgData = JSON.stringify(data)
        // window.sessionStorage.setItem("CrntPgDt", CrntPgData)
      })
      .catch((err) => {
        console.log("oh noes");
        console.log(err);
      });
  }, [])

  return (
    <>
      <Header 
        type={props.type}
        username={props.username}
        userId={props.userId}
        setUserId={props.setUserId}
        setEmail={props.setEmail}
        setUsername={props.setUsername}
        setToken={props.setToken}
      />

      <nav className='empty-nav'></nav>

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
