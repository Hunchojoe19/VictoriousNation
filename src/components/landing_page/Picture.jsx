import React from 'react'
import './picture.css'
import JoePhoto from './../assets/images/JoePhoto.png'

const Picture = () => {
  return (
    <div className='picture-container'>
        <div className='picture-second'>
            <div className='details-container'>
                <div className="image-cover">
                    <img src={JoePhoto} alt='Pastor Joseph and Jorgina'/>   
                </div>
                <div className="about-vnc">
                    <h2>Pastor Joseph & Jorgina Ante</h2>
                    <p>Here at the VNC, our message and mission is simply to help connect people to the life giving message of Jesus Christ by creating an atmosphere of effective spiritual transformation. Jesus Christ is the head of our church, and His Word is the standard for how we live — as individuals and as God’s family.</p>

                        
                       <p id='paragraph'> We’re all about people because God is all about people. One of the ways we express our love for Him is through our love for people. We want to serve the world around us, that is why we pursue Love in all things; it’s why we support missions all across the globe.

                        We both celebrate and challenge the culture around us as we orient our lives around Jesus.
                        Regardless of what your next step in faith is, we want you to know that you’re not alone; we want to help you take that next step
                        into your VICTORY!
                        
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Picture