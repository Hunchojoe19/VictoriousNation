import React from 'react'
import { BsArrowDownShort } from 'react-icons/bs'
import NavBar from '../nav_bar/NavBar'
import SecondNextPage from './SecondNextPage'
import './secondPage.css'

const SecondPage = () => {
  return (
    <div>
        <NavBar/>
        <div className='second-page-container'>
            <div className="second-page-details-container">
                <div className="second-page-empty-div">

                </div>
                <div className="second-page-write-up">
                    <div className="another-emoty-div-second"></div>
                    <div>

                    <div className="same-church">
                        <h3>Same <span>Church,</span></h3>
                    </div>
                    <div className="different-location">
                        <h3>Different <span>Locations.</span></h3>
                    </div>
                    </div>
                </div>
                <div className="second-icon-div">
                    <BsArrowDownShort size={50} style={{ color: "white", margin: '0 55rem', cursor: 'pointer'}}/>
                </div>
            </div>
            <div className='secondNextPage'>
                <SecondNextPage/>
            </div>
        </div>
    </div>
  )
}

export default SecondPage