import React from 'react';

import './Home.css';
import '../product/Product'
import Product from '../product/Product';

function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" alt="" className="home__image" /> 
            <div className="home_row">
                <Product 
                id={123}
                title={"(Renewed) Samsung Galaxy Note10 Lite (Aura Glow, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"}
                image={"https://images-na.ssl-images-amazon.com/images/I/51sRZk-7P2L._SL1000_.jpg"}
                rating={5}
                price={23}
                />
                <Product 
                id={123}
                title={"(Renewed) Samsung Galaxy Note10 Lite (Aura Glow, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"}
                image={"https://images-na.ssl-images-amazon.com/images/I/51sRZk-7P2L._SL1000_.jpg"}
                rating={5}
                price={23}
                />
            </div>
        </div>
    )
}

export default Home
