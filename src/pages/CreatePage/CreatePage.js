import React, { useState } from 'react'
import Header from '../../components/Header';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import API from '../../utils/API';
// import hchet from '../../assets/chet.jpg'
// import './style.css';

function CreatePage(props) {
  // window.location.reload(false)
  // console.log("createPage:", props)
  const ID = sessionStorage.getItem("userId");
  // console.log(ID)
  const navigate = useNavigate();
  const [ownerId, setOwnerId] = useState("")
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  
  const handleChange = e => {
    setOwnerId(ID)
      if (e.target.name === "title") {
          setTitle(e.target.value)
        } else if (e.target.name === "text") {
            setText(e.target.value)
        } 
    }
    const submitHandler = e => {
      e.preventDefault()
      
      API.createPage({
        owner_id:ownerId,
        title:title,
        text:text,
      }).then(data => {
        console.log(data)
      // navigate("/create")
      navigate("/" + props.username)
      window.location.reload(false)
    }).catch(err => {
      console.log(err)
      alert(err)
    })
  }

  return (
    <div>
      <Header />
      <Navbar userId={props.userId} 
      username={props.username}
      setUserId={props.setUserId} 
      setEmail={props.setEmail} 
      setUsername={props.setUsername} 
      setToken={props.setToken}/>
        <main className='main-herald'>
            <section>
                <h1>Create a Page</h1>
                <form onSubmit={submitHandler}>
                    <input name='title' placeholder='Title' value={title} onChange={handleChange}></input>
                    <textarea name='text' placeholder='Enter Text Here' value={text} onChange={handleChange}></textarea>
                    <button>Submit</button>
                </form>
            </section>
        </main>
      <Footer />
    </div>
  )
}

export default CreatePage