import React from 'react'
import NFT from '../../../assets/images/unsplash_TyanDMPxwHc.png';
import Linkedin from '../../../assets/images/Linkedin.png';
import Telegram from '../../../assets/images/telegram.png';
import Twitter from '../../../assets/images/Twitter.png';
import Instagram from '../../../assets/images/Instagram.png';
import './contact-us.css';


const ContactUs = () => {
  return (
    <>
      <section className='background-grey pb-5' id='contactUs'>
        <div className='container'>
          <div className='columns'>
            <div className='column d-none-622'>
              <img src={NFT} className='image' alt='Background' />
            </div>
            <div className='column contact-form'>
              <div className='full-size'>
                <h2 className='subtitle'>Contact Us</h2>
                <div className="field">
                  <label className="label">Full Name</label>
                  <div className="control has-icons-left">
                    <input className="input" type="text" placeholder="Full Name" />
                    <span className="icon is-left">
                      <i className="rbc-icon github"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">E-mail</label>
                  <div className="control has-icons-left">
                    <input className="input" type="password" placeholder="E-mail" />
                    <span className="icon is-left">
                      <i className="rbc-icon lock"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Message</label>
                  <div className="control has-icons-left">
                    <textarea class="textarea" placeholder="Message"></textarea>
                    <span className="icon is-left">
                      <i className="rbc-icon lock"></i>
                    </span>
                  </div>
                </div>
                {/* <div className="buttons">
                  <button className="is-primary is-rounded is-fullwidth button" tabindex="0">Login</button>
                </div> */}
                <a href="#contactUs">
                  <nav className="button-creative button-primary-creative">
                    <ul>
                      <li>
                        Contact us<span></span><span></span><span></span><span></span>
                      </li>
                    </ul>
                  </nav>
                </a>

              </div>
            </div>
            <div className='column'>
              <div>
                <h6>
                  Contact
                </h6>
                <p>
                  hello@dappsfactory.io
                </p>
              </div>
              <div>
                <h6>
                  Based in
                </h6>
                <p>
                  Buenos Aires, Argentina
                </p>
              </div>
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
    </>
  )
}

export default ContactUs