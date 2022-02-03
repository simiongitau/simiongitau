
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import img from "../images/agro.jpg"
import "./navbar.css"

export default class Navbar extends Component {
    render() {
        return (
            // bg means background color ms mean small screen px -padding y axis
            <nav className="navbar navbar-exapand-ms  navbar-dark px-sm-5">
                <Link to="/" className="logo">
                    <div className="q">
                        <img src={img} alt="store" className="navbar-brand" width="60px" height="70px" />

                        <div className="t">
                            Rose<br /> agro vet
                        </div>
                    </div>

                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="link"> product</Link>

                    </li>
                </ul>
                <Link to="/Aboutus" className="link">
                    Aboutus
                </Link>

                <Link to="/Cart">
                    <button>
                        <i className="bi bi-cart3 p-3"></i>
                    </button>
                </Link>

                <Link to="/Create" className="link">
                    signup
                </Link>

                <Link to="/Login" className="link">

                    Administrator
                </Link>

            </nav>
        )
    }
}
