import * as React from 'react';
import "./nav.css"

import Logo from "../../assets/logo.png"

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

import {Link} from "react-router-dom"

function Nav({rightt, setRight}) {
  let [showSearch, setShowSearch] = React.useState(false)
  let handleClick = () => {
    window.scrollTo({top: 0})
    setRight(false) 
  }
  return (
    <nav>
      <div className="logo"><Link to="/"><img onClick={handleClick} className="logoImg" src={Logo} alt="logo" /></Link></div>
      <div className="main">
        <ul className="links">
          <div><Link to="/"><li className="mainLi" onClick={handleClick}>Home</li></Link></div>
          <div><li className="mainLi">Pages <ul className='ulA'>
          <Link to="/gallery"><li onClick={handleClick}>Gallery</li></Link>
          <Link to="/services"><li onClick={handleClick}>Services Page</li></Link>
          <Link to="/servicesDetails"><li onClick={handleClick}>Services Details</li></Link>
            </ul></li></div>
          <div><li className="mainLi">Blog <ul className='ulA'>
          <Link to="/blogOne"><li onClick={handleClick}>Blog One</li></Link>
          <Link to="/blogTwo"><li onClick={handleClick}>Blog Two</li></Link>
          <Link to="/blogDetails"><li onClick={handleClick}>Blog Details</li></Link>
            </ul></li></div>
          <div><li className="mainLi">Shop <ul className='ulA'>
            <Link to="/products"><li onClick={handleClick}>Shop</li></Link>
            <Link to="/shopDetails"><li onClick={handleClick}>Shop Details</li></Link>
            <Link to="/cart"><li onClick={handleClick}>Shop Cart</li></Link>
            <Link to="/checkout"><li onClick={handleClick}>Checkout</li></Link>
            </ul></li></div>
          <div><Link to="/contact"><li onClick={handleClick} className="mainLi">Contact</li></Link></div>
        </ul>
        <div className="icons">
          <i className="icon" onClick={() => setShowSearch(!showSearch)}><SearchIcon /></i>
          <Link to="/cart"><i onClick={handleClick} className="icon"><ShoppingCartIcon /></i></Link>
        </div>
        <div className="toggle">
          <MenuIcon onClick={() => setRight(true)} />
        </div>
      </div>
      <div className='searchThings' style={showSearch ? {display: "flex"} : {display: "none"}}>
        <input type="text" placeholder='Search...'/>
        <SearchIcon />
      </div>
    </nav>
  )
}

export default Nav;