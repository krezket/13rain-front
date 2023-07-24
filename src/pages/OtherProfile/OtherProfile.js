import React from 'react'
import API from '../../utils/API';

export default function OtherProfile() {
    
    let username = window.location.pathname;

    API.getProfileByName(username)
        .then((data) => {
            // CONSOLE LOG //
            console.log("Get User:", data)
        })
        .catch((err) => {
            console.log("oh noes");
            console.log(err);
        });

  return (
    <div>OtherProfile</div>
  )
}
