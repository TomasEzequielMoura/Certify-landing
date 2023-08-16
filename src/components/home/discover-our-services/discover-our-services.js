import React from 'react'
import Cellphone from '../../../assets/images/image44.png';
import Candado from '../../../assets/images/candado.png';
import Escudo from '../../../assets/images/escudo.png';
import Ciclo from '../../../assets/images/ciclo.png';
import './discover-our-services.css';

const DiscoverOurServices = () => {
  return (
    <section className='discover-our-services'>
      <div className='container'>
        <div className='d-flex mb-6'>
          <div className='d-flex-centrado flex-same-size'>
            <div className='d-flex direction-row align-center'>
              <img src={Candado} alt='Candado' className='emoji' />
              <div className='d-flex-column '>
                <h3>
                  AUTHENTICITY
                </h3>
                <p>
                  Helps to establish the authenticity of documents. By recording the ownership it is possible to ensure that they are genuine.
                </p>
              </div>
            </div>
            <div className='d-flex direction-row align-center'>
              <img src={Escudo} alt='Candado' className='emoji' />
              <div className='d-flex-column'>
                <h3>
                  SECURITY / NON REPUDIATION
                </h3>
                <p>
                  The use of cryptographic techniques provides an additional layer of security, to prevent fraud and ensure the authenticity.
                </p>
              </div>
            </div>
            <div className='d-flex direction-row align-center'>
              <img src={Candado} alt='Candado' className='emoji' />
              <div className='d-flex-column'>
                <h3>
                  TRANSPARENCY
                </h3>
                <p>
                  Transparent and immutable record of all transactions. Authenticity can be verified without the need for a trusted third party
                </p>
              </div>
            </div>
          </div>
          <div className='flex-same-size d-none-622'>
            <div>
              <img src={Cellphone} alt='Cellphone' className='cellphone' />
            </div>
          </div>
          <div className='d-flex-centrado flex-same-size'>
            <div className='d-flex direction-row align-center'>
              <img src={Candado} alt='Candado' className='emoji' />
              <div className='d-flex-column'>
                <h3>
                  EFFICIENCY
                </h3>
                <p>
                  Can be quickly and easily generated without the need for lengthy verification processes. Operations and cost reduced
                </p>
              </div>
            </div>
            <div className='d-flex direction-row align-center'>
              <img src={Ciclo} alt='Candado' className='emoji' />
              <div className='d-flex-column'>
                <h3>
                  COST EFFECTIVE
                </h3>
                <p>
                  Reduce costs associated with paper-based certificates, including printing, storage, and administrative overhead.
                </p>
              </div>
            </div>
            <div className='d-flex direction-row align-center'>
              <img src={Candado} alt='Candado' className='emoji' />
              <div className='d-flex-column'>
                <h3>
                  USER RICHER EXPIRIENCES
                </h3>
                <p>
                  Metadata will provide extended information about the credential
                </p>
              </div>
            </div>
          </div>

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

    </section>
  )
}

export default DiscoverOurServices