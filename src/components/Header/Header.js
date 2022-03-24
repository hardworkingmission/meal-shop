import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import logo from '../images/logo.jpg'

import './Header.css'

const Header = () => {
    return (
        <div className=''>
            <nav className='flex justify-between  w-5/6 mx-auto h-28 items-center px-3 bg-pink-300 text-2xl font-bold'>
              <div className='logo'>
                  <Link to="/"><img src={logo} alt="" style={{height:'85px',width:'85px'}}/></Link>
              </div>
              <div className="nav-list">
                  <Link to='/shop' className='hover:text-blue-600'>Shop</Link>
              </div>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Header;