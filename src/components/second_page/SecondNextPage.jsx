import React from 'react'
import './secondNextPage.css'
import VNCLogo from './../assets/images/VNCLogo.png'
import opu from './../assets/images/opu.png'
import {IoMdTime} from 'react-icons/io'
import {RiMapPin3Line} from 'react-icons/ri'
import Footer from './../reusable/footer/Footer'


const SecondNextPage = () => {
  return (
    <div className='secondNext-container'>
        <div className="secondNext-new-container">
            <div className="secondpage-empty"> 
            </div>
            <div className="div-for-cards">
              <div className="empty-divs-snp"></div>
              <div className="first-card-snp">
                <div className="first-card-details">
                  <div className="first-card-logo">
                      <img src={VNCLogo} alt="logo" />
                  </div>
                  <div style={{ width: '1px', height: '190px', marginTop: '.5rem', border: "1px solid #4A044F"}}/>
                  <div className="first-card-div">
                    <div className="p-div">
                      <p>Online campus</p>
                    </div>
                    <div className="button-div">
                      <button>Join Online</button>
                    </div>
                  </div>
                </div>
                <div className="first-card-write-up">
                  <p>Pastor Joseph & Jorgina Ante</p>
                  <div className="address-p">
                  <p>2936 A Griffin Ln Heartland, TX 75126 <br/> +1 (469) 514-0855</p>
                </div>
                </div>
              </div>
              <div className="div" style={{ width: '50px'}}></div>
              <div className="second-card-snp">
                <div className="first-card-details">
                  <div className="first-card-logo">
                      <img src={VNCLogo} alt="logo" />
                      <div style={{ height: '15px'}}></div>
                      <p>
                        Tehilah City
                      </p>
                  </div>
                  <div style={{ width: '1px', height: '190px', marginTop: '.5rem', border: "1px solid #4A044F"}}/>
                  <div className="first-card-div">
                   <img src={opu} alt="opulent" />
                  </div>
                </div>
                <div className="first-card-write-up">
                  <p>Pastor Opulent & Gift Emmanuel</p>
                  <div className="address-p">
                  <p>37, Mary Hanney Rd, Oron, Akwa-Ibom State <br/> +234 706-484-8253</p>
                </div>
                </div>
              </div>
              <div className="div" style={{ width: '50px'}}></div>
              <div className="third-card-snp">
                  <div className="first-card-details">
                  <div className="first-card-logo">
                      <img src={VNCLogo} alt="logo" />
                      <div style={{ height: '15px'}}></div>
                      <p>
                       Shiloh City
                      </p>
                  </div>
                  <div style={{ width: '1px', height: '190px', marginTop: '.5rem', border: "1px solid #4A044F"}}/>
                  <div className="first-card-div">
                   {/* <img src={opu} alt="opulent" /> */}
                  </div>
                </div>
                <div className="first-card-write-up">
                  <p>Pastor Royal seed</p>
                  <div className="address-p">
                  <p>Kunkujang Mariama, The Gambia <br/> +220-384-1258</p>
                </div>
                </div>
              </div>
            </div>
            <div style={{height: '200px'}}></div>
            <div className="events-div">
                  <div className="upcoming-services">
                    <p>Upcoming Services</p>
                  </div>
                  <div className="upcoming-services-div">
                    <div style={{ width: '240px'}}/>
                    <div className="first-service-div">
                      <div style={{height: '20px'}}></div>
                      <div className="div1">
                          <h2>This Month</h2>
                      </div>
                      <div className="div2">
                        <p>
                          sunday services
                        </p>
                      </div>
                      <div className="div3">
                        <p>1st - NEW BEGINNINGS</p>
                        <p>2nd - KINGDOM DOMINION</p>
                        <p>3rd - FAMILY LIFE</p>
                        <p>4th - UPPER ROOM ENCOUNTER</p>
                        <p>5th - BUSINESS/YOUTH</p>
                      </div>
                      <div className="time-housing-div">
                        <div style={{ width: '50px'}}/>
                      <div className="time">
                        <IoMdTime size={20}/>
                      </div>
                      <div style={{width: '10px'}}/>
                      <div className='servie-details'>
                        <p>
                          1st Service - 07:00 GMT +1
                        </p>
                        <p>
                          2nd Service - 08:30 GMT +1
                        </p>
                      </div>
                      </div>
                      <div className="time-housing-div">
                        <div style={{ width: '50px'}}/>
                      <div className="time">
                        <RiMapPin3Line size={20}/>
                      </div>
                      <div style={{width: '10px'}}/>
                      <div className='servie-details'>
                        <p>
                          37, Mary Hanney Rd, Oron,
                        </p>
                        <p>
                          Akwa-Ibom State, Nigeria. 
                        </p>
                      </div>
                      </div>
                    </div>
                    <div style={{width: '50px'}}/>
                    <div className="second-service-div">
                      <div style={{height: '20px'}}></div>
                      <div className="div1">
                          <h2>This Month</h2>
                      </div>
                      <div className="div2">
                        <p>
                          Upcoming Events
                        </p>
                      </div>
                      <div className="div3">
                        <p>DINNER WITH JESUS</p>
                        
                      </div>
                      <div className="time-housing-div">
                        <div style={{ width: '50px'}}/>
                      <div className="time">
                        <IoMdTime size={20}/>
                      </div>
                      <div style={{width: '10px'}}/>
                      <div className='servie-details'>
                        <p>
                         Fridays 17:30 GMT +1
                        </p>
                      </div>
                      </div>
                      <div className="time-housing-div">
                        <div style={{ width: '50px'}}/>
                      <div className="time">
                        <RiMapPin3Line size={20}/>
                      </div>
                      <div style={{width: '10px'}}/>
                      <div className='servie-details'>
                        <p>
                          37, Mary Hanney Rd, Oron,
                        </p>
                        <p>
                          Akwa-Ibom State, Nigeria. 
                        </p>
                      </div>
                      </div>
                    </div>
                    <div style={{width: '50px'}}/>
                    <div className="third-service-div">
                      <div style={{height: '20px'}}></div>
                      <div className="div1">
                          <h2>This Month</h2>
                      </div>
                      <div className="div2">
                        <p>
                          Upcoming Events
                        </p>
                      </div>
                      <div className="div3">
                        <p>THERE IS NOTHING IMPOSSIBLE</p>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                        
                      </div>
                      <div className="time-housing-div">
                        <div style={{ width: '50px'}}/>
                      <div className="time">
                        <IoMdTime size={20}/>
                      </div>
                      <div style={{width: '10px'}}/>
                      <div className='servie-details'>
                        <p>
                          Friday 23:39 IST 
                        </p>
                        <p>
                          Saturday 11:20 ISD
                        </p>
                      </div>
                      </div>
                      <div className="time-housing-div">
                        <div style={{ width: '50px'}}/>
                      <div className="time">
                        <RiMapPin3Line size={20}/>
                      </div>
                      <div style={{width: '10px'}}/>
                      <div className='servie-details'>
                        <p>
                          No 233 Main St. New York,
                        </p>
                        <p>
                           United States.
                        </p>
                      </div>
                      </div>
                    </div>
                    <div style={{width: '50px'}}/>
                    <div className="fourth-service-div">
                      <div style={{height: '20px'}}></div>
                      <div className="div1">
                          <h2>This Month</h2>
                      </div>
                      <div className="div2">
                        <p>
                          Upcoming Events
                        </p>
                      </div>
                      <div className="div3">
                        <p>Celebrating freedom and life</p>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                      </div>
                      <div className="time-housing-div">
                        <div style={{ width: '50px'}}/>
                      <div className="time">
                        <IoMdTime size={20}/>
                      </div>
                      <div style={{width: '10px'}}/>
                      <div className='servie-details'>
                        <p>
                          1st Service - 07:00 GMT +1
                        </p>
                        <p>
                          2nd Service - 08:30 GMT +1
                        </p>
                      </div>
                      </div>
                      <div className="time-housing-div">
                        <div style={{ width: '50px'}}/>
                      <div className="time">
                        <RiMapPin3Line size={20}/>
                      </div>
                      <div style={{width: '10px'}}/>
                      <div className='servie-details'>
                        <p>
                          37, Mary Hanney Rd, Oron,
                        </p>
                        <p>
                          Akwa-Ibom State, Nigeria. 
                        </p>
                      </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div style={{height: "50px"}}/>
            <Footer/>
        </div>
    </div>
  )
}

export default SecondNextPage