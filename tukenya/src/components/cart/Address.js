
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './address.css'
import Axios from 'axios';
export default function Address({ value }) {
    const { cartTotal } = value;
    const [county, setCounty] = useState("");
    const [number, setnumber] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");

    const [Total, setTotal] = useState(cartTotal)





    // method to send order
    const sendOrder = () => {
        Axios.post('http://localhost:3001/createOrder', {
            cartTotal: Total,
            email: email,
            location: location,
            county: county,
            phoneno: number,
        }).then(() => console.log('success'))
    }

    // method to handle verification

    useEffect(() => {

        const handleVerify = async () => {
            try {
                const respond = await Axios.get("http://localhost:3001/getVerified");
                console.log(respond.data)
            } catch (error) {
                console.log(error)
            }
        }

        handleVerify();

    }, []);
    console.log(email);

    // console.log(firstname);
    console.log(cartTotal)
    // function to hundleOnsubit
    const handleSubit = (e) => {

        if (county !== '') {
            if (number !== "") {
                if (email !== "") {
                    if (location !== "" && number !== "" && email !== "") {
                        return <Link to="/Create" onClick={sendOrder}>create account</Link>;
                    } else {
                        return "locaion required"
                    }
                }
                else {
                    return "email requred"
                }

            }
            else {
                return "telephone number required"
            }

        }
        else {
            return "county name required"
        }

    }

    console.log()

    return (
        <div className="main container pb-5 ">

            <span> <center>   <strong>checkout address</strong></center>   </span>
            <div className="section">
                <div className="section1">
                    <label className="label2">county:</label><br /><input className="form-control" type="text" onChange={e => { setCounty(e.target.value) }} /><br />
                    <label className="label3">telephone number:</label><br /><input className="form-control" type="number" onChange={(e) => { setnumber(e.target.value) }} />

                </div>
                <div className=" section2">
                    <label className="label5">email:</label> <br /> <input className="form-control" type="email" onChange={(e) => { setEmail(e.target.value) }} /><br />
                    <labl className="label6">location:</labl><br /> <input className="form-control" type="text" onChange={e => setLocation(e.target.value)} />
                </div>
            </div>
            <center> <span style={{ color: "red" }}> {handleSubit()}</span></center>
            {/* link for the payment method */}



        </div>
    )
}
