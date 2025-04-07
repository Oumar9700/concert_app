// src/layouts/AdminLayout.jsx
import { useEffect } from 'react';
import 'admin-lte/dist/css/adminlte.min.css';
// import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'admin-lte/dist/js/adminlte.min.js';

export default function UserLayout({ children }) {
  useEffect(() => {
    // Init AdminLTE JS if needed
    $('[data-widget="treeview"]').Treeview?.('init');
  }, []);

  return (
    <div className="wrapper">
      {/* Header */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#">
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/admin" className="nav-link">User Dashboard</a>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="content-wrapper">
        <section className="content p-3">
          {children}
        </section>
      </div>
    </div>
  );
}
