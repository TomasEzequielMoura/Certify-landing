import React from 'react'
import IntroPic from '../../../assets/images/intro.png';
import './intro.css';

const Intro = () => {
  return (
    <>
      <div className='container intro'>
        <div className="columns">
          <div className="column">
            <h1 className='title'>
              Secure digital<br /> certificates and<br /> academic credentials
            </h1>
            <div>
              {/* <div>
                <button className="button is-primary"><a href="#contactUs">Discover our services</a></button>
              </div> */}
              <a href="#contactUs">
                <nav className="button-creative button-primary-creative">
                  <ul>
                    <li>
                      Discover our services<span></span><span></span><span></span><span></span>
                    </li>
                  </ul>
                </nav>
              </a>
            </div>
          </div>
          <div className="column">
            <img src={IntroPic} alt='certificate' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro