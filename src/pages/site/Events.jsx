export default function Events(){

    return (
        <>

      <section className="page-title bg-title overlay-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="title">
                <h3>Concerts avenir</h3>
              </div>
              <ol className="breadcrumb p-0 m-0">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">Evenements</li>
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
                <h3>Concerts <span className="alternate">à venir</span></h3>
                <p>Des concerts dans toute la France, des artistes locaux aux stars internationales</p>
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
                      <span>14 Juin 2025, Paris</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#nov21" data-toggle="pill">
                    Day-02
                      <span>21 Juin 2025, Marseille</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#nov22" data-toggle="pill">
                    Day-03
                      <span>27 Juin 2025, Lyon</span>
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
                        <div className="time">Temps</div>
                        <div className="speaker">Artiste</div>
                        <div className="subject">Sujet</div>
                        <div className="venue">Salle</div>
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
                          <span className="name">Yemi Alade</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Introduction to Wp</div>
                          {/* Venue */}
                          <div className="venue">Stade Charléty</div>
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
                          <span className="name">Burna Boy</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Principle of Wp</div>
                          {/* Venue */}
                          <div className="venue"> Le Dôme</div>
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
                          <span className="name">Tayc</span>
                          </div>
                          {/* Subject */}
                          <div className="subject">Wp Requirements</div>
                          {/* Venue */}
                          <div className="venue">Halle Tony Garnier C</div>
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