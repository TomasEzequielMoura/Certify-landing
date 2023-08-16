import React from 'react'
import Box from '../../../assets/images/box-plan.png';
import BlueBox from '../../../assets/images/caja azul.png';
import GreenBox from '../../../assets/images/caja verde.png';
import VioletBox from '../../../assets/images/caja violeta.png';
import Tilde from '../../../assets/images/tilde.png';
import './choose-your-plan.css';

const ChooseYourPlan = () => {
  return (
    <>
      <div id="pricing" className='container choose-your-plan'>
        <div>
          <h2 className='subtitle'>Choose Your Plan</h2>
          <p className='subsubtitle2'>Choose the package that is best for your business and needs</p>
        </div>
        <div className='d-flex'>
          <div className="card">
            <div className="card-content">
              <div className='mb-3'>
                <div className="d-flex-centrado">
                  <figure className="image">
                    <img src={GreenBox} alt="Placeholder image" />
                  </figure>
                </div>
                <h3 className='mt-5 mb-5'>
                  Basic Plan
                </h3>
                <table className='tabla-tilde'>
                  <tbody>
                    <tr>
                      <td><img src={Tilde} alt='tilde' /></td>
                      <td><p>Unlimited Bandwitch</p></td>
                    </tr>
                    <tr>
                      <td><img src={Tilde} alt='tilde' /></td>
                      <td><p>Encrypted Connection</p></td>
                    </tr>
                    <tr>
                      <td><img src={Tilde} alt='tilde' /></td>
                      <td><p>No Traffic Logs</p></td>
                    </tr>
                    <tr>
                      <td><img src={Tilde} alt='tilde' /></td>
                      <td><p>Works on All Devices</p></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <div>
                <button className="button is-primary"><a href="#contactUs">Discover our services</a></button>
              </div> */}
              <a href="#contactUs">
                <nav className="button-creative button-green-creative">
                  <ul>
                    <li>
                      Discover our services<span></span><span></span><span></span><span></span>
                    </li>
                  </ul>
                </nav>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className='mb-3'>
                <div className="d-flex-centrado">
                  <figure className="image">
                    <img src={VioletBox} alt="Placeholder image" />
                  </figure>
                </div>
                <h3 className='mt-5 mb-5'>
                  Standard Plan
                </h3>
                <table className='tabla-tilde'>
                  <tbody>
                    <tr>
                      <td><img src={Tilde} alt='tilde' /></td>
                      <td><p>Unlimited Bandwitch</p></td>
                    </tr>
                    <tr>
                      <td><img src={Tilde} alt='tilde' /></td>
                      <td><p>Encrypted Connection</p></td>
                    </tr>
                    <tr>
                      <td><img src={Tilde} alt='tilde' /></td>
                      <td><p>No Traffic Logs</p></td>
                    </tr>
                    <tr>
                      <td><img src={Tilde} alt='tilde' /></td>
                      <td><p>Works on All Devices</p></td>
                    </tr>
                    <tr>
                      <td><img src={Tilde} alt='tilde' /></td>
                      <td><p>Connect Anywhere</p></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <div>
                <button className="button is-primary"><a href="#contactUs">Discover our services</a></button>
              </div> */}
              <a href="#contactUs">
                <nav className="button-creative button-violet-creative">
                  <ul>
                    <li>
                      Discover our services<span></span><span></span><span></span><span></span>
                    </li>
                  </ul>
                </nav>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className='mb-3'>
                <div className="d-flex-centrado">
                  <figure className="image">
                    <img src={BlueBox} alt="Placeholder image" />
                  </figure>
                </div>
                <h3 className='mt-5 mb-5'>
                  Premium Plan
                </h3>
                <table className='tabla-tilde'>
                  <tbody>
                    <tr>
                      <td><img src={Tilde} alt='tilde' /></td>
                      <td><p>Unlimited Bandwitch</p></td>
                    </tr>
                    <tr>
                      <td><img src={Tilde} alt='tilde' /></td>
                      <td><p>Encrypted Connection</p></td>
                    </tr>
                    <tr>
                      <td><img src={Tilde} alt='tilde' /></td>
                      <td><p>No Traffic Logs</p></td>
                    </tr>
                    <tr>
                      <td><img src={Tilde} alt='tilde' /></td>
                      <td><p>Works on All Devices</p></td>
                    </tr>
                    <tr>
                      <td><img src={Tilde} alt='tilde' /></td>
                      <td><p>Connect Anywhere</p></td>
                    </tr>
                    <tr>
                      <td><img src={Tilde} alt='tilde' /></td>
                      <td><p>Get New Features</p></td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
        </div>
      </div>

    </>
  )
}

export default ChooseYourPlan