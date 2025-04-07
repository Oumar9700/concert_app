// src/layouts/AdminLayout.jsx
import { useEffect } from 'react';
import 'admin-lte/dist/css/adminlte.min.css';
// import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'admin-lte/dist/js/adminlte.min.js';

import { Outlet } from "react-router";


export default function AdminLayout({ children }) {
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
            <a href="/admin" className="nav-link">Dashboard</a>
          </li>
        </ul>
      </nav>

      {/* Sidebar */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/admin" className="brand-link">
          <span className="brand-text font-weight-light">AdminLTE</span>
        </a>
        <div className="sidebar">
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
              <li className="nav-item">
                <a href="/admin" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/admin/users" className="nav-link">
                  <i className="nav-icon fas fa-users"></i>
                  <p>Utilisateurs</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Content */}
      <div className="content-wrapper">
        <section className="content p-3">
          {children}
          <Outlet />
        </section>
      </div>
    </div>
  );
}
