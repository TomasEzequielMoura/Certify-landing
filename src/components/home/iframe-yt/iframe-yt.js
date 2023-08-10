import React from 'react'
// import IntroPic from '../../../assets/images/intro.png';
import './iframe-yt.css';
import YoutubeEmbed from "./YoutubeEmbed";

const IframeYT = () => {
  return (
    <>
      <section>
        <div className="container iframeYT" id="digitalCertificates">
          <div>
            <h2 className='subtitle'>Discover Blockchain Certificates</h2>
            <p className='subsubtitle2'>Learn about the power of blockchain certificates - safeguard your credentials with tamper-proof technology.</p>
            <div className="low-embed-size">
              <YoutubeEmbed embedId="2wrv_MoJpKE" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IframeYT