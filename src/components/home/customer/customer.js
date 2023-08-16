import React from 'react'
import customer1 from '../../../assets/images/customer1.png';
import customer2 from '../../../assets/images/customer2.png';
import customer3 from '../../../assets/images/customer3.png';
import './customer.css';

const Customer = () => {
  return (
    <section className='customer container' id='reviews'>
      <div>
        <h2 className='subtitle'>Trusted by Customer</h2>
        <p className='subsubtitle2'>Read what our customers have to say about us!</p>
      </div>
      <div className='columns'>
        <div className='column'>
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src={customer1} alt="Placeholder image" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-5">Nick Thompson</p>
                  <p class="subsubtitle is-6">Canada</p>
                </div>
              </div>
              <div class="content">
                “Exceeded my expectations with their technical expertise and seamless communication. I highly recommend them for anyone in need of innovative blockchain solutions”.
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
        <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src={customer2} alt="Placeholder image" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-5">Yessica Christy</p>
                  <p class="subsubtitle is-6">England</p>
                </div>
              </div>
              <div class="content">
              “Exceptional customer support and dedication, truly positive experience. I wouldn't hesitate to work with them again in the future”.
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
        <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src={customer3} alt="Placeholder image" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-5">Kim Young Jou</p>
                  <p class="subsubtitle is-6">South Korea</p>
                </div>
              </div>
              <div class="content">
              “I highly recommend their services for anyone looking to harness the power of blockchain technology”.  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Customer