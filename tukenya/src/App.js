import React, { Component } from "react";
import "uuid";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
import Cart from "./components/cart/Cart";
import Aboutus from "./components/Aboutus";
import Create from "./components/CreateAccount";
import Modal from "./components/Modal";
import Login from "./components/admin/Login";
import Orders from "./components/admin/Orders";
import Update from "./components/admin/Update";
import Main from "./components/admin/Main";
import ProductContext from "./ProductContext";
import Default from "./components/Default";
import Chat from "./components/Chat";
import Footer from "./components/Footer";

const App = () => {

    // render() {



    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <ProductContext>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/Detail" component={Detail} />
                    <Route path="/Cart" component={Cart} />
                    <Route path="/Aboutus" component={Aboutus} />
                    <Route path="/Create" component={Create} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Orders" component={Orders} />
                    <Route path="/Update" component={Update} />
                    <Route path="/Main" component={Main} />
                    <Route path="/chat" component={Chat} />

                    <Route component={Default} />
                </ProductContext>

            </Switch>
            <Modal />
            <Footer/>
        </React.Fragment>
    )

    // }
}
export default App;