import React, { Component } from 'react'
import './model.css'
import { ProductConsumer } from '../Contex'
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
export default class extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, endModal } = value;
                    const { Img, title, price } = value.modalProduct;
                    // condition rendeling
                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (<ModelContainer>
                            <div className="container add">
                                <div className="row">
                                    <div id="modal" className=" col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5 ">
                                        <h5> item added to the cart</h5>
                                        {/* img fluid class from boostrap help image from overflow the container */}
                                        <img src={Img} className="img-fluid" alt="product" height="200px" width="100px" />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price:ksh{price}</h5>
                                        {/* link for continue shopping */}
                                        <Link to="/">
                                            <ButtonContainer onClick={() => endModal()}>
                                                continue shoping
                                            </ButtonContainer>
                                        </Link>
                                        {/* link to card  and total payment*/}
                                        <Link to="/cart">
                                            <ButtonContainer cart onClick={() => endModal()}>
                                                go to cart
                                            </ButtonContainer>
                                        </Link>

                                    </div>


                                </div>

                            </div>
                        </ModelContainer >
                        );
                    }
                }}
            </ProductConsumer >
        )
    }
}
const ModelContainer = styled.div`
 position:fixed;
 width:600px;
 top:30px;
 left:200px;
 bottom:30px;
// background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite);
    width:500px;
    height:450px;
    top:40px;
}
`;
