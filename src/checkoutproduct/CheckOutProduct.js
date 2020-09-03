import React from 'react';
import StarIcon from '@material-ui/icons/Star';

import './CheckOutProduct.css';
import { useDataLayerValue } from '../StateProvider'
function CheckOutProduct({id, title, price, image, rating}) {
    const [{basket}, dispatch] =  useDataLayerValue();
    
     
    const removeFromBasket = () => { 
        console.log('remove from basket is called');
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info"> 
                <p className="checkoutProduct__title"> { title}</p>
                <p className="checkoutProduct__price"> 
                    <small> Rs </small>
                    <strong> { price } </strong>
                </p>
                <div> 
                    {
                        Array(rating).fill().map( (_,index) => <StarIcon key={index} className="checkoutProduct__star" /> )
                    }
                </div>
                <button onClick={removeFromBasket} >Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckOutProduct
