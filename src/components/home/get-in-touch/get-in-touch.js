import React from 'react'
import Background from '../../../assets/images/tresPantallas 3.png';
import './get-in-touch.css';

const GetInTouch = () => {
  return (
    <section className='get-in-touch background-grey-gradient '>
      <div className='container'>
        <div className='d-flex-center'>
          <div className='text'>
            <div>
              <h2 className='subtitle'>Protect your data from fraud</h2>
              <p className='subsubtitle2'>Make sure your data remains untampered and encrypted. We use cryptography and Blockchain technology to transform your data into fraud-resistant and immediately verifiable credentials.</p>
            </div>
            {/* <div>
                <button className="button is-primary"><a href="#contactUs">Get in touch</a></button>
              </div> */}
            <a href="#contactUs">
              <nav className="button-creative button-primary-creative">
                <ul>
                  <li>
                  Get in touch<span></span><span></span><span></span><span></span>
                  </li>
                </ul>
              </nav>
            </a>
          </div>
          <div className='d-none-622'>
            <img src={Background} className='image' alt='Background' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default GetInTouch