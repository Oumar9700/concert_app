import React, { useEffect, useState } from 'react';

export default function AsideAdmin() {

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="index3.html" className="brand-link">
      <img src="templates/adminlte/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: .8}} />
      <span className="brand-text font-weight-light">Eventre</span>
    </a>

    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="templates/adminlte/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
        </div>
        <div className="info">
          <a href="#" className="d-block">Admin Dashboard</a>
        </div>
      </div>

      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library --> */}
          
          <li className="nav-item">
            <a href="" className="nav-link">
              <i className="nav-icon fas fa-th"></i>
              <p>
                Evenements
              </p>
            </a>
          </li>
          
        </ul>
      </nav>
    </div>
  </aside>
  );
}