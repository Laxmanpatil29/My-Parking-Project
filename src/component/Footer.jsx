import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    // <div style={{textAlign:'center',height:"35px",width:"100vw",position:'fixed',bottom:'0px',backgroundColor:'black',color:'white'}}>laxmanpatil2345@gmail.com </div>
<div className='bg-[#AFDDE5] w-full'>
<div class="footer pt-60 pb-70" className='p-2 '>
  <div class="container" >

        <div className='ml-[20%]'>

    <div class="row align-items-center"  >
      
      <div class="col-md-6 col-lg-3">
        <div class="widget">
          <div class="footer-quick-link" className='mb-16' >
            <div class="footer-widget-title">
              <h5>Quick Links</h5>
            </div>
            <div class="footer-helpful-links">
              <ul className='flex flex-col'>
                <Link to='about'>About Us</Link>
                <Link to='team'>Our Team </Link>
                <Link to="products">Our Products</Link>
                <Link  to='contact'>Contact Us</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget">
          <div class="footer-quick-link" className='mb-10'>
            <div class="footer-widget-title" >
              <h5>Resources</h5>
            </div>
            <div class="footer-helpful-links">
              <ul>
                <li><a href="app">My Parking App</a></li>
                <li><a href="map">Map Based Parking</a></li>
                <li><a href="" target="_blank">Media</a></li>
                <li><a href="gallery">Gallery</a></li>
                <li><a href="faq.php">FAQs</a></li>
                  {/* <!----- <li><a href="#">Blogs</a></li> -----> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget">
          <div class="footer-contact" className='mt-3'>
            <div class="footer-widget-title">
              <h5>Registered Address</h5>
            </div>
            <p><span><i class="fa fa-map-marker-alt"></i></span> sky hill, odhav, Ahmedabad - 382430 Gujarat India. </p>
            <p><span><i class="fas fa-phone"></i></span> +91 7418596352</p>
            
            <p className='d-flex gap-3'><span><i class="far fa-envelope"></i></span> <a href="mailto:showmyparking@gmail.com"><span>myparking@gmail.com</span></a></p>
           
          </div>
        </div>
      </div>
    </div>
             </div>

             <div className='ml-24'>

    <div class="row" >
              <div class=" col-md-4 col-12  text-center text-md-left order-last order-sm-first pt-5 pt-sm-0">
                <small class="sw-font-size-m sw-text-color-000000 sw-font-family-default sw-font-weight-normal sw-padding-top-3xs sw-padding-bottom-3xs ">Made with <i class="fas fa-fw fa-heart"></i> in India.</small>
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
