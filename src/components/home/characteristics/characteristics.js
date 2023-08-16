import React from 'react'
import Notebook from '../../../assets/images/notebook.png';
import Tilde from '../../../assets/images/tilde.png';
import './characteristics.css';

const Characteristics = () => {
  return (
    <section>
      <div className='container characteristics'>
        <div className="columns">
          <div className="column">
            <img src={Notebook} alt='Notebook characteristics' />
          </div>
          <div className="column">
            <h2 className='subtitle'>
              Securely stored and verified<br /> on the blockchain
            </h2>
            <p className='subsubtitle1'>
              Enabling faster and more reliable credential verification for employers, educational institutions, and individuals.
            </p>
            <table className='tabla-tilde'>
              <tbody>
                <tr>
                  <td><img src={Tilde} alt='tilde' /></td>
                  <td><p>Security and Trust</p></td>
                </tr>
                <tr>
                  <td><img src={Tilde} alt='tilde' /></td>
                  <td><p>Transparency and Verifiability</p></td>
                </tr>
                <tr>
                  <td><img src={Tilde} alt='tilde' /></td>
                  <td><p>Elimination of Middlemen</p></td>
                </tr>
                <tr>
                  <td><img src={Tilde} alt='tilde' /></td>
                  <td><p>Extra metadata</p></td>
                </tr>
              </tbody>
            </table>
            {/* <div className='bullet'>
              <p><img src={Tilde} alt='tilde' />Security and Trust</p>
              <p><img src={Tilde} alt='tilde' />Transparency and Verifiability</p>
              <p><img src={Tilde} alt='tilde' />Elimination of Middlemen</p>
              <p><img src={Tilde} alt='tilde' />Extra metadata</p>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Characteristics