import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import API from "./utils/API";
import Enter from './pages/Enter/theGate.js';
import Home from './pages/Homepage/Home.js';
import LogIn from './pages/LogIn/';
import SignUp from './pages/SignUp/';
import Profile from './pages/Profile/Profile.js';
import UserPage from './pages/UserPage/UserPage.js';
import CreatePage from './pages/CreatePage/CreatePage';

function App() {
  const [userId, setUserId] = useState(null);
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [pages, setPages] = useState("");
  
  // console.log("App.js Pages:",pages)

  useEffect(()=>{
    const storedToken = window.sessionStorage.getItem("token");

    if (!storedToken) {
      return;
    }
    API.verifyToken(storedToken)
    .then((data) => {
      // console.log("Verify Token:", data)
      setToken(storedToken);
      setUserId(data.id);
      setUsername(data.username);
      setFullName(data.fullName);
      setEmail(data.email);
    })
    .catch((err) => {
      console.log("oh noes");
      console.log(err);
    });
  },[]);
  
  const ID = sessionStorage.getItem("userId");
  if(ID) {
    API.getProfile(ID)
    .then((data) => {
      // console.log("Get Pages:", data.pages)
      const pageData = JSON.stringify(data.pages)
      window.sessionStorage.setItem("pageData", pageData)
    })
    .catch((err) => {
      console.log("oh noes");
      console.log(err);
    });
  };

  useEffect(()=>{
    const pagesData = window.sessionStorage.getItem("pageData");
    const parsedData = JSON.parse(pagesData);
    setPages(parsedData)

    // console.log("PARSED DATA",parsedData);
  },[])
  
  let RouteComponents = undefined;

  !pages ?
  RouteComponents = undefined
  :
  RouteComponents = pages.map(({createdAt, text, title, id}) => (
    // console.log(title,id)
    <Route key={title} path={"/" + username + "/" + id} element={
      <UserPage
        userId={userId} 
        username={username}
        fullName={fullName} 
        email={email}
        createdAt={createdAt}
        text={text}
        title={title}
        setUserId={setUserId} 
        setEmail={setEmail} 
        setUsername={setUsername} 
        setToken={setToken} />}
      >
    </Route>
  ));
  // console.log(RouteComponents)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Enter />}></Route>

        <Route path="/home" element={
          <Home 
            userId={userId} 
            username={username}
            // pages={pages}
            token={token}
            setUserId={setUserId} 
            setEmail={setEmail} 
            setUsername={setUsername} 
            setToken={setToken}/>}
            >
        </Route>


        <Route path="/login" element={
          <LogIn 
          type='login' 
          userId={userId} 
          username={username}
          setPages={setPages}
          setUserId={setUserId} 
          setEmail={setEmail} 
          setFullName={setFullName}a
          setUsername={setUsername}
          setToken={setToken} />}
          >
        </Route>

        <Route path="/signup" element={
          <SignUp 
          type='signup' 
          userId={userId}
          setPages={setPages} 
          setUserId={setUserId} 
          setEmail={setEmail} 
          setFullName={setFullName} 
          setUsername={setUsername} 
          setToken={setToken}/>}
          >
        </Route>

        {!pages ?

        <Route path={"/"} element={
          <Profile 
          type='profile'
          userId={userId}
          token={token} 
          username={username} 
          fullName={fullName} 
          email={email}
          pages={pages} 
          setUserId={setUserId} 
          setEmail={setEmail} 
          setUsername={setUsername} 
          setToken={setToken}/>}
          >
        </Route>

        :
        <Route path={"/" + username} element={
          <Profile 
            type='profile'
            userId={userId}
            token={token} 
            username={username} 
            fullName={fullName}
            bio={bio} 
            email={email}
            pages={pages} 
            setUserId={setUserId} 
            setEmail={setEmail} 
            setUsername={setUsername}
            setBio={setBio} 
            setToken={setToken}/>}
            >
        </Route>
        }

        <Route path={"/" + username + "/edit"} element={
          <Profile
          type="edit"
          userId={userId}
          username={username} 
          fullName={fullName}
          bio={bio} 
          email={email}
          setEmail={setEmail} 
          setUsername={setUsername}
          setFullName={setFullName} 
          setBio={setBio} 
          />
        }>
        </Route>

        {RouteComponents}

        <Route path='/create' element={
          <CreatePage
            userId={userId}
            username={username} 
            />}
          >
        </Route>

      </Routes> 
    </Router>
  );
};

export default App;
