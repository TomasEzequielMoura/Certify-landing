import React, { useEffect, useState } from "react";
import './header.css';
import LogoHeader from '../../assets/images/logo-header.png';

const Header = () => {

  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="border-bottom">
        <div className="container">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img src={LogoHeader} />
              </a>
              Certify<b>FOREVER</b>
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
                <a className="navbar-item">
                  Home
                </a>

                <a className="navbar-item">
                  Features
                </a>

                <a className="navbar-item">
                  Pricing
                </a>

                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <a className="button is-primary">
                        <strong>Contact Us</strong>
                      </a>
                      <a className="button is-light">
                        Log in
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div> */}
            </div>
          </nav>
        </div>
      </div>

    </>
  )
}

export default Header;