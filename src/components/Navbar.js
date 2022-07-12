import React, { useState , useEffect }from 'react';
import './css/Navbar.css';
import Logo from '../assets/images/Plane.svg';
import Login from '../assets/images/Login.svg';
import Burger from '../assets/images/burger.svg';

const Navbar = () => {

  const [mobile, setMobile] = useState(true);
  
  const resize = () => {
    if (window.screen.width > 1000) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }

  useEffect(() => {
    resize();
  }, [])

  window.addEventListener('resize', resize);

  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <img src={Logo} alt="Logo de TravelGo" />
        { mobile ? null : <a href="#TravelGo"><h1>TravelGo</h1></a>}
      </div>
      {mobile ? null
        :
      <ul className='navbar-menu'>
        <a href="#Home"><li><span id="highlight">Home</span></li></a>
        <a href="#About"><li><span id="highlight">About</span></li></a>
        <a href="#Pricing"><li><span id="highlight">Pricing</span></li></a>
        <a href="#Contact"><li><span id="highlight">Contact</span></li></a>
        <a href="#Blog"><li><span id="highlight">Blog</span></li></a>
      </ul>
       }
      {mobile ?
        <button style={{
          background: 'none',
          border: 'none',
          marginRight:'1rem'
        }}>
          <img src={Burger} alt='menu-burger'/>
        </button>
        :
        <div className='navbar-login'>
        <input type="text" className='navbar-login-search' />
        <a href="#login">
          <img src={Login} alt="" />
        </a>
        </div>
      }
    </div>
  )
}

export default Navbar