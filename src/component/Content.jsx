import React from 'react'
import "../assets/Content.css"

export const Content = () => {
  return (
    <>
  <div class="main">
        {/* <img className='h-4/6 w-lvw brightness-50'  src="src/assets/image.png" alt="bg-img" /> */}
        
        <section class="content1" style={{backgroundImage:"url('image.png')",backgroundSize:'cover', backgroundPosition:'center'}}> {/*content 1 start here */}


          <div class="overlay">

          <div class="content1text">
          {/* className="absolute top-24 text-2xl left-40" */}

        <h1  >
        LET’S GOODBYE TO ALL THE PARKING PROBLEMS!
        </h1>

        <h2 >
        "Book a spot in seconds and park stress-free."
        </h2>
        {/* className='absolute top-36 text-4xl left-44' */}

        <h3>
        "Save time and avoid the hassle <br /> 
        Secure your spot before you arrive."
        </h3>
        {/* className='absolute top-52 text-1xl left-44 */}
</div>
          </div>






        </section>
        {/* content 1 end here */}


        <div> {/*content 2 start here */}
          
        <div class="row counter-content-container white">
				<div class="col-sm-12 col-md-6 col-lg-3">
					<div class="single-counter br">
						<div class="counter-content">
							<div class="counter-content-inner">
								<div class="count-up-txt">
									<h1><span class="counter">100</span></h1>
								</div>
								<div class="counter-txt">
									<h3>K+</h3>
								</div>
							</div>
						</div>
						<div class="counter-title">
							<h4>Application Downloads</h4>
						</div>
					</div>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-3">
					<div class="single-counter br">
						<div class="counter-content">
							<div class="counter-content-inner">
								<div class="count-up-txt">
									<h1><span class="counter">800</span></h1>
								</div>
								<div class="counter-txt">
									<h3>K+</h3>
								</div>
							</div>
						</div>
						<div class="counter-title">
							<h4>Parking Bookings </h4>
						</div>
					</div>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-3">
					<div class="single-counter br">
						<div class="counter-content">
							<div class="counter-content-inner">
								<div class="count-up-txt">
									<h1><span class="counter">350</span></h1>
								</div>
								<div class="counter-txt">
									<h3>K+</h3>
								</div>
							</div>
						</div>
						<div class="counter-title">
							<h4>Registered Users</h4>
						</div>
					</div>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-3">
					<div class="single-counter">
						<div class="counter-content">
							<div class="counter-content-inner">
								<div class="count-up-txt">
									<h1><span class="counter">4</span></h1>
								</div>
								<div class="counter-txt">
									<h3></h3>
								</div>
							</div>
						</div>
						<div class="counter-title">
							<h4>Awards</h4>
						</div>
					</div>
				</div>
			</div>


        </div>

{/* footer start here */}

<div class="footer pt-60 pb-70">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6 col-lg-3">
        <div class="widget">
          <div class="about-company">
            <div class="footer-logo mb-10"> <img src="assets/images/logo-1.png" alt="Footer-logo" width="130" /> </div>
            <p>ShowMyParking is an Award Winning Smart Parking Application where the consumer can conveniently search, book and park their vehicle for a specific time and venue with a few clicks of fingertips.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget">
          <div class="footer-quick-link">
            <div class="footer-widget-title">
              <h5>Quick Links</h5>
            </div>
            <div class="footer-helpful-links">
              <ul>
                <li><a href="about_us.php">About Us</a></li>
                <li><a href="our_teams.php">SMP Team</a></li>
                <li><a href="products.php">Our Products</a></li>
                <li><a href="segments.php">Our Segments</a></li>
                <li><a href="case_study.php">Case Study</a></li>
                <li><a href="contact_us.php">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget">
          <div class="footer-quick-link">
            <div class="footer-widget-title">
              <h5>Resources</h5>
            </div>
            <div class="footer-helpful-links">
              <ul>
                <li><a href="product_smp.php">Smart Parking App</a></li>
                <li><a href="product_fastag.php">FasTag Based Parking</a></li>
                <li><a href="https://www.youtube.com/channel/UCvt_4oMzxUICsE0hGxD-ykQ" target="_blank">Media</a></li>
                <li><a href="photo_gallery.php">Gallery</a></li>
                <li><a href="faq.php">FAQs</a></li>
                  {/* <!----- <li><a href="#">Blogs</a></li> -----> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget">
          <div class="footer-contact">
            <div class="footer-widget-title">
              <h5>Registered Address</h5>
            </div>
            <p><span><i class="fa fa-map-marker-alt"></i></span> Tulip Corpos, Opposite VS Hospital, Ellisbridge, Ahmedabad - 380006 Gujarat India. </p>
            <p><span><i class="fas fa-phone"></i></span> +91 95120 15235</p>
            <p><span><i class="far fa-envelope"></i></span> <a href="mailto:showmyparking@gmail.com"><span>showmyparking@gmail.com</span></a></p>
            <div class="footer-social-icon d-flex"><span>Follow Us:</span>
              <ul>
                <li>&nbsp;&nbsp;<a href="https://www.facebook.com/showmyparkingofficial/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/showmyparking" target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/showmyparking/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/company/show-my-parking/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCvt_4oMzxUICsE0hGxD-ykQ" target="_blank"><i class="fab fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      

  </div>

     </>
  )
}
