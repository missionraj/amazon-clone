import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { useDataLayerValue } from '../StateProvider';

function Header() {
    const [ { basket } ] = useDataLayerValue() 
    return (
        <nav className="header">
            <Link to="/" >
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" className="header__logo"/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" alt="" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link  to="/login" className="header__link"> 
                    <div className="header__option"> 
                        <span className="header__optionLineOne"> Hello Qazi </span> 
                        <span className="header__optionLineTwo"> Sign In </span>     
                    </div>
                </Link>
                <Link  to="/login" className="header__link"> 
                    <div className="header__option"> 
                        <span className="header__optionLineOne"> Returns </span> 
                        <span className="header__optionLineTwo"> Orders </span>     
                    </div>
                </Link>
                <Link  to="/login" className="header__link"> 
                    <div className="header__option"> 
                        <span className="header__optionLineOne"> Try </span> 
                        <span className="header__optionLineTwo"> Prime </span>     
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                          <ShoppingCartIcon /> 
                          <span className="header__optionLineTwo "> {basket.length} </span>  
                    </div>
                </Link> 
            </div>

        </nav>
    )
}

export default Header
