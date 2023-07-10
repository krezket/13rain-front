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
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [pages, setPages] = useState("");
  
  console.log("App.js Pages:",pages)

  useEffect(()=>{
    const storedToken = localStorage.getItem("token");
    const ID = sessionStorage.getItem("userId");

    if (!storedToken) {
      return;
    }
    API.verifyToken(storedToken)
    .then((data) => {
      // console.log("App.js:", data)
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

    API.getProfile(ID)
    .then((data) => {
      console.log("App.js:", data.pages)
      const pageData = JSON.stringify(data)
      localStorage.setItem("pageData", pageData)
    })
    .catch((err) => {
      console.log("oh noes");
      console.log(err);
    });

  },[]);

  // const pagesData = localStorage.getItem("pageData");
  // const parsedData = JSON.parse(pagesData);
  // console.log("PARSED DATA",parsedData.pages);
  
  // let RouteComponents = undefined;

  // !parsedData ?
  // RouteComponents = undefined
  // :
  // RouteComponents = parsedData.pages.map(({createdAt, text, title, id}) => (
  //   // console.log(title,id)
  //   <Route key={title} path={"/" + username + "/" + id} element={
  //     <UserPage
  //       type='profile'
  //       userId={userId} 
  //       username={username}
  //       fullName={fullName} 
  //       email={email}
  //       createdAt={createdAt}
  //       text={text}
  //       title={title}
  //       setUserId={setUserId} 
  //       setEmail={setEmail} 
  //       setUsername={setUsername} 
  //       setToken={setToken} />}
  //     >
  //   </Route>
  // ));
  // console.log(RouteComponents)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Enter />}></Route>

        <Route path="/home" element={
          <Home 
            userId={userId} 
            username={username}
            pages={pages}
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
          setUserId={setUserId} 
          setEmail={setEmail} 
          setFullName={setFullName} 
          setUsername={setUsername} 
          setToken={setToken}/>}
          >
        </Route>

        {/* {!pageData ?

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
        <Route path={"/" + parsedData.username} element={
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
        } */}

        {/* {RouteComponents} */}

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
