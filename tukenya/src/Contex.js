import React, { Component } from 'react'
import Product from './components/Product';
import { Storeproduct, DetailProduct } from './Data';
const ProductContext = React.createContext();
//provider 
//consumer


class ProductProvider extends Component {
    state = {
        products: [],
        DetailProduct: DetailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: DetailProduct,
        cartSubTotal: 0,
        cartTotal: 0,
        cartTax: 16,


    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        Storeproduct.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return { products: tempProducts }
        })



    }
    // fuction to return each product with corresponding id
    getProduct = (id) => {
        const item = this.state.products.find(item => item.id === id);
        return item;
    }

    // method to handle detail of the product
    HandleDetail = (id) => {
        const product = this.getProduct(id);
        this.setState(() => {
            return { DetailProduct: product }
        })
        // console.log("hello from the details")
    }
    // method to add the product to the cart
    HandleCart = (id) => {
        let temProduct = [...this.state.products];
        const index = temProduct.indexOf(this.getProduct(id));
        const product = temProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        // changing the value in the actual state
        this.setState(
            () => {
                return {
                    products: temProduct, cart: [...this.state.cart, product]
                };
            },

            () => {
                this.addTotals();
            }
        )
    }

    openModal = id => {
        const product = this.getProduct(id);
        this.setState(() => {
            return {
                modalProduct: product, modalOpen: true
            }
        })
    }

    endModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        })
    }

    // incrementing the cart method
    increment = (id) => {
        // console.log("information from the decrement");
        let tempCart = [...this.state.cart];
        const selecProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selecProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;


        // after all this modification know set the state to apply the effect
        this.setState(
            () => {
                return { cart: [...tempCart] }
            },
            () => {
                this.addTotals();
            }
        )
    }
    // decrement cart method
    decrement = (id) => {
        // console.log("information from the decrement");
        let tempCart = [...this.state.cart];
        const selecProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selecProduct);
        const product = tempCart[index];

        product.count = product.count - 1;
        // remember no product that can be negative to avoid this
        if (product.count === 0) {
            // passing id because we are targrting specific product
            this.removeItem(id)
        }
        else {
            product.total = product.count * product.price;

            this.setState(
                () => {
                    return { cart: [...tempCart] }
                },
                () => {
                    this.addTotals();
                }
            )
        }
    }
    // remove methode or delete product from card
    removeItem = (id) => {
        // console.log("remove from the cart");
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        // filter and return only item that do not match this id
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getProduct(id));
        let removeProduct = tempProducts[index];
        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;

        this.setState(
            () => {
                return {
                    cart: [...tempCart],
                    products: [...tempProducts]
                }
            },
            () => {
                this.addTotals();
            }
        )
    }

    // clear all the order from the cart
    clearCart = () => {
        // console.log("cart was cleared")
        this.setState(
            () => {
                return { cart: [] };
            },
            () => {
                // all data set back to default
                this.setProducts();
                this.addTotals();
            }
        )
    }


    // function add  total
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (
            subTotal += item.total
        ));
        const tempTax = subTotal * 0.16;
        // to get value into two decimal
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax + 200;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        console.log(this.state.products);
        // setting context provider so that characteristic of component can be pass across children through ProductConsumer 
        return (
            <ProductContext.Provider value={{
                ...this.state,
                HandleDetail: this.HandleDetail,
                HandleCart: this.HandleCart,
                openModal: this.openModal,
                endModal: this.endModal,
                // include our method in provider
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,

            }}>

                {/* return children that are within this component */}
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
// declaring consumer
const ProductConsumer = ProductContext.Consumer;
// expoting both the ProductProvider and ProductConsumer
export { ProductProvider, ProductConsumer };
