import React from 'react'
import LogoHeader from '../../assets/images/logo-header.png';
import './footer.css';
import Linkedin from '../../assets/images/LinkedinGrey.png';
import Telegram from '../../assets/images/telegramGrey.png';
import Twitter from '../../assets/images/TwitterGrey.png';
import Instagram from '../../assets/images/InstagramGrey.png';

const Footer = () => {

  return (
    <section className='background-grey footer'>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <div className='d-flex-center'>
              <a className="navbar-item"><img src={LogoHeader} /></a>Certify<b>FOREVER</b>
            </div>
            <p>Certifyforever by Dapps Factory</p>
          </div>
          <div className='column'>
            <h6>Product</h6>
            <a href="#digitalCertificates">Digital Certificates</a>
            <a href="#features">Features</a>
            <a href="#blog">Blog</a>
            <a href="#reviews">Reviews</a>
          </div>
          {/* <div className='column'>
            <h6>Info</h6>
            <a>About Us</a>
            <a>FAQ</a>
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
          </div> */}
          <div className='column'>
            <h6>Dapps Factory</h6>
            <a href="https://dappsfactory.io/" target="_blank">About us</a>
            <a href="https://dappsfactory.io/#contact" target="_blank">Contact us</a>

            {/* <div className='d-flex'>
              <img src={Linkedin} className='image' alt='Background' />
              <img src={Telegram} className='image' alt='Background' />
              <img src={Twitter} className='image' alt='Background' />
              <img src={Instagram} className='image' alt='Background' />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer