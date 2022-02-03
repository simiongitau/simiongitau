import React from 'react'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Axios from 'axios';
import "./login.css"
export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([])



    console.log(password);
    console.log(email);
    const history = useHistory();

    const handleLogin = () => {
        Axios.get("http://localhost:3001/employee").then((respond) => {
            // console.log(respond)
            setData(respond.data)
        })

        data.map((value, key) => {

            // console.log(email);

            if (value.email === email && value.pasword === password) {
                history.push("/Main")
                console.log("welcome")

            } else {
                console.log("wrong password")
            }
        }
        )

        // console.log(data)
        // console.log(password);

    }

    const handleChecking = () => {
        if (email !== "") {
            if (password !== "") {
                return ""
            }
            else return "passwor required"
        } else return "email required"
    }






    return (
        <div className="containert">
            ,,,
            <div className="col-sm-6 offset-sm-3  login  mt-4 ">
                <center>  <h3>login</h3></center>
                <div className="mt-3">
                    <input className="form-control face " type="email" placeholder="input email" onChange={e => setEmail(e.target.value)} /><br />

                    <input className="form-control" type="password" placeholder="input password" onChange={e => setPassword(e.target.value)} /><br />
                    <center><strong className="error">  {handleChecking()}</strong></center><br />
                    <button className="button btn bg-primary" onClick={handleLogin}>submit</button>

                </div>

            </div>

        </div>
    )
}
