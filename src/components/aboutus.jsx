import React from 'react'
import '../assets/aboutus.css'
import '../assets/mobaboutus.css'
import owner from '/imgs/owner.png'

const Aboutus = () => {
  return (
    <div>
      <h2 className="text-center">Our Journey</h2>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="about-us">
                    <img src={owner} alt="" className='about-img w-100' />
                </div>
            </div>
            <div className="col-md-6 abt-txt">
                <div className="abt-text">
                    <p className='para-1'>بدأت شركة ابو نضال العلوي بداية متواضعة في عام 1985 والتي كانت بمثابة بداية رحلة امتدت لأكثر من عقدين من الزمن و بفضل الله تستمر حتى يومنا هذا</p>
                    <p className='para-2'>واليوم، أصبحت العلامة التجارية واحدة من العلامات التجارية الرائدة في مجال المجوهرات والأزياء في سلطنة عُمان.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
