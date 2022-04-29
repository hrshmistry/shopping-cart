import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import SearchBar from '../SearchBar'
import { CartState } from "../../context/Context";

const Navbar = () => {
    const { state: { cart } } = CartState();

    return (
        <nav>
            <div className='navigation'>
                <Link to={"/"} className='brand n-1'>Shopping Cart</Link>
                <SearchBar />
                <Link to={"/cart"} className='cart-container n-3'>
                    <ShoppingCart size={32} />
                    {cart.length > 0 &&
                        <div className='badge'>
                            <span>{cart.length}</span>
                        </div>
                    }
                </Link>
            </div>
        </nav>
    )
}

export default Navbar