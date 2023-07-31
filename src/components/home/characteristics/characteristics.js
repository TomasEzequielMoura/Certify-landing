import React from 'react'
import Notebook from '../../../assets/images/notebook.png';
import Tilde from '../../../assets/images/tilde.png';
import './characteristics.css';

const Characteristics = () => {
  return (
    <>
      <div className='container characteristics'>
        <div className="columns">
          <div className="column">
            <img src={Notebook} alt='Notebook characteristics' />
          </div>
          <div className="column">
            <h2 className='subtitle'>
              Securely stored and verified<br/> on the blockchain
            </h2>
            <p className='subsubtitle1'>
              Enabling faster and more reliable credential verification for employers, educational institutions, and individuals.
            </p>
            <div className='bullet'>
              <p><img src={Tilde} alt='tilde' />Security and Trust</p>
              <p><img src={Tilde} alt='tilde' />Transparency and Verifiability</p>
              <p><img src={Tilde} alt='tilde' />Elimination of Middlemen</p>
              <p><img src={Tilde} alt='tilde' />Extra metadata</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Characteristics