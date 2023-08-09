import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import API from '../../utils/API';
import loading5 from '../../assets/red/redlightbar.gif'
import './style.css'


function Profile(props) {
  console.log('profile props:', props);
  // const [username, setUsername] = useState("");
  const ID = sessionStorage.getItem("userId");
  const [ownerId, setOwnerId] = useState("")
  const [bio, setBio] = useState("");
  const [pages, setPages] = useState("")
  console.log(pages)
  const navigate = useNavigate();

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

  const handleChange = e => {
    setOwnerId(ID)
    if (e.target.name === "bio") {
      setBio(e.target.value)
    }
    // else if (e.target.name === "username") {
    //   setUsername(e.target.value)
    // }
  }

  const submitHandlerUsername = e => {
    e.preventDefault()

    API.updateProfile({
      id: ownerId,
      // username:username,
      bio: bio

    }).then(data => {
      console.log(data)
      navigate("/" + props.username);
      window.location.reload(false);

    }).catch(err => {
      console.log(err)
      alert(err)
    })
  }


  return (
    <>
      {props.type === "profile" ?
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

                <h1 className='profile-username'>{props.username}</h1>

                {!props.friends ?
                  <h3 className='profile-pages'>Friends: 0</h3>
                  :
                  <h3 className='profile-pages'>Friends: {props.friends.length}</h3>
                }
                {!props.pages ?
                  <h3 className='profile-pages'>No Pages Yet</h3>
                  :
                  <h3 className='profile-pages'>Total Pages: {pages.length}</h3>
                }

              </div>

              <article className='profile-bio'>
                {props.bio === "" ?
                  <p>no bio yet</p>
                  :
                  <p>{props.bio}</p>
                }
              </article>
              {!pages ?

<img src={loading5} alt='loading'></img>
:

<section className='fp-section'>
    {pages.map(({ id, title, users }) => (
        <Link id='fp-link' key={title} to={"/" + users.username + "/" + id}>
            <div className='card' key={title}>
                {title} by: {users.username}
            </div>
        </Link>
    ))
    }
</section>
}

            </div>

          </main>

          <Footer />

        </>

        :
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

            <form className='h1-ar' onSubmit={submitHandlerUsername}>
              {/* <input name='username' value={username} placeholder="New Username" onChange={handleChange}></input> */}
              {/* <input className='profile-fullname' placeholder="First and Last Name"></input> */}
              {/* <input className='profile-email' placeholder="example@email.com"></input> */}

              {props.bio === "" ?
                <textarea className='textarea-bio' name='bio' value={bio} onChange={handleChange}>Write a bio</textarea>
                :
                <textarea className='textarea-bio' name='bio' value={bio} onChange={handleChange}></textarea>
              }
              <button>Submit</button>
            </form>

          </main>
          <Footer />
        </>
      }
    </>
  );
};

export default Profile