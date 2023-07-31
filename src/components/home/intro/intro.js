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
              Secure digital<br/> certificates and<br/> academic credentials
            </h1>
            <div>
            <button class="button is-primary">Contact us</button>

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