import React from 'react'
import styled from 'styled-components';
// item and value have been passed as props
import "./product.css"
export default function CartProduct({ item, value }) {
    const { id, title, Img, price, total, count } = item;
    const { increment, decrement, removeItem, } = value;
    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={Img} style={{ width: '5rem', height: "5rem" }} className="img-fluid" alt="product" />
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product:</span>
                {title}
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price:</span>
                {price}
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    {/* decrement product methode */}
                    <div className="d-flex">

                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}> - </span>
                        <span className="btn btn-black mx-1">{count}</span>

                        {/* increment Button */}

                        <span className="btn btn-black mx-1" onClick={() => increment(id)}> + </span>
                    </div>
                </div>

            </div>

            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <Icon>
                        <i class="bi bi-trash  bg-danger" ></i>
                    </Icon>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <strong>
                    item total:ksh  {total}
                </strong>

            </div>



        </div>
    )
}
const Icon = styled.i
    `
 cursor: pointer;
 font-size:30px


    `

