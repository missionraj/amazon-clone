import React from 'react'
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useDataLayerValue } from '../StateProvider'

function Product({id,title, price, rating, image}) {
    const [state, dispatch ] = useDataLayerValue();
    const addToBasket = () => { 
        // add to basket
        dispatch({
            type:'ADD_TO_BASKET',
            item : { 
                id:id,
                price:price,
                title:title,
                rating:rating,
                image:image
            }
        });
    } 
    return (
        <div className="product">
            <div className="product__info"> 
                <p>{title}</p>
                <p className="product__price">
                    <small> Rs </small>
                    <strong> { price } </strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_)=><StarIcon className="product__star"/>)
                    }
                </div>
            </div>  
            <img src={image} alt="" />
            <button onClick={addToBasket}> Add To basket </button>          
        </div>
    )
}

export default Product
