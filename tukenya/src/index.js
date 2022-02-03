import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./Contex";






ReactDom.render(
    <ProductProvider>
        <Router>
            <App />
        </Router>
    </ProductProvider>
    ,


    document.getElementById('root')
);



