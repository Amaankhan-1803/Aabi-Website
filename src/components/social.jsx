import React from 'react'
import insta from '/public/imgs/insta.png'
import snap from '/public/imgs/snap.png'
import '../assets/social.css'
import '../assets/mobsocial.css'

const Social = () => {
  return (
    <div>
      <div className="container">
        <div className=" row d-flex align-items-center">
            <div className="col-md-6 socialapps">
                <span className='social-text'>Follow Us On:</span>
                <a href=""><img src={insta} alt="" className='socialapp img-fluid' /></a>
                <a href=""><img src={snap} alt="" className='socialapp snap img-fluid' /></a>
            </div>
            <div className="col-md-6 instahandle text-center">
                <span className="instahandtext"><a href="">@abu_nidhal_jewellry1</a></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Social
