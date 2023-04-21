import React from 'react'
import './navbar.css'
import whiteLogo from './../assets/images/whiteLogo.png'
import {  useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()

  return (
    <nav id='navbar'>
        <div className='nav-bar-second'>
            <div className='logo-name'>
                <img src={whiteLogo} alt='church-logo'/>
                    <div className="church-name">
                        <h3>VICTORIOUS</h3>
                        <p>NATION CHURCH</p>
                    </div>
            </div>
            <div className='empty-div'></div>
            <div className='menu-bars'>
                <div> 
                <h4 onClick={()=> navigate('/')}>Home</h4>
                </div>
                <div>
                    <h4>About VNC</h4>
                </div>
                <div>
                    <h4 onClick={()=> navigate('./campuses')}>Campuses</h4>
                </div>
                <div>
                     <h4>Contact Us</h4>
                </div>
            </div>
            <div className='btn'>
                
                <button onClick={() => navigate('/donate')}>Give</button>
            </div>
        </div>
    </nav>
  )
}

export default NavBar