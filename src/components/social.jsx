import React from 'react'
import insta from '../imgs/insta.png'
import snap from '../imgs/snap.png'
import '../assets/social.css'

const Social = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
            <div className="socialapps">
                <span className='social-text'>Follow Us On:</span>
                <a href=""><img src={insta} alt="" className='socialapp' /></a>
                <a href=""><img src={snap} alt="" className='socialapp' /></a>
            </div>
            <div className="instahandle">
                <span className="instahandtext"><a href="">@abu_nidhal_jewellry1</a></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Social
