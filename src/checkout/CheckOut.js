import React from 'react';
import './CheckOut.css';

import { useDataLayerValue } from '../StateProvider';

import CheckOutProduct from '../checkoutproduct/CheckOutProduct';

import SubTotal  from '../subtotal/SubTotal';

function CheckOut() {
    const [{basket}] = useDataLayerValue();
    return (
        <div className="checkout">
            <div className="checkout__left"> 
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Avicii/September/CatPage/V214721272_IN_WLME_Avicii_LP_pc_1._SX1500_CB406665945_.jpg"/>
                {
                    basket?.length === 0  ? (
                        <div>
                            <h2> your basket is empty add items from product page </h2>
                        </div>
                    ) : (
                        <div> 
                            <h2> your shopping basket </h2>
                            {
                                basket.map( el => { 
                                    return <CheckOutProduct key={el.id} id={el.id} title={el.title} price={el.price} rating={el.rating} image={el.image} />
                                })
                            }
                        </div>
                    )
                }
            </div>
            {
                basket?.length && (
                    <div> 
                        <SubTotal />
                    </div>
                ) 
            }
            
        </div>
        
    )
}

export default CheckOut
