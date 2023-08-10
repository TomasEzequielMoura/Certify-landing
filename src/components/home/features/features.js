import React from 'react'
import './features.css';
import circulo1 from '../../../assets/images/circulo1.png';
import circulo2 from '../../../assets/images/circulo2.png';
import circulo3 from '../../../assets/images/circulo3.png';
import circulo4 from '../../../assets/images/circulo4.png';

const Features = () => {
  return (
    <section id="features" className='background-gradient-blue' style={{ height: 'auto' }}>
      <div className="container container-simil-bootstrap features">
        <div>
          <h2 className='subtitle'>Features</h2>
          <p className='subsubtitle2'>Digital Certificates main characteristics</p>
        </div>

        <div className='cards'>
          <div className="card">
            <div className="img-box">
              <img src={circulo1} alt="AUTHENTICITY" />
            </div>
            <div className="content">
              <div>
                <h2>AUTHENTICITY</h2>
                <p>
                  Trust in the authenticity and validity of the certificates. Authenticity without relying on a centralized authority.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-box">
              <img src={circulo2} alt="DECENTRALIZATION" />
            </div>
            <div className="content">
              <div>
                <h2>DECENTRALIZATION</h2>
                <p>
                  Data is distributed across multiple nodes in the network.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-box">
              <img src={circulo3} alt="IMMUTABILITY" />
            </div>
            <div className="content">
              <div>
                <h2>IMMUTABILITY</h2>
                <p>
                  Tamper-proof and cannot be altered or deleted, providing a permanent and record of achievements.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-box">
              <img src={circulo4} alt="METADATA" />
            </div>
            <div className="content">
              <div>
                <h2>METADATA</h2>
                <p>
                  Digital certificates can include additional metadata to provide more information and context.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features