import Product from './Product';
import Title from './Title';
import img from "../images/images2.jpg"
import { ProductConsumer } from "../Contex";
import './productlist.css';
const ProductList = () => {

    return (
        // <React.Fragment>
        <div className="p">

            <img src={img} alt="photo" width="100%" height="250px" />

            <div className="container">
                {/* <span> search    <select className="search">
                    <option value="firtilizer"></option>
                    <option value="firtilizer">firtilizer</option>
                    <option value="herbcide">herbcide</option>
                    <option value="seeds">seeds</option>
                    <option value="pestcide">pestcide</option>
                </select>
                    {/* <Title name="our" title="products" /> */}
                {/* </span> */} */
                <div className="row">
                    <ProductConsumer>
                        {/* for us to grab the value we use the callback function  */}
                        {value => {
                            return value.products.map(product => {
                                return <Product key={product.id} product={product} />
                            })
                        }}
                    </ProductConsumer>
                </div>

            </div>
            {/*<Product />*/}
            {/* // </React.Fragment > */}
        </div >
    )
    // }
}
export default ProductList