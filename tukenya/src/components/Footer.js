import React from 'react'
import "./footer.css"
export default function Footer() {
    return (
        <div className="well">
            <div className="div7">
                <h4><i>contact us</i></h4>
                <ul>
                    <li><i className="bi bi-telephone"></i> conctact:  <i>070 6692 468</i></li>
                    <li><i className="bi bi-envelope"></i> email: <i>roseagro001@gmail.com</i></li>
                    {/* <li>address</li> */}
                    <li><i className="bi bi-mailbox"></i> post address: <i>P.O BOX 166 ELDORET KENYA</i></li>
                </ul>
            </div>

            <div className="div9">
                <h4><i>social</i></h4>
                <ul>
                    <a href="https://www.facebook.com/simion.gitau.3"><li><i className="bi bi-facebook"> </i> facebook</li></a>
                    <a href="https://twitter.com/">  <li><i className="bi bi-twitter"></i>twiter</li></a>
                    <a href="https://www.instagram.com/"> <li><i className="bi bi-instagram"></i> instagram</li></a>
                    {/* <a href="/"> <li>youtube</li></a> */}
                </ul>
            </div>
        </div>
    )
}
