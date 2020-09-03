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
                id={1}
                title={"(Renewed) Samsung Galaxy Note10 Lite (Aura Glow, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"}
                image={"https://images-na.ssl-images-amazon.com/images/I/51sRZk-7P2L._SL1000_.jpg"}
                rating={5}
                price={23}
                />
                <Product 
                id={2}
                title={" Yamaha HS8 Studio Subwoofer "}
                image={"https://images-na.ssl-images-amazon.com/images/I/91gIR1gURYL._SL1500_.jpg"}
                rating={4}
                price={38000}
                />
            </div>
            <div className="home_row">
                <Product 
                id={3}
                title={"Green Soul Monster Ultimate Series (T) Multi-Functional Chair (GS-734U) (Black & Red) (Size - Large)"}
                image={"https://images-na.ssl-images-amazon.com/images/I/61%2BC1QdLtoL._SL1500_.jpg"}
                rating={5}
                price={18000}
                />
                <Product 
                id={4}
                title={"Haier ES 15V E1 15-Litre Water Heater (White)"}
                image={"https://images-na.ssl-images-amazon.com/images/I/21wm0E%2B099L.jpg"}
                rating={4}
                price={800}
                />
                <Product 
                id={5}
                title={"Nutty Gritties Mix Berries - Dried Black Currants, Blueberries, Strawberries and Cranberries - 200GMS"}
                image={"https://images-na.ssl-images-amazon.com/images/I/71mHuIQqS9L._SL1476_.jpg"}
                rating={5}
                price={380}
                />
            </div>

            <div className="home_row">
                <Product 
                id={6}
                title={"Voltas Beko 8 Place Table Top Dishwasher (DT8S, Silver)"}
                image={"https://images-na.ssl-images-amazon.com/images/I/61w8zR6LbJL._SL1500_.jpg"}
                rating={5}
                price={18000}
                />
            </div>
            
        </div>
    )
}

export default Home
