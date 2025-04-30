export default function Home(){

    return (
        <>

      <section className="banner bg-banner-one overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Content Block */}
              <div className="block">
                {/* Countdown Timer */}
                <div className="timer"></div>
                <h1>Réservez vos billets</h1>
                <h2>Pour les meilleurs concerts de l'année</h2>
                <h6>Juin - Septembre 2025 • Partout en France</h6>
                {/* Action Button */} 
                <a href="events" className="btn btn-white-md">Acheter un billet</a>
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
                <img className="img-fluid" src="templates/event/images/speakers/featured-speaker.jpg" alt="Concert Highlight" />
              </div>
            </div>
            <div className="col-lg-8 col-md-6 align-self-center">
              <div className="content-block">
                <h2>À propos de <span className="alternate">EvenTre</span></h2>
                <div className="description-one">
                  <p>
                    EvenTre est votre plateforme de référence pour acheter des billets de concerts en ligne. Grâce à une interface simple et rapide, trouvez vos artistes préférés et réservez votre place en quelques clics.
                  </p>
                </div>
                <div className="description-two">
                  <p>
                    Des concerts dans toute la France, des artistes locaux aux stars internationales, vivez l'expérience musicale comme jamais auparavant. Restez informé des événements à venir et profitez de billets à prix avantageux !
                  </p>
                </div>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="events" className="btn btn-main-md">Acheter un billet</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="events" className="btn btn-transparent-md">En savoir plus</a>
                  </li>
                </ul>
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
                  <h3>Places Limitées ! <span className="alternate">Ne Manquez Pas Votre Chance</span></h3>
                    <p>Les billets s'envolent vite. Réservez votre place pour une soirée inoubliable !</p>
                 </div>
               
                <div className="timer"></div>
                <a href="events" className="btn btn-main-md">Acheter votre Ticket</a>
              </div>
            </div>
            <div className="col-lg-5 p-0">
              <div className="block-2">
                <div className="row no-gutters">
                  <div className="col-6">
                    <div className="service-item">
                      <i className="fa fa-microphone"></i>
                      <h5>10 artistes</h5>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="service-item">
                      <i className="fa fa-flag"></i>
                      <h5>1000+ places disponibles</h5>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="service-item">
                      <i className="fa fa-ticket"></i>
                      <h5>500+ tickets déjà vendus</h5>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="service-item">
                      <i className="fa fa-calendar"></i>
                      <h5>5 concerts en tournée</h5>
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
            <h4>Localisations des concerts</h4> <br />
            <ul className="address-list p-0 m-0">
              <li><i className="fa fa-home"></i><span>Paris, Marseille, Lyon, Lille, Toulouse.</span></li>
              <li><i className="fa fa-phone"></i><span>contact@ticketnow.fr / +33 6 12 34 56 78</span></li>
            </ul>
            <a href="#" className="btn btn-white-md">Voir Direction</a>
          </div>
          <div className="register overlay-dark bg-registration-two">
            <div className="block">
              <div className="title text-center">
                <h3>Register to <span className="alternate">Eventre</span></h3>
                <p>Eventre vous attend ! Inscrivez-vous pour vivre l'événement.</p>
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