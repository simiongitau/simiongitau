import React, { Component } from 'react'
import { ProductConsumer } from '../Contex';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
export default class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value) => {
                        const { id, company, img, info, price, title, inCart } = value.DetailProduct;
                        return (
                            <div className="container py-5">
                                {/* start of title */}
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                                {/* end of title */}
                                {/* product info */}
                                <div className="row">
                                    <div className="col-10 mx-auto mx-auto col-md-6 my-3 ">
                                        <img src={img} className="img-fluid" alt="product" />
                                    </div>
                                    {/* product text */}
                                    <div className="col-10 mx-auto mx-auto col-md-6 my-3 text-capitalize">
                                        <h2>model:{title}</h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            made by:<span className="tex-tupper">
                                                {company}
                                            </span>
                                        </h4>
                                        <h4 className="text-blue">
                                            <strong>
                                                price:<span>ksh</span>
                                                {price}
                                            </strong>

                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            some info about product:
                                        </p>
                                        <p className="text-muted lead">
                                            {info}
                                        </p>
                                        {/* button section */}
                                        <div>
                                            {/* button back to products */}
                                            <Link to="/">

                                                {/* we have pass prop  cart in buttoncontainer */}
                                                <ButtonContainer cart>
                                                    back to products
                                                </ButtonContainer>
                                            </Link>
                                            {/* button addto Cart */}
                                            <ButtonContainer disabled={inCart ? true : false} onClick={() => {
                                                value.HandleCart(id);
                                                value.openModal(id);
                                            }}>
                                                {inCart ? 'inCart' : "add to cart"}
                                            </ButtonContainer>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </ProductConsumer>
        )
    }
}

