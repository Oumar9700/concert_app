export default function Events(){

    return (
        <>

      <section className="page-title bg-title overlay-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="title">
                <h3>Event Schedulee</h3>
              </div>
              <ol className="breadcrumb p-0 m-0">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">Event Schedule</li>
              </ol>
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
 

        </>
    );
}