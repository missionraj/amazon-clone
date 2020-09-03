import React from 'react';
import './SubTotal.css';

import CurrencyFormat from 'react-currency-format';
import { useDataLayerValue } from '../StateProvider'
import {getBasketTotal} from '../reducer'
function SubTotal() {
    const [{basket}] = useDataLayerValue();
    return (
        <div className="subtotal">
            <div> 
                SubTotal (2 items) : {getBasketTotal(basket)}
            </div>
            <small className="subtotal__gift"> 
                <input type="checkbox" />  This order contains gift
            </small>
            <button> Procced to Checkout </button>
        </div>
    )
}

export default SubTotal
