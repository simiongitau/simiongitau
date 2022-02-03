import React, { Component } from 'react'
import "./empty.css"
export default class EmptyCart extends Component {
    render() {
        return (
            // mt means margin top
            <div className="container emty">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h1>your cart is currently empty</h1>
                    </div>

                </div>

            </div>
        )
    }
}
