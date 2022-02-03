import React, { Component } from 'react'
import Title from '../Title'
import CartList from './CartList';
import "./cart.css";
import Column from './Column'
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../Contex';
import CartTotal from './CartTotal';
import Address from './Address';
import styled from 'styled-components';
export default class Cart extends Component {
    render() {
        return (
            <div className="cart5">
                <ProductConsumer>
                    {/* condition rendering to check where the cart a have value or not */}
                    {
                        value => {
                            const { cart } = value;
                            if (cart.length > 0) {
                                return (<div>

                                    <Cart1>
                                        <center>     <i className="bi bi-cart4 mb-5 "></i></center>
                                    </Cart1>

                                    <Column />
                                    {/* value passed to child through prop */}
                                    <CartList value={value} />
                                    <CartTotal value={value} />
                                    <Address value={value} />
                                </div>)
                            }
                            else {
                                return <EmptyCart />
                            }
                        }

                    }
                </ProductConsumer>


            </div>
        )
    }
}
const Cart1 = styled.i
    `
    font-size:50px;
    color:#ffffff;
`