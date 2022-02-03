import axios from 'axios'
import React from 'react'


export const ProdContext = React.createContext()



const ProductContext = ({ children }) => {

    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        const getProducts = async () => {
            axios.get("http://localhost:3001/getProduct").then((respond) => {
                const data = respond.data

                setProducts([...data])

            })
        }

        console.log("Products", products)
        getProducts()
    }, [])


    return (
        <ProdContext.Provider values={{
            products,
        }}>
            {children}
        </ProdContext.Provider>
    )
}

export default ProductContext
