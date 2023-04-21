import React from 'react'
import './givePage.css'
import NavBar from '../nav_bar/NavBar'
import taskForce from './../assets/images/taskForce.png'
import ignite from './../assets/images/ignite.png'
import healthChat from './../assets/images/healthChat.png'
import Footer from '../reusable/footer/Footer'

const GivePage = () => {
  return (
    <div className='givePage-main_container'>
        <NavBar/>
        <div className='givePage-second_container'>
              <div className="second-page-empty-div">

                </div>
                <div className="second-page-write-up">
                    <div className="another-emoty-div-second"></div>
                    <div>

                    <div className="same-church">
                        <h3>Giving <span>Generously,</span></h3>
                    </div>
                    <div className="different-location">
                        <h3>Reaping <span>Victoriously.</span></h3>
                    </div>
                    </div>
                </div>
        </div>
        <div style={{ height: '100px'}}/>
        <div className="givePage-writeup">
          <h2>THANK YOU FOR YOUR GENEROUSITY</h2>
        </div>
        <div className='give-p'>
          <p>We appreciate you for taking ownership in what God is doing through the VNC.
            Your giving is making a difference in this church, our community, and the world.
            We are sure that God’s promises will be fulfilled through your generosity.
            Please choose a fund to give towards and enter an amount for your gift.</p>
        </div>
        <div style={{ height: '50px'}}/>
        <div className='give_page-cards'>
          <div className='first-card-gp'>
            <img src={taskForce} alt='taskforce-logo'/>
          </div>
          <div/>
          <div className='second-card-gp'>
            <img src={ignite} alt="mentorship-logo"/>
          </div>
          <div/>
          <div className='last-card-gp'>
            <img src={healthChat} alt="health-logo"/>
          </div>
        </div>
        <div style={{ height: '500px'}}/>
        <div className="footer">
          <Footer/>
        </div>
    </div>
  )
}

export default GivePage