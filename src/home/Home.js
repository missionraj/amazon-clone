import React from 'react'

import './Home.css';
import '../product/Product'
import Product from '../product/Product';
function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" alt="" className="home__image" /> 
            <Product 
            id="123"
            title="123"
            image="123"
            id="123"
            />
        </div>
    )
}

export default Home
