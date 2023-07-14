import React, { useState } from 'react'
// import API from "../../utils/API";
// import API from "../../utils/API";
import Header from '../../components/Header';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer';
import './style.css'


function Profile(props) {
console.log('profile props:',props)
// const [bioText, setBioText] = useState("");

// const handleChange = e => {
//   if (e.target.name === "bioText") {
//     setBioText(e.target.value)
//   }  
// }

// const submitHandler = e => {
//   e.preventDefault()
//   props.setBio(bioText)
// }

  
return (
  <div>
    {props.type === "profile" ?
    <div>
      <Header />
      <nav>
        <Navbar
          type={props.type}
          username={props.username}
          userId={props.userId}
          setUserId={props.setUserId} 
          setEmail={props.setEmail} 
          setUsername={props.setUsername}
          setToken={props.setToken}
        />
      </nav>
      <main className='pr-main'>
        <div className='h1-ar'>
        <h1 className='profile-username'>{props.username}</h1>
        <article className='profile-bio'>
          {props.bio === "" ?
          <p>no bio yet</p>
          // <form onSubmit={submitHandler}>
          //   <textarea placeholder='write your bio' name='bioText' value={bioText} onChange={handleChange}></textarea>
          //   <button>submit</button>
          // </form>
            :
            <p>{props.bio}</p>
          }
        </article>
        </div>
        {!props.pages ?
        <h2 className='profile-pages'>Total Pages: 0</h2>
        :
        <h2 className='profile-pages'>Total Pages: {props.pages.length}</h2>
        }
      </main>
      <Footer/>
    </div> 
     : 
     <div></div>
    }
    </div>
  )
}

export default Profile