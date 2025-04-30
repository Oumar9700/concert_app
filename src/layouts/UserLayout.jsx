// src/layouts/AdminLayout.jsx
import { useEffect } from 'react';
import AssetsLoader from './AssetsLoader';
import { Outlet } from 'react-router-dom';

// import $ from 'jquery';

const UserLayout = ({ children }) => {
  return (
   
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
                
                <li className="nav-item active">
                  <a className="nav-link" href="/">Accueil
                    <span>/</span>
                  </a>
                </li>

                <li className="nav-item ">
                  <a className="nav-link" href="events">Evènements
                    <span>/</span>
                  </a>
                </li>

                <li className="nav-item ">
                  <a className="nav-link" href="contacts">Nous contacter
                    <span>/</span>
                  </a>
                </li>

                
                
                
                <li className="nav-item">
                  <a className="nav-link" href="/register">S'inscrire</a>
                </li>
              </ul>
              <a href="login" className="ticket">
                <img src="templates/event/images/icon/ticket.png" alt="ticket"/>
                <span>Se connecter</span>
              </a>
              </div>
          </div>
        </nav>

        <Outlet />

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
  );
};

export default UserLayout;



