import React from 'react';
import "./header.css";
import { Search, AddCircleOutlineRounded, Storefront ,Person ,KeyboardArrowDown, ShoppingCartOutlined, MoreVertSharp} from '@mui/icons-material';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light';
import LoginT from './LoginT';

export default function Header() {
  return (
    <div className='header'>
        <div className="firstHeader">
            {/* Logo and title */}
            <h2 className='logo'>Flipkart</h2>
            <div className="firstHeaderText">
            <span>Explore</span>
            <span className='yellowText'>Plus</span>
        < AddCircleOutlineRounded className='yellowText' style={{ fontSize: '15px', paddingTop:'3px'}}/>
            </div>
           
        </div>
        <div className="secondHeader">
            {/* Search bar and icon */}
            <div className="searchBar">
            <Search style={{ padding: '5px', fontSize: '30px', backgroundColor:'8f9db631'}} />
                <input type="text" placeholder='Search for Products, Brands and More' style={{ border: 'none' }} />
            </div>
        </div>
        <div className="thirdHeader">
            {/* Become a seller */}
            < Storefront />
            <span className="seller">Become a seller</span>
        </div>
        <div className="fourthHeader">
            {/* Signin */}
            <Tippy theme='light' visible={true} content={<LoginT></LoginT>} interactive={true}>
                <Person /> 
                <span >Sign in</span>
                <KeyboardArrowDown />
            </Tippy>
            
        </div>
        <div className="fifthHeader">
            {/* cart */}
            <ShoppingCartOutlined />
            <span>Cart</span>
        </div>
        <div className="sixthHeader">
            {/* More */}
            < MoreVertSharp />
        </div>
    </div>
  )
}
