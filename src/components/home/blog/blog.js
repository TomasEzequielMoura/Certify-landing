import React from 'react'
import Blog1 from '../../../assets/images/blog1.png';
import Blog2 from '../../../assets/images/blog2.png';
import Blog3 from '../../../assets/images/blog3.png';

import './blog.css';

const Blog = () => {
  return (
    <>
      <section className='blog container' id="blog">
        <div>
          <h2 className='subtitle'>From the blog</h2>
          <p className='subsubtitle2'>Read the latest news about digital certificates and blockchain</p>
        </div>
        <div className='columns'>
          <div className='column'>
            <img src={Blog1} alt='blog 1' />
            <h5>Blockchain</h5>
            <h4>Blockchain Technology and Its Importance in Product Traceability</h4>
            <h5>25/07/2023</h5>
          </div>
          <div className='column'>
            <img src={Blog2} alt='blog 2' />
            <h5>Unlocking the Potential of Blockchain</h5>
            <h4>DAppsFactory's Consulting Services for Decentralized Application</h4>
            <h5>17/07/2023</h5>
          </div>
          <div className='column'>
            <img src={Blog3} alt='blog 3' />
            <h5>Security in Blockchain Projects:</h5>
            <h4>How Blockchain Technology Ensures Integrity and Trust in Information</h4>
            <h5>05/07/2023</h5>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog