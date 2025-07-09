import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Sliders'
import Collection from './components/Collection'
import InstaPost from './components/Instapost'
import Aboutus from './components/aboutus'
import Social from './components/social'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

   <div className="navbars">
   <Navbar/>
   </div>

     <div className="container-fluid carousel_slider">
      <Slider/>
     </div>
     {/*<div className="container-fluid collection">*/}
     {/* <Collection/>*/}
     {/*</div>*/}
     <div className="container-fluid instaposts">
      <InstaPost/>
     </div>
     <div className="container-fluid aboutus">
      <Aboutus/>
     </div>
     {/*<div className="container-fluid social">*/}
     {/* <Social/>*/}
     {/*</div>*/}
     <div className="container-fluid footer">
      <Footer/>
     </div>




    </>
  )
}

export default App
