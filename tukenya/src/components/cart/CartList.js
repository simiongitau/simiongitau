import React from 'react'
import CartProduct from './CartProduct'
export default function CartList({ value }) {

    const { cart } = value;
    console.log(cart)
    // console.log('ty' + value, cart);
    return (
        <div className="container-fluid">
            {/* {/* looping through our storeproduct  */}
            {
                cart.map(
                    item => {
                        return <CartProduct key={item.id} item={item} value={value }/>
                    }
                )
            }

        </div>
    )
}
