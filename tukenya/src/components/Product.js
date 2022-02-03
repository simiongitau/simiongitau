import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import propTypes from "prop-types"
import "./product.css"
import { ProductConsumer } from '../Contex';

export default class Product extends Component {
    render() {
        // object descructuring 
        const { id, title, Img, price, inCart } = this.props.product;
        // seting the number of column with the boostrap depending on the size of the screen
        // lg mean large screan md mean midian sreen and mx mean in size small screen
        return (<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-4 my-3">
            <div className="card">

                <ProductConsumer>
                    {/* call back function */}

                    {(value) => (<div className="img-container p-5" onClick={() => value.HandleDetail(id)}>
                        <Link to="/">
                            <img src={Img} alt="product" className="card-img-top" width='130px' height='130px' />
                        </Link>
                        <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {
                            // remember accessing this property under ProductConsumer
                            value.HandleCart(id);
                            value.openModal(id);
                        }}>
                            {inCart ? (
                                <p className="text-capitalize mb-0" disabled>
                                    {""}
                                    in Cart
                                </p>
                            ) : (
                                <i class="bi bi-cart-plus"></i>
                            )
                            }
                        </button>
                    </div>)}


                </ProductConsumer>
                {/* card footer */}
                <div className="card-footer d-flex justify-content-between ">
                    {/* mb means margin botton d mean display flex in boostrap */}
                    <p className="align-self-center mb-0">
                        {
                            title
                        }
                    </p>
                    <p>
                        <h5 className="text-blue font-italic mb-0">
                            {/* mr mean margin right in boostart */}
                            <span className=" mr-1 ">
                                Ksh{price}
                            </span>

                        </h5>
                    </p>

                </div>
            </div>
        </ProductWrapper>

        )
    }
}//some as making the require datatype to enhance correct data
//    remember prototype should be imported before used
Product.propTypes = {
    product: propTypes.shape(
        {
            id: propTypes.number,
            img: propTypes.string,
            title: propTypes.string,
            price: propTypes.number,
            inCart: propTypes.bool
        }
    ).isRequired
};

// declaring sytling of the card and targeting each child with the class name
const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 0.2s linear;
}
.card_footer
{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
    
}
:hover
{
   .card
   {
       border:0.0.4rem solid rgba(0,0,0,0.2);
       box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
   }
   .card-footer
   {
       background: rgba(247,247,247);
   }
}
.image-container
{
    position:relative;
    overflow:hidden;
}
.img-container:hover  .card-img-top
{
transform: scale(1.2);
}
.card-img-top{
    transition:all 1s linear
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    border:none;
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    // transform:translate(100%,100%);
    // transition:all 1s linear;

}
.img-container:hover .cart-btn{
    // transform:translate(0, 0);
}

   `;
