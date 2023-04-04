import React from 'react'
import './secondNextPage.css'
import VNCLogo from './../assets/images/VNCLogo.png'
import opu from './../assets/images/opu.png'


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
                    <div className="first-service-div"></div>
                    <div style={{width: '50px'}}/>
                    <div className="second-service-div"></div>
                    <div style={{width: '50px'}}/>
                    <div className="third-service-div"></div>
                    <div style={{width: '50px'}}/>
                    <div className="fourth-service-div"></div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default SecondNextPage