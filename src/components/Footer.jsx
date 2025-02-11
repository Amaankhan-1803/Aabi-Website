import React from 'react'
  import '../assets/footer.css'
  import '../assets/mobfooter.css'

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
          <div className="col-md-4 abtus ps-md-5">
              <h5 className="head">
                 Contact
              </h5>
              <ul className='contact-list'>
                  <li><a href="tel:+968-99719361" className='contact-item'><i
                      className="bi bi-telephone pe-2"></i> +968-99719361</a></li>
                  <li><a href="https://wa.me/96879955998" className='contact-item'><i
                      className="bi bi-whatsapp pe-2"></i> +968-79955998</a></li>
                  <li><a href="mailto:sales@abunidhaloman.com" className='contact-item'><i className="bi bi-envelope pe-2"></i> sales@abunidhaloman.com</a>
                  </li>
                  {/*<li><a href="" className='contact-item'><i class="bi bi-geo-alt pe-2"></i> 289H+33G, Jalan Bani Buali</a></li>*/}
              </ul>
          </div>
            <div className="col-md-4 abtus ps-md-5">
                <h5 className="head">
                    Connect With Us
                </h5>
                <ul className='social-list d-flex align-items-center gap-4'>
                    <li><a href="https://www.instagram.com/abu_nidhal_jewellry1?igsh=MXA5MXdhYW94amZpNg==" className='social-item'><i class="bi bi-instagram "></i></a></li>
                <li><a href="https://www.snapchat.com/add/abunidhal1?sender_web_id=c8696c6b-61ea-4500-9f85-d0bf914457b8" className='social-item'><i class="bi bi-snapchat "></i></a></li>
                <li><a href="https://maps.app.goo.gl/mB5R542T1Cqseoh5A?g_st=aw" className='social-item'><i class="bi bi-geo-alt "></i></a></li>
              </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-4">
            <p>Copyright ©️2025 Abu Nidhal Al Alaw Trading Co. All rights reserved.</p>
          </div>
        </div>
      </div>
    )
  }

  export default Footer
