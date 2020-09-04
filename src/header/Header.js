import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { useDataLayerValue } from '../StateProvider';
import { auth } from '../firebase'

function Header() {
    const [ { basket ,user} ] = useDataLayerValue();
    
    const login = () => {
        if(user){
            auth.signOut();
        }
    }
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
                <Link  to={!user && "/login"} className="header__link"> 
                    <div onClick={login} className="header__option"> 
                        <span className="header__optionLineOne"> Hello {user?.email} </span> 
                        <span className="header__optionLineTwo"> {!user ? 'Sign In' : 'Sign Out'} </span>     
                    </div>
                </Link>
                <Link  to={!user && "/login"} className="header__link"> 
                    <div className="header__option"> 
                        <span className="header__optionLineOne"> Returns </span> 
                        <span className="header__optionLineTwo"> Orders </span>     
                    </div>
                </Link>
                <Link  to={!user && "/login"} className="header__link"> 
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
