export default function Contact(){

    return (
        <>

      <section className="page-title bg-title overlay-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="title">
                <h3>Event Schedule</h3>
              </div>
              <ol className="breadcrumb p-0 m-0">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">Event Schedule</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

        
      <section className="section contact-form">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h3>Get in <span className="alternate">Touch</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, velit.</p>
              </div>
            </div>
          </div>
          <form action="#" className="row">
            <div className="col-md-6">
              <input type="text" className="form-control main" name="name" id="name" placeholder="Name"/>
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control main" name="email" id="email" placeholder="Email"/>
            </div>
            <div className="col-md-12">
              <input type="text" className="form-control main" name="phone" id="phone" placeholder="Phone"/>
            </div>
            <div className="col-md-12">/
              <textarea name="message" id="message" className="form-control main" rows="10" placeholder="Your Message"></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-main-md">Send Message</button>
            </div>
          </form>
        </div>
      </section>

{/*================================
=            Google Map            =
================================= */}

      <section className="map">
        {/* Google Map  */}
        <div id="map"></div>
        <div className="address-block">
          <h4>Docklands Convention</h4>
          <ul className="address-list p-0 m-0">
            <li><i className="fa fa-home"></i><span>1201 Park Street, Fifth Avenue, <br/>Dhanmondy, Dhaka.</span></li>
            <li><i className="fa fa-phone"></i><span>[88] 657 524 332</span></li>
          </ul>
          <a href="#" className="btn btn-white-md">Get Direction</a>
        </div>
      </section>

 

        </>
    );
}