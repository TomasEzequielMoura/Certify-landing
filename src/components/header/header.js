import React, { useEffect, useState } from "react";
import './header.css';
import LogoHeader from '../../assets/images/logo-header.png';

const Header = () => {

  const [isActive, setIsActive] = useState(false);
  return (
    <header>
      <div className="border-bottom">
        <div className="container">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item"><img src={LogoHeader} /></a>Certify<b>FOREVER</b>
              <a role="button" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => {
                setIsActive(!isActive);
              }} className={`navbar-burger burger ${isActive ? "is-active" : ""}`}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
              <div className="navbar-end">
                <a className="navbar-item" >
                  Home
                </a>

                <a className="navbar-item" href="#features">
                  Features
                </a>

                <a className="navbar-item" href="#pricing">
                  Pricing
                </a>

                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">

                      {/* <a className="button is-primary" href="#contactUs">
                        <strong>Contact Us</strong></a> */}
                      <a href="#contactUs">
                        <nav className="button-creative button-primary-creative">
                          <ul>
                            <li>
                              Contact Us <span></span><span></span><span></span><span></span>
                            </li>
                          </ul>
                        </nav>
                      </a>
                      <a href="https://certifyforever.com/login" target="_blank">
                        <nav className="button-creative button-secondary-creative">
                          <ul>
                            <li>
                            Log in <span></span><span></span><span></span><span></span>
                            </li>
                          </ul>
                        </nav>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

    </header>
  )
}

export default Header;