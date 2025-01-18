import React from 'react'
import '../assets/footer.css'
const Footer = () => {
  return (
    <div className='container'>
      <div className="row ">
        <div className="col-md-4 abtus">
            <h5 className="head">
                About Us
            </h5>
            <p className="text-justify abt-texts">
              ABU NIDHAL JEWELLERY made a humble beginning in
              1985 that marked the start of a journey, which spans
              Over 2 decades and continue to this day.  
            </p>
        </div>
        <div className="col-md-4 abtus ps-5">
            <h5 className="head">
               Contact
            </h5>
            <ul className='contact-list'>
              <li><a href="" className='contact-item'><i class="bi bi-telephone pe-2"></i> +968-99719361</a></li>
              <li><a href="" className='contact-item'><i class="bi bi-whatsapp pe-2"></i> +968-79955998</a></li>
              <li><a href="" className='contact-item'><i class="bi bi-envelope pe-2"></i> sales@abunidhaloman.com</a></li>
            </ul>
        </div>
        <div className="col-md-4 abtus ps-5">
            <h5 className="head">
               Connect With Us
            </h5>
            <ul className='social-list d-flex align-items-center gap-4'>
              <li><a href="https://www.instagram.com/abu_nidhal_jewellry1?igsh=MXA5MXdhYW94amZpNg==" className='social-item'><i class="bi bi-instagram "></i></a></li>
              <li><a href="" className='social-item'><i class="bi bi-snapchat "></i></a></li>
              <li><a href="" className='social-item'><i class="bi bi-geo-alt "></i></a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
