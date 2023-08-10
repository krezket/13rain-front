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
import About from './pages/About/About.js';
import OtherProfile from './pages/OtherProfile/OtherProfile';
import './App.css';

function App() {
  const [userId, setUserId] = useState(null);
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");
  console.log(username)
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [userPages, setUserPages] = useState("");


  const [pages, setPages] = useState("")
  const [users, setUsers] = useState("")

  useEffect(() => {
    API.getProfiles()
      .then((data) => {
        setUsers(data)
      })
      .catch((err) => {
        console.log("oh noes");
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const { pathname } = window.location
    const paths = pathname.split("/").filter(entry => entry !== "");
    const lastPath = paths[paths.length - 1]

    API.getPages(lastPath)
      .then((data) => {
        console.log(data)
        setPages(data)
      })
      .catch((err) => {
        console.log("oh noes");
        console.log(err);
      });
  }, []);


  useEffect(() => {
    const storedToken = window.sessionStorage.getItem("token");

    if (!storedToken) {
      return;
    }

    API.verifyToken(storedToken)
      .then((data) => {
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
  }, []);

  const ID = sessionStorage.getItem("userId");

  if (ID) {
    API.getProfile(ID)
      .then((data) => {
        const UserData = JSON.stringify(data)
        window.sessionStorage.setItem("UserData", UserData)
      })
      .catch((err) => {
        console.log("oh noes");
        console.log(err);
      });
  };

  useEffect(() => {
    const userData = window.sessionStorage.getItem("UserData");
    const parsedUserData = JSON.parse(userData);
    setUserPages(parsedUserData)
  }, []);

  /////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Enter />}></Route>

        {/* HOME HOME HOME HOME */}
        <Route path="/home" element={
          <Home
            userId={userId}
            username={username}
            token={token}
            setUserId={setUserId}
            setEmail={setEmail}
            setUsername={setUsername}
            setToken={setToken}
          />}
        >
        </Route>

        {/* LOGIN LOGIN LOGIN LOGIN */}
        <Route path="/login" element={
          <LogIn
            type='login'
            userId={userId}
            username={username}
            setPages={setUserPages}
            setUserId={setUserId}
            setEmail={setEmail}
            setFullName={setFullName}
            setUsername={setUsername}
            setToken={setToken}
          />}
        >
        </Route>

        {/* SIGNUP SIGNUP SIGNUP SIGNUP */}
        <Route path="/signup" element={
          <SignUp
            type='signup'
            userId={userId}
            setPages={setUserPages}
            setUserId={setUserId}
            setEmail={setEmail}
            setFullName={setFullName}
            setUsername={setUsername}
            setToken={setToken}
          />}
        >
        </Route>

        {/* PROFILE PROFILE PROFILE PROFILE */}

        <Route path={"/" + username} element={
          <Profile
            type='profile'
            userId={userId}
            token={token}
            username={username}
            fullName={fullName}
            bio={bio}
            email={email}
            setUserId={setUserId}
            setEmail={setEmail}
            setUsername={setUsername}
            setBio={setBio}
            setToken={setToken}
          />}
        >
        </Route>

        {/* PROFILE EDIT PROFILE EDIT PROFILE EDIT */}
        <Route path={"/edit"} element={
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
          />}
        >
        </Route>

        {/* OTHER PROFILE OTHER PROFILE OTHER PROFILE */}

        {!users ?
          <Route path={"bruh"} element={<OtherProfile />}>
          </Route>
          :
          users.map(({ username }) => (
            <Route key={username} path={'/&/' + username} element={
              <OtherProfile type='otherProfile' />}
            >
            </Route>
          ))
        }

        {/* PAGE PAGE PAGE PAGE */}

        {!pages ?
          <Route path={"/"} element={<UserPage />}>
          </Route>
          :
          pages.map(({ createdAt, text, title, users, id }) => (
            <Route key={title} path={"/" + users.username + "/" + id} element={
              <UserPage
                // fullName={fullName}
                // email={email}
                type='page'
                userId={userId}
                username={username}
                pageUsername={users.username}
                createdAt={createdAt}
                text={text}
                title={title}
                setUserId={setUserId}
                setEmail={setEmail}
                setUsername={setUsername}
                setToken={setToken}
              />}
            >
            </Route>
          ))}

        {/* CREATE PAGE CREATE PAGE CREATE PAGE */}

        <Route path='/create' element={
          <CreatePage
            userId={userId}
            username={username}
          />}
        >
        </Route>

        {/* ABOUT ABOUT ABOUT ABOUT */}
        
        <Route path='/about' element={
          <About />
        }>
        </Route>

      </Routes>
    </Router>
  );
};

export default App;