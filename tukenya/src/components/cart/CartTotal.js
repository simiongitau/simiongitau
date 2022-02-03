import React from 'react'
// value that we are passing in as props
import { Link } from 'react-router-dom';
export default function CartTotal({ value }) {
    const { cartSubTotal, cartTotal, cartTax, clearCart } = value;
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize taxt-right">
                    <Link to="/">
                        <button className="btn btn-outline-danger mb-3 px-5 text-uppercase" type="button" onClick={() => clearCart()}>
                            clear cart
                        </button>
                    </Link>

                    <h5>
                        <span className="text-title">
                            subtotal:
                        </span>
                        <strong>
                            ksh{cartSubTotal}
                        </strong>
                    </h5>

                    <h5>
                        <span className="text-title">
                            tax:
                        </span>
                        <strong>
                            ksh{cartTax}
                        </strong>
                    </h5>

                    <h5>
                        <span className="text-title">
                            transport fee:
                        </span>
                        <strong>
                            ksh 200
                        </strong>
                    </h5>


                    <h5>
                        <span className="text-title">
                            total:
                        </span>
                        <strong>
                            ksh{cartTotal}
                        </strong>
                    </h5>


                </div>

            </div>

        </div>
    )
}
