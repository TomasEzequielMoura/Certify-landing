import React from 'react'

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
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Nick Thompson</p>
                  <p class="subsubtitle is-6">Canada</p>
                </div>
              </div>

              <div class="content">
                “Exceeded my expectations with their technical expertise and seamless communication. I highly recommend them for anyone in need of innovative blockchain solutions”.
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
        <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Yessica Christy</p>
                  <p class="subsubtitle is-6">England</p>
                </div>
              </div>

              <div class="content">
              “Exceptional customer support and dedication, truly positive experience. I wouldn't hesitate to work with them again in the future”.
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
        <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Kim Young Jou</p>
                  <p class="subsubtitle is-6">South Korea</p>
                </div>
              </div>

              <div class="content">
              “I highly recommend their services for anyone looking to harness the power of blockchain technology”.  
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Customer