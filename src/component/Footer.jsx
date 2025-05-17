import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {

    const handleClick=()=>{
      window.scrollTo(0,0)
    }
  return (
<div className='bg-[#203954] w-full p-2 m-0'>
<div >
  <div>

        <div className='ml-[20%]'>

    <div class="row align-items-center"  >
      
      <div class="col-md-6 col-lg-3 ">
        <div class="widget">
          <div class="footer-quick-link"  >
            <div class="footer-widget-title">
               <h5 className='text-white'>Quick Links</h5>
            </div>
            <div class="footer-helpful-links">
              <ul className='flex flex-col '>
                <Link to='/about' onClick={handleClick}>About Us</Link>
                <Link to='team' onClick={handleClick} >Our Team </Link>
                <Link to="products" onClick={handleClick}>Our Products</Link>
                <Link  to='contact' onClick={handleClick}>Contact Us</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 ">
        <div class="widget">
          <div class="footer-quick-link" >
            <div class="footer-widget-title" >
              <h5 className='text-white'>Resources</h5>
            </div>
            <div class="footer-helpful-links">
              <ul>
                <li><a href="app">My Parking App</a></li>
                <li><a href="map">Map Based Parking</a></li>
                <li><a href="media" target="_blank">Media</a></li>
                <li><a href="gallery">Gallery</a></li>
                  {/* <!----- <li><a href="#">Blogs</a></li> -----> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mt-3">
        <div class="widget">
          <div class="footer-contact" className='mt-3'>
            <div class="footer-widget-title">
              <h5 className='text-white'>Registered Address</h5>
            </div>
            <p className='text-white'><span><i class="fa fa-map-marker-alt"></i></span> B-702,Bhakti Nagar,
            Nikol, <br />  Ahmedabad - 382430, Gujarat, India. </p>
            <p className='text-white mr-5'><span><i class="fas fa-phone"></i></span> +91 7418596352</p>
            
            <p className='d-flex gap-3 text-white '><span><i class="far fa-envelope"></i></span> <a  className='no-underline' href="mailto:showmyparking@gmail.com"><span className='text-white '>myparking@gmail.com</span></a></p>
           
          </div>
        </div>
      </div>
    </div>
             </div>

             <div className='ml-24'>

    <div class="row" >
              <div class=" col-md-4 col-12  text-center text-md-left order-last order-sm-first pt-5 pt-sm-0">
                <small class="sw-font-size-m sw-text-color-000000 sw-font-family-default sw-font-weight-normal sw-padding-top-3xs sw-padding-bottom-3xs text-white ">Made with <i class="fas fa-fw fa-heart"></i> in India.</small>
                </div>
                <div class=" col-md-2 col-4  text-md-left">
                  <Link to="terms" target="" class="sw-font-size-m sw-text-color-000000 sw-font-family-default sw-font-weight-light sw-letter-spacing-normal sw-padding-left-none sw-padding-top-7xs sw-padding-bottom-7xs hover:sw-text-decoration-no-underline">Terms</Link>
                  </div>
                  <div class=" col-md-2 col-4  text-md-left">
                    <Link to="privacy" target="" class="sw-font-size-m sw-text-color-000000 sw-font-family-default sw-font-weight-light sw-letter-spacing-normal sw-padding-left-none sw-padding-top-7xs sw-padding-bottom-7xs hover:sw-text-decoration-no-underline">Privacy Policy</Link>
                    </div>
                   
                      <div class=" col-md-2 col-4  text-md-left">
                        <Link to="refund-policy" target="" class="sw-font-size-m sw-text-color-000000 sw-font-family-default sw-font-weight-light sw-letter-spacing-normal sw-padding-left-none sw-padding-top-7xs sw-padding-bottom-7xs hover:sw-text-decoration-no-underline">Refund Policy</Link>
                        </div>
                        </div>
             </div>
  </div>
</div>

</div>

    
  )
}
