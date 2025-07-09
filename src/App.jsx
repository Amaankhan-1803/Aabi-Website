import { Routes, Route } from 'react-router-dom'
     import Navbar from './components/Navbar'
     import Slider from './components/Sliders'
     import InstaPost from './components/Instapost'
     import Aboutus from './components/aboutus'
     import Footer from './components/Footer'
     import PrivacyPolicy from './components/PrivacyPolicy'

     function App() {
       return (
           <>
               <div className="navbars">
                   <Navbar/>
               </div>
               <Routes>

                   <Route path="/" element={
                       <>

                           <div className="container-fluid carousel_slider">
                               <Slider/>
                           </div>
                           <div className="container-fluid instaposts">
                               <InstaPost/>
                           </div>
                           <div className="container-fluid aboutus">
                               <Aboutus/>
                           </div>
                           <div className="container-fluid footer">
                               <Footer/>
                           </div>
                       </>
                   }/>
                   <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
               </Routes>
           </>
       )
     }

export default App
