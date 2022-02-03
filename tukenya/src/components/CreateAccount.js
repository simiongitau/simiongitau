
import React from 'react'
import { useState } from 'react'
import "./account.css"
import image from '../images/mpesa.png';
import Axios from "axios"
import { Link } from 'react-router-dom'
export default function CreateAccount() {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [pasword, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");




    const sendUser = () => {
        Axios.post('http://localhost:3001/create', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            pasword: pasword,
        }).then(() => console.log('success send'))

    }



    const handleSubmit = () => {
        if (firstname !== "") {
            if (lastname !== "") {
                if (email !== "") {
                    if (pasword !== "") {
                        if (confirm !== "" && pasword !== "" && email !== "" && lastname !== "" && firstname !== "") {
                            return ""
                        }
                        else {
                            return "confirn password required"
                        }
                    } else {
                        return "password requred"
                    }
                } else {
                    return "email required"
                }
            } else {
                return "last name required"
            }

        } else {
            return "first name required"
        }

    }

    console.log(confirm);
    return (

        <div className="create">
            <form className="d-flex gap-70  justify-content-center ">
                <ul className="m-3">
                    <li className="mt-3">first name:</li> <br />
                    <li>last name:</li> <br />
                    <li >email:</li> <br />
                    <li> password:</li> <br />
                    <li className="  list6">cornfirm password:</li>
                </ul>

                <div className="m-4">
                    <input className=" p-2 form-control mb-4" type="text" onChange={e => setfirstname(e.target.value)} /><br />
                    <input className=" p-2 form-control mb-4" type="text" onChange={e => setlastname(e.target.value)} /><br />
                    <input className="p-2 form-control mb-4" type="email" onChange={e => setemail(e.target.value)} /><br />
                    <input className=" p-2  form-control mb-4" type="number" onChange={e => setPassword(e.target.value)} /><br />
                    <input className=" p-2 form-control mb-1" type="number" onChange={e => setConfirm(e.target.value)} /><br />
                </div>

            </form>
            <center> <span className="account">{handleSubmit()}</span></center>

            <center > <button className="pt-0 btn btn-success" onClick={sendUser}>submit</button></center>



            <center className="pay">
                <h4>pay with</h4>
                {/* <i class="bi bi-paypal"></i> */}


                <img src={image} alt="mpesa icon" width="150px" height="80px" className="mt-2 mb-5" />

            </center>

        </div>

    )
}
