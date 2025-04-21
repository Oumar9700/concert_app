export default function Home(){

    return (
        <>

    <section className="banner bg-banner-one overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Content Block */}
              <div className="block">
                {/* Coundown Timer */}
                <div className="timer"></div>
                <h1>Business</h1>
                <h2>Conference 2017</h2>
                <h6>02-05 July 2017 California</h6>
                {/*  Action Button */} 
                <a href="#" className="btn btn-white-md">get ticket now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 align-self-center">
              <div className="image-block bg-about">
                <img className="img-fluid" src="templates/event/images/speakers/featured-speaker.jpg" alt=""/>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 align-self-center">
              <div className="content-block">
                <h2>About The <span className="alternate">Eventre</span></h2>
                <div className="description-one">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.
                  </p>
                </div>
                <div className="description-two">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliq enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
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

        
      <section className="section schedule">
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
            <div className="col-12">
              <div className="schedule-tab">
                <ul className="nav nav-pills text-center">
                  <li className="nav-item">
                    <a className="nav-link active" href="#nov20" data-toggle="pill">
                      Day-01
                      <span>20 November 2017</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#nov21" data-toggle="pill">
                    Day-02
                      <span>21 November 2017</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#nov22" data-toggle="pill">
                    Day-03
                      <span>22 November 2017</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="schedule-contents bg-schedule">
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active schedule-item" id="nov20">
                    {/* Headings */}
                    <ul className="m-0 p-0">
                      <li className="headings">
                        <div className="time">Time</div>
                        <div className="speaker">Speaker</div>
                        <div className="subject">Subject</div>
                        <div className="venue">Venue</div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">9.00 AM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-one.jpg" alt="speaker-thumb-one"/>
                          <span className="name">Samanta Doe</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Introduction to Wp</div>
                          {/* Venue */}
                          <div className="venue">Auditorium A</div>
                        </div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">10.00 AM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-two.jpg" alt="speaker-thumb-two"/>
                          <span className="name">Zerad Pawel</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Principle of Wp</div>
                          {/* Venue */}
                          <div className="venue">Auditorium B</div>
                        </div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">12.00 AM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-three.jpg" alt="speaker-thumb-three"/>
                          <span className="name">Henry Mong</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Wp Requirements</div>
                          {/* Venue */}
                          <div className="venue">Auditorium C</div>
                        </div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">2.00 PM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-four.jpg" alt="speaker-thumb-four"/>
                          <span className="name">Baily Leo</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Introduction to Wp</div>
                          {/* Venue */}
                          <div className="venue">Auditorium D</div>
                        </div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">3.00 PM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-five.jpg" alt="speaker-thumb-five"/>
                          <span className="name">Lee Mun</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Useful tips for Wp</div>
                          {/* Venue */}
                          <div className="venue">Auditorium E</div>
                        </div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">3.00 PM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-six.jpg" alt="speaker-thumb-six"/>
                          <span className="name">Lee Mun</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Useful tips for Wp</div>
                          {/* Venue */}
                          <div className="venue">Auditorium E</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-pane fade schedule-item" id="nov21">
                    {/* Headings */}
                    <ul className="m-0 p-0">
                      <li className="headings">
                        <div className="time">Time</div>
                        <div className="speaker">Speaker</div>
                        <div className="subject">Subject</div>
                        <div className="venue">Venue</div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">9.00 AM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-one.jpg" alt="speaker-thumb-one"/>
                          <span className="name">Samanta Doe</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Introduction to Wp</div>
                          {/* Venue */}
                          <div className="venue">Auditorium A</div>
                        </div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">10.00 AM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-two.jpg" alt="speaker-thumb-two"/>
                          <span className="name">Zerad Pawel</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Principle of Wp</div>
                          {/* Venue */}
                          <div className="venue">Auditorium B</div>
                        </div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">12.00 AM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-three.jpg" alt="speaker-thumb-three"/>
                          <span className="name">Henry Mong</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Wp Requirements</div>
                          {/* Venue */}
                          <div className="venue">Auditorium C</div>
                        </div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">2.00 PM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-four.jpg" alt="speaker-thumb-four"/>
                          <span className="name">Baily Leo</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Introduction to Wp</div>
                          {/* Venue */}
                          <div className="venue">Auditorium D</div>
                        </div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">3.00 PM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-five.jpg" alt="speaker-thumb-five"/>
                          <span className="name">Lee Mun</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Useful tips for Wp</div>
                          {/* Venue */}
                          <div className="venue">Auditorium E</div>
                        </div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">3.00 PM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-six.jpg" alt="speaker-thumb-six"/>
                          <span className="name">Lee Mun</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Useful tips for Wp</div>
                          {/* Venue */}
                          <div className="venue">Auditorium E</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-pane fade schedule-item" id="nov22">
                    {/* Headings */}
                    <ul className="m-0 p-0">
                      <li className="headings">
                        <div className="time">Time</div>
                        <div className="speaker">Speaker</div>
                        <div className="subject">Subject</div>
                        <div className="venue">Venue</div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">9.00 AM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-one.jpg" alt="speaker-thumb-one"/>
                          <span className="name">Samanta Doe</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Introduction to Wp</div>
                          {/* Venue */}
                          <div className="venue">Auditorium A</div>
                        </div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">10.00 AM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-two.jpg" alt="speaker-thumb-two"/>
                          <span className="name">Zerad Pawel</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Principle of Wp</div>
                          {/* Venue */}
                          <div className="venue">Auditorium B</div>
                        </div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">12.00 AM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-three.jpg" alt="speaker-thumb-three"/>
                          <span className="name">Henry Mong</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Wp Requirements</div>
                          {/* Venue */}
                          <div className="venue">Auditorium C</div>
                        </div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">2.00 PM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-four.jpg" alt="speaker-thumb-four"/>
                          <span className="name">Baily Leo</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Introduction to Wp</div>
                          {/* Venue */}
                          <div className="venue">Auditorium D</div>
                        </div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">3.00 PM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-five.jpg" alt="speaker-thumb-five"/>
                          <span className="name">Lee Mun</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Useful tips for Wp</div>
                          {/* Venue */}
                          <div className="venue">Auditorium E</div>
                        </div>
                      </li>
                      {/* Schedule Details */}
                      <li className="schedule-details">
                        <div className="block">
                          {/* time */}
                          <div className="time">
                            <i className="fa fa-clock-o"></i>
                            <span className="time">3.00 PM</span>
                          </div>
                          {/* Speaker */}
                          <div className="speaker">
                            <img src="templates/event/images/speakers/speaker-thumb-six.jpg" alt="speaker-thumb-six"/>
                          <span className="name">Lee Mun</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Useful tips for Wp</div>
                          {/* Venue */}
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

        </>
    );
}