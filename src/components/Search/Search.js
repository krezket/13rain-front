import React, { useState } from 'react';
import API from '../../utils/API';

export default function Search() {

    const [input, setInput] = useState("")

    const handleChange = e => {
        if (e.target.name === "input") {
            setInput(e.target.value)
        }
    }

    const submitHandler = e => {
        e.preventDefault()
        console.log(input)
        API.getProfileByName(input)
            .then((data) => {
                // CONSOLE LOG //
                console.log("Get User:", data)
                // const CrntPgData = JSON.stringify(data)
                // window.sessionStorage.setItem("CrntPgDt", CrntPgData)
            })
            .catch((err) => {
                console.log("oh noes");
                console.log(err);
            });
    }

    return (
        <form onSubmit={submitHandler}>
            <input name='input' value={input} onChange={handleChange} placeholder='search'></input>
            <button>Search</button>
        </form>
    )
}
