// src/layouts/AdminLayout.jsx
import { useEffect } from 'react';
import AssetsLoader from './AssetsLoader';

// import $ from 'jquery';

const UserLayout = ({ children }) => {
  return (
    <>
      <AssetsLoader
        styles={[
          '/templates/event/plugins/bootstrap/css/bootstrap.min.css',
          '/templates/event/plugins/themefisher-font/style.css',
          '/templates/event/plugins/font-awsome/css/font-awesome.min.css',
          '/templates/event/plugins/magnific-popup/magnific-popup.css',
          '/templates/event/plugins/slick/slick.css',
          '/templates/event/plugins/slick/slick-theme.css',
          '/templates/event/css/style.css',
        ]}
        scripts={[
          '/templates/event/plugins/jquery/jquery.js',
          '/templates/event/plugins/popper/popper.min.js',
          '/templates/event/plugins/bootstrap/js/bootstrap.min.js',
          '/templates/event/plugins/smoothscroll/SmoothScroll.min.js',
          '/templates/event/plugins/isotope/mixitup.min.js',
          '/templates/event/plugins/magnific-popup/jquery.magnific-popup.min.js',
          '/templates/event/plugins/slick/slick.min.js',
          '/templates/event/plugins/syotimer/jquery.syotimer.min.js',
          // 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCC72vZw-6tGqFyRhhg5CkF2fqfILn2Tsw',
          // '/templates/event/plugins/google-map/gmap.js',
          '/templates/event/js/custom.js',
        ]}
      />
      
      {/* Ici ton layout HTML de base */}
      <div className="body-wrapper">

        <nav className="navbar main-nav border-less fixed-top navbar-expand-lg p-0">
          <div className="container-fluid p-0">
              <a className="navbar-brand" href="index.html">
                <img src="templates/event/images/logo.png" alt="logo"/>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fa fa-bars"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown active dropdown-slide">
                  <a className="nav-link" href="#"  data-toggle="dropdown">Home
                    <span>/</span>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="index.html">Homepage</a>
                    <a className="dropdown-item" href="homepage-two.html">Homepage 2</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="speakers.html">Speakers
                    <span>/</span>
                  </a>
                </li>
                <li className="nav-item dropdown dropdown-slide">
                  <a className="nav-link" href="#" data-toggle="dropdown">Pages<span>/</span></a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="about-us.html">About Us</a>
                      <a className="dropdown-item" href="single-speaker.html">Single Speaker</a>
                      <a className="dropdown-item" href="gallery.html">Gallery</a>
                      <a className="dropdown-item" href="gallery-two.html">Gallery-02</a>
                      <a className="dropdown-item" href="testimonial.html">Testimonial</a>
                      <a className="dropdown-item" href="pricing.html">Pricing</a>
                      <a className="dropdown-item" href="FAQ.html">FAQ</a>
                      <a className="dropdown-item" href="404.html">404</a>
                    </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="schedule.html">Schedule<span>/</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="sponsors.html">Sponsors<span>/</span></a>
                </li>
                <li className="nav-item dropdown dropdown-slide">
                  <a className="nav-link" href="#"  data-toggle="dropdown">News
                    <span>/</span>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="news.html">News without sidebar</a>
                    <a className="dropdown-item" href="news-right-sidebar.html">News with right sidebar</a>
                    <a className="dropdown-item" href="news-left-sidebar.html">News with left sidebar</a>
                    <a className="dropdown-item" href="news-single.html">News Single</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
              <a href="#" className="ticket">
                <img src="templates/event/images/icon/ticket.png" alt="ticket"/>
                <span>Buy Ticket</span>
              </a>
              </div>
          </div>
        </nav>




        <section className="banner-two bg-banner-two overlay-white-slant text-overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="block">
                  <h1>Business</h1>
                  <h2>Conference</h2>
                  <h3>2017</h3>
                  <h6>02-05 July 2017 California</h6>
                  <a href="#" className="btn btn-main-md">get ticket now</a>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="section about">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 align-self-center">
                <div className="image-block two bg-about">
                  <img className="img-fluid" src="templates/event/images/speakers/featured-speaker-two.jpg" alt=""/>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 align-self-center ml-lg-auto">
                <div className="content-block">
                  <h2>About The <span className="alternate">Eventre</span></h2>
                  <div className="description-one">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad
                    </p>
                  </div>
                  <div className="description-two">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliq enim ad minim</p>
                  </div>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#" className="btn btn-main-md">Buy ticket</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="btn btn-transparent-md">Read more</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="speakers-full-width">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-12">
                <div className="speaker-slider">
                  <div className="speaker-image">
                    <img src="templates/event/images/speakers/speaker-full-one.jpg" alt="speaker" className="img-fluid"/>
                    <div className="primary-overlay text-center">
                      <h5>GEORGE G. HERNANDEZ</h5>
                      <p>CEO Rancom Motor</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="speaker-image">
                    <img src="templates/event/images/speakers/speaker-full-two.jpg" alt="speaker" className="img-fluid"/>
                    <div className="primary-overlay text-center">
                      <h5>GEORGE G. HERNANDEZ</h5>
                      <p>CEO Rancom Motor</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="speaker-image">
                    <img src="templates/event/images/speakers/speaker-full-three.jpg" alt="speaker" className="img-fluid"/>
                    <div className="primary-overlay text-center">
                      <h5>GEORGE G. HERNANDEZ</h5>
                      <p>CEO Rancom Motor</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="speaker-image">
                    <img src="templates/event/images/speakers/speaker-full-four.jpg" alt="speaker" className="img-fluid"/>
                    <div className="primary-overlay text-center">
                      <h5>GEORGE G. HERNANDEZ</h5>
                      <p>CEO Rancom Motor</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="speaker-image">
                    <img src="templates/event/images/speakers/speaker-full-five.jpg" alt="speaker" className="img-fluid"/>
                    <div className="primary-overlay text-center">
                      <h5>GEORGE G. HERNANDEZ</h5>
                      <p>CEO Rancom Motor</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="speaker-image">
                    <img src="templates/event/images/speakers/speaker-full-one.jpg" alt="speaker" className="img-fluid"/>
                    <div className="primary-overlay text-center">
                      <h5>GEORGE G. HERNANDEZ</h5>
                      <p>CEO Rancom Motor</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="speaker-image">
                    <img src="templates/event/images/speakers/speaker-full-two.jpg" alt="speaker" className="img-fluid"/>
                    <div className="primary-overlay text-center">
                      <h5>GEORGE G. HERNANDEZ</h5>
                      <p>CEO Rancom Motor</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="speaker-image">
                    <img src="templates/event/images/speakers/speaker-full-three.jpg" alt="speaker" className="img-fluid"/>
                    <div className="primary-overlay text-center">
                      <h5>GEORGE G. HERNANDEZ</h5>
                      <p>CEO Rancom Motor</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="speaker-image">
                    <img src="templates/event/images/speakers/speaker-full-four.jpg" alt="speaker" className="img-fluid"/>
                    <div className="primary-overlay text-center">
                      <h5>GEORGE G. HERNANDEZ</h5>
                      <p>CEO Rancom Motor</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="speaker-image">
                    <img src="templates/event/images/speakers/speaker-full-five.jpg" alt="speaker" className="img-fluid"/>
                    <div className="primary-overlay text-center">
                      <h5>GEORGE G. HERNANDEZ</h5>
                      <p>CEO Rancom Motor</p>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--==============================
        =            Schedule            =
        ===============================--> */}

        <section className="section schedule two">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h3>Event <span className="alternate">Schedule</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusm tempor incididunt ut labore</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2">
                <div className="schedule-tab">
                  <ul className="nav nav-pills text-center">
                    <li className="nav-item">
                      <a className="nav-link active" href="#nov20" data-toggle="pill">
                        Day-01
                        <span>20 November</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#nov21" data-toggle="pill">
                      Day-02
                        <span>21 November</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#nov22" data-toggle="pill">
                      Day-03
                        <span>22 November</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="schedule-contents">
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active schedule-item" id="nov20">
                      <ul className="m-0 p-0">
                        <li className="headings text-center">
                          <div className="time">Time</div>
                          <div className="speaker">Speaker</div>
                          <div className="subject">Subject</div>
                          <div className="venue">Venue</div>
                        </li>
                        <li className="schedule-details text-center">
                          <div className="block">
                            <div className="time">
                              <span className="time">9.00 AM</span>
                            </div>
                            <div className="speaker">
                            <span className="name">Samanta Doe</span>
                            </div>
                            <div className="subject">Introduction to Wp</div>
                            <div className="venue">Auditorium A</div>
                          </div>
                        </li>
                        <li className="schedule-details">
                          <div className="block">
                            <div className="time">
                              <span className="time">10.00 AM</span>
                            </div>
                            <div className="speaker">
                            <span className="name">Zerad Pawel</span>
                            </div>
                            
                            <div className="subject">Principle of Wp</div>
                            
                            <div className="venue">Auditorium B</div>
                          </div>
                        </li>
                        <li className="schedule-details">
                          <div className="block">
                            
                            <div className="time">
                              <span className="time">12.00 AM</span>
                            </div>
                            
                            <div className="speaker">
                            <span className="name">Henry Mong</span>
                            </div>
                            
                            <div className="subject">Wp Requirements</div>
                            
                            <div className="venue">Auditorium C</div>
                          </div>
                        </li>
                        
                        <li className="schedule-details">
                          <div className="block">
                            
                            <div className="time">
                              <span className="time">2.00 PM</span>
                            </div>
                            
                            <div className="speaker">
                            <span className="name">Baily Leo</span>
                            </div>
                            
                            <div className="subject">Introduction to Wp</div>
                            
                            <div className="venue">Auditorium D</div>
                          </div>
                        </li>
                        
                        <li className="schedule-details">
                          <div className="block">
                            
                            <div className="time">
                              <span className="time">3.00 PM</span>
                            </div>
                            
                            <div className="speaker">
                            <span className="name">Lee Mun</span>
                            </div>
                            
                            <div className="subject">Useful tips for Wp</div>
                            
                            <div className="venue">Auditorium E</div>
                          </div>
                        </li>
                        
                        <li className="schedule-details">
                          <div className="block">
                            
                            <div className="time">
                              <span className="time">3.00 PM</span>
                            </div>
                            
                            <div className="speaker">
                            <span className="name">Lee Mun</span>
                            </div>
                            
                            <div className="subject">Useful tips for Wp</div>
                            
                            <div className="venue">Auditorium E</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane fade schedule-item" id="nov21">
                      
                      <ul className="m-0 p-0">
                        <li className="headings text-center">
                          <div className="time">Time</div>
                          <div className="speaker">Speaker</div>
                          <div className="subject">Subject</div>
                          <div className="venue">Venue</div>
                        </li>
                        
                        <li className="schedule-details text-center">
                          <div className="block">
                            
                            <div className="time">
                              <span className="time">9.00 AM</span>
                            </div>
                            
                            <div className="speaker">
                            <span className="name">Samanta Doe</span>
                            </div>
                            
                            <div className="subject">Introduction to Wp</div>
                            
                            <div className="venue">Auditorium A</div>
                          </div>
                        </li>
                        
                        <li className="schedule-details">
                          <div className="block">
                            
                            <div className="time">
                              <span className="time">10.00 AM</span>
                            </div>
                            
                            <div className="speaker">
                            <span className="name">Zerad Pawel</span>
                            </div>
                            
                            <div className="subject">Principle of Wp</div>
                            
                            <div className="venue">Auditorium B</div>
                          </div>
                        </li>
                        
                        <li className="schedule-details">
                          <div className="block">
                            
                            <div className="time">
                              <span className="time">12.00 AM</span>
                            </div>
                            
                            <div className="speaker">
                            <span className="name">Henry Mong</span>
                            </div>
                            
                            <div className="subject">Wp Requirements</div>
                            
                            <div className="venue">Auditorium C</div>
                          </div>
                        </li>
                        
                        <li className="schedule-details">
                          <div className="block">
                            
                            <div className="time">
                              <span className="time">2.00 PM</span>
                            </div>
                            
                            <div className="speaker">
                            <span className="name">Baily Leo</span>
                            </div>
                            
                            <div className="subject">Introduction to Wp</div>
                            
                            <div className="venue">Auditorium D</div>
                          </div>
                        </li>
                        
                        <li className="schedule-details">
                          <div className="block">
                            
                            <div className="time">
                              <span className="time">3.00 PM</span>
                            </div>
                            
                            <div className="speaker">
                            <span className="name">Lee Mun</span>
                            </div>
                            
                            <div className="subject">Useful tips for Wp</div>
                            
                            <div className="venue">Auditorium E</div>
                          </div>
                        </li>
                        
                        <li className="schedule-details">
                          <div className="block">
                            
                            <div className="time">
                              <span className="time">3.00 PM</span>
                            </div>
                            
                            <div className="speaker">
                            <span className="name">Lee Mun</span>
                            </div>
                            
                            <div className="subject">Useful tips for Wp</div>
                            
                            <div className="venue">Auditorium E</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane fade schedule-item" id="nov22">
                      
                      <ul className="m-0 p-0">
                        <li className="headings text-center">
                          <div className="time">Time</div>
                          <div className="speaker">Speaker</div>
                          <div className="subject">Subject</div>
                          <div className="venue">Venue</div>
                        </li>
                        
                        <li className="schedule-details text-center">
                          <div className="block">
                            
                            <div className="time">
                              <span className="time">9.00 AM</span>
                            </div>
                            
                            <div className="speaker">
                            <span className="name">Samanta Doe</span>
                            </div>
                            
                            <div className="subject">Introduction to Wp</div>
                            
                            <div className="venue">Auditorium A</div>
                          </div>
                        </li>
                        
                        <li className="schedule-details">
                          <div className="block">
                            
                            <div className="time">
                              <span className="time">10.00 AM</span>
                            </div>
                            
                            <div className="speaker">
                            <span className="name">Zerad Pawel</span>
                            </div>
                            
                            <div className="subject">Principle of Wp</div>
                            
                            <div className="venue">Auditorium B</div>
                          </div>
                        </li>
                        
                        <li className="schedule-details">
                          <div className="block">
                            
                            <div className="time">
                              <span className="time">12.00 AM</span>
                            </div>
                            
                            <div className="speaker">
                            <span className="name">Henry Mong</span>
                            </div>
                            
                            <div className="subject">Wp Requirements</div>
                            
                            <div className="venue">Auditorium C</div>
                          </div>
                        </li>
                        
                        <li className="schedule-details">
                          <div className="block">
                            
                            <div className="time">
                              <span className="time">2.00 PM</span>
                            </div>
                            
                            <div className="speaker">
                            <span className="name">Baily Leo</span>
                            </div>
                            
                            <div className="subject">Introduction to Wp</div>
                            
                            <div className="venue">Auditorium D</div>
                          </div>
                        </li>
                        
                        <li className="schedule-details">
                          <div className="block">
                            
                            <div className="time">
                              <span className="time">3.00 PM</span>
                            </div>
                            
                            <div className="speaker">
                            <span className="name">Lee Mun</span>
                            </div>
                            
                            <div className="subject">Useful tips for Wp</div>
                            
                            <div className="venue">Auditorium E</div>
                          </div>
                        </li>
                        
                        <li className="schedule-details">
                          <div className="block">
                            
                            <div className="time">
                              <span className="time">3.00 PM</span>
                            </div>
                            
                            <div className="speaker">
                            <span className="name">Lee Mun</span>
                            </div>
                            
                            <div className="subject">Useful tips for Wp</div>
                            
                            <div className="venue">Auditorium E</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--====  End of Schedule  ====-->

        <!--=============================
        =            Feature            =
        ==============================--> */}

        <section className="ticket-feature">
          <div className="container-fluid m-0 p-0">
            <div className="row p-0 m-0">
              <div className="col-lg-7 p-0 m-0">
                <div className="block bg-timer overlay-dark text-center">
                  <div className="section-title white m-0">
                    <h3>Limited Audience <span className="alternate">Seats</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm</p>
                  </div>
                  {/*  */}
                  <div className="timer"></div>
                  <a href="#" className="btn btn-main-md">Buy Ticket</a>
                </div>
              </div>
              <div className="col-lg-5 p-0">
                <div className="block-2">
                  <div className="row no-gutters">
                    <div className="col-6">
                      <div className="service-item">
                        <i className="fa fa-microphone"></i>
                        <h5>8 Speakers</h5>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="service-item">
                        <i className="fa fa-flag"></i>
                        <h5>500 + Seats</h5>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="service-item">
                        <i className="fa fa-ticket"></i>
                        <h5>300 tickets</h5>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="service-item">
                        <i className="fa fa-calendar"></i>
                        <h5>3 days event</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--====  End of Feature  ====-->


        <!--==========================
        =            News            =
        ===========================--> */}

        <section className="news-hr section mb-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h3>Eventre <span className="alternate">News</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, enim.</p>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6">
                <article className="news-post-hr">
                  <div className="post-thumb">
                    <a href="news-single.html">
                      <img src="templates/event/images/news/post-thumb-hr-one.jpg" alt="post-image" className="img-fluid"/>
                    </a>
                  </div>
                  <div className="post-contents border-top">
                    <div className="post-title"><h6><a href="news-single.html">Default title here</a></h6></div>
                    <div className="post-exerpts">
                      <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed doeiuse tempor incididunt ut
                      </p>
                    </div>

                    <div className="date">
                      <h4>20<span>May</span></h4>
                    </div>
                    <div className="more">
                      <a href="news-single.html">Show more</a>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-lg-6">
                <article className="news-post-hr">
                  <div className="post-thumb">
                    <a href="news-single.html">
                      <img src="templates/event/images/news/post-thumb-hr-two.jpg" alt="post-image" className="img-fluid"/>
                    </a>
                  </div>
                  <div className="post-contents border-top">
                    <div className="post-title"><h6><a href="news-single.html">Default title here</a></h6></div>
                    <div className="post-exerpts">
                      <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed doeiuse tempor incididunt ut
                      </p>
                    </div>
                    
                    <div className="date">
                      <h4>20<span>May</span></h4>
                    </div>
                    <div className="more">
                      <a href="news-single.html">Show more</a>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-lg-6">
                <article className="news-post-hr">
                  <div className="post-thumb">
                    <a href="news-single.html">
                      <img src="templates/event/images/news/post-thumb-hr-three.jpg" alt="post-image" className="img-fluid"/>
                    </a>
                  </div>
                  <div className="post-contents">
                    <div className="post-title"><h6><a href="news-single.html">Default title here</a></h6></div>
                    <div className="post-exerpts">
                      <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed doeiuse tempor incididunt ut
                      </p>
                    </div>
                    
                    <div className="date">
                      <h4>20<span>May</span></h4>
                    </div>
                    <div className="more">
                      <a href="news-single.html">Show more</a>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-lg-6">
                <article className="news-post-hr">
                  <div className="post-thumb">
                    <a href="news-single.html">
                      <img src="templates/event/images/news/post-thumb-hr-four.jpg" alt="post-image" className="img-fluid"/>
                    </a>
                  </div>
                  <div className="post-contents">
                    <div className="post-title"><h6><a href="news-single.html">Default title here</a></h6></div>
                    <div className="post-exerpts">
                      <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed doeiuse tempor incididunt ut
                      </p>
                    </div>
                    
                    <div className="date">
                      <h4>20<span>May</span></h4>
                    </div>
                    <div className="more">
                      <a href="news-single.html">Show more</a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* <!--====  End of News  ====-->

        <!--=============================
        =            Gallery            =
        ==============================--> */}

        <section className="gallery-full section pb-0">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h3>Eventre <span className="alternate">Gallery</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, autem.</p>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              
              <div className="col-lg-3 col-md-4">
                <div className="image">
                  <img src="templates/event/images/gallery/gallery-full-one.jpg" alt="gallery-image" className="img-fluid"/>
                  <div className="primary-overlay">
                        <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-full-popup-one.jpg"><i className="fa fa-picture-o"></i></a>
                      </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4">
                <div className="image">
                  <img src="templates/event/images/gallery/gallery-full-two.jpg" alt="gallery-image" className="img-fluid"/>
                  <div className="primary-overlay">
                        <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-full-popup-two.jpg"><i className="fa fa-picture-o"></i></a>
                      </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4">
                <div className="image">
                  <img src="templates/event/images/gallery/gallery-full-three.jpg" alt="gallery-image" className="img-fluid"/>
                  <div className="primary-overlay">
                        <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-full-popup-three.jpg"><i className="fa fa-picture-o"></i></a>
                      </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4">
                <div className="image">
                  <img src="templates/event/images/gallery/gallery-full-four.jpg" alt="gallery-image" className="img-fluid"/>
                  <div className="primary-overlay">
                        <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-full-popup-four.jpg"><i className="fa fa-picture-o"></i></a>
                      </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4">
                <div className="image">
                  <img src="templates/event/images/gallery/gallery-full-five.jpg" alt="gallery-image" className="img-fluid"/>
                  <div className="primary-overlay">
                        <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-full-popup-five.jpg"><i className="fa fa-picture-o"></i></a>
                      </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4">
                <div className="image">
                  <img src="templates/event/images/gallery/gallery-full-six.jpg" alt="gallery-image" className="img-fluid"/>
                  <div className="primary-overlay">
                        <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-full-popup-six.jpg"><i className="fa fa-picture-o"></i></a>
                      </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4">
                <div className="image">
                  <img src="templates/event/images/gallery/gallery-full-seven.jpg" alt="gallery-image" className="img-fluid"/>
                  <div className="primary-overlay">
                        <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-full-popup-sven.jpg"><i className="fa fa-picture-o"></i></a>
                      </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4">
                <div className="image">
                  <img src="templates/event/images/gallery/gallery-full-eight.jpg" alt="gallery-image" className="img-fluid"/>
                  <div className="primary-overlay">
                        <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-full-popup-eight.jpg"><i className="fa fa-picture-o"></i></a>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--====  End of Gallery  ====-->

        <!--===================================
        =            Pricing Table            =
        ====================================--> */}

        <section className="section pricing two">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h3>Get <span className="alternate">ticket</span></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                
                <div className="pricing-item">
                  <div className="pricing-heading text-center">
                    
                    <div className="title">
                      <h6>Starter</h6>
                    </div>
                    
                    <div className="price">
                      <h2>$39.00</h2>
                    </div>
                  </div>
                  <div className="pricing-body">
                    
                    <ul className="feature-list m-0 p-0">
                      <li><p><span className="fa fa-check-circle available"></span>1 Comfortable Seats</p></li>
                      <li><p><span className="fa fa-check-circle available"></span>Free Lunch and Coffee</p></li>
                      <li><p><span className="fa fa-times-circle unavailable"></span>Certificate</p></li>
                      <li><p><span className="fa fa-times-circle unavailable"></span>Easy Access</p></li>
                    </ul>
                  </div>
                  <div className="pricing-footer text-center">
                    <a href="#" className="btn btn-transparent-md">Buy a ticket</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                
                <div className="pricing-item featured">
                  <div className="pricing-heading text-center">
                    
                    <div className="title">
                      <h6>Standard</h6>
                    </div>
                    
                    <div className="price">
                      <h2>$49.00</h2>
                    </div>
                  </div>
                  <div className="pricing-body">
                    
                    <ul className="feature-list m-0 p-0">
                      <li><p><span className="fa fa-check-circle available"></span>1 Comfortable Seats</p></li>
                      <li><p><span className="fa fa-check-circle available"></span>Free Lunch and Coffee</p></li>
                      <li><p><span className="fa fa-check-circle available"></span>Certificate</p></li>
                      <li><p><span className="fa fa-times-circle unavailable"></span>Easy Access</p></li>
                    </ul>
                  </div>
                  <div className="pricing-footer text-center">
                    <a href="#" className="btn btn-main-md">Buy a ticket</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-auto">
                
                <div className="pricing-item">
                  <div className="pricing-heading text-center">
                    
                    <div className="title">
                      <h6>Platinum</h6>
                    </div>
                    
                    <div className="price">
                      <h2>$99.00</h2>
                    </div>
                  </div>
                  <div className="pricing-body">
                    
                    <ul className="feature-list m-0 p-0">
                      <li><p><span className="fa fa-check-circle available"></span>1 Comfortable Seats</p></li>
                      <li><p><span className="fa fa-check-circle available"></span>Free Lunch and Coffee</p></li>
                      <li><p><span className="fa fa-check-circle available"></span>Certificate</p></li>
                      <li><p><span className="fa fa-check-circle available"></span>Easy Access</p></li>
                    </ul>
                  </div>
                  <div className="pricing-footer text-center">
                    <a href="#" className="btn btn-transparent-md">Buy a ticket</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--====  End of Pricing Table  ====-->

        <!--================================
        =            Google Map            =
        =================================--> */}

        <section className="map new">
          
          <div id="map"></div>
          <div className="address-block">
            <h4>Docklands Convention</h4>
            <ul className="address-list p-0 m-0">
              <li><i className="fa fa-home"></i><span>1201 Park Street, Fifth Avenue, <br/>Dhanmondy, Dhaka.</span></li>
              <li><i className="fa fa-phone"></i><span>[88] 657 524 332</span></li>
            </ul>
            <a href="#" className="btn btn-white-md">Get Direction</a>
          </div>
          <div className="register overlay-dark bg-registration-two">
            <div className="block">
              <div className="title text-center">
                <h3>Register to <span className="alternate">Eventre</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
              <form action="#" className="row">
                <div className="col-md-6">
                  <input type="text" className="form-control main" placeholder="Your Name"/>
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control main" placeholder="Email"/>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control main" placeholder="Phone"/>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <select className="form-control main" id="select-ticket">
                        <option>Ticket Type</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-white-md">Register Now</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* <!--====  End of Google Map  ====-->

        <!--============================
        =            Footer            =
        =============================--> */}

        <footer className="footer-main">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block text-center">
                    <div className="footer-logo">
                      <img src="templates/event/images/footer-logo.png" alt="logo" className="img-fluid"/>
                    </div>
                    <ul className="social-links-footer list-inline">
                      <li className="list-inline-item">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#"><i className="fa fa-twitter"></i></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#"><i className="fa fa-instagram"></i></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#"><i className="fa fa-rss"></i></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#"><i className="fa fa-vimeo"></i></a>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>
        </footer>

        <footer className="subfooter">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <div className="copyright-text">
                  <p><a href="#">Eventre</a> &#169; 2017 All Right Reserved</p>
                </div>
              </div>
              <div className="col-md-6">
                  <a href="#" className="to-top"><i className="fa fa-angle-up"></i></a>
              </div>
            </div>
          </div>
        </footer>



      </div>
      
    </>
  );
};

export default UserLayout;



