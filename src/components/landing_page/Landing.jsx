import React from 'react'
import './landing.css'
import { BsArrowDownShort} from 'react-icons/bs'
import Picture from './Picture'
import Next from './Next'
import Footer from '../reusable/footer/Footer'
import NavBar from '../nav_bar/NavBar'




const Landing = () => {
 
  return (
    <>
    <NavBar />
    <div id='main-container'>
        <div id='second-container'>
            <div className="empty-container">
               
            </div>
            <div className="empty-write-up">
               
            </div>
            <div className="main-write-up">
                <h2>Welcome to</h2>
                <div style={{ height: '40%', width: '40%'}}></div>
                <h3>The <span style={{ color: "#FFF212"}}>Victorious </span>Family</h3>
            </div>
           
            <div style={{height: "40vh"}}></div>
            <div className="icon">
                <BsArrowDownShort size={50} style={{ color: "white", margin: '0 55rem', cursor: 'pointer'}}/>
            </div>
        </div>
    </div>
    <Picture/>
    <Next/>
    <Footer/>
    </>
  )
}

export default Landing