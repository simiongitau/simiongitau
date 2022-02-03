import React, { Component } from 'react'
import "./main.css"
import { Link } from 'react-router-dom'
export default class Main extends Component {
    render() {
        return (
            <div className="containert ">
                <center className="header pt-5" > <span> welcome Administrator</span><br /></center>
                <div className="d-flex justify-content-center gap-5 " >

                    <Link to="/Orders">
                        <button className="btn btn-primary">orders</button>
                    </Link>

                    <Link to="/Update">
                        <button className="btn btn-primary"> updates</button>
                    </Link>

                </div>
            </div>
        )
    }
}
