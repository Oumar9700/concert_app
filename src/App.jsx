import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserLayout from './layouts/UserLayout';
import Home from './pages/site/Home';
import Events from './pages/site/Events';
import Contact from './pages/site/Contact';
import Login from './pages/site/Login';
import Register from './pages/site/Register';
import AuthProvider from './hooks/AuthProvider';


export default function App() {
  return (
    <BrowserRouter>

      <AuthProvider>

        <Routes>
          

          {/* Routes pour les users */}
          {/* <Route path="/" element={<UserLayout />}>
            <Route index element={<h1>User home page</h1>} />
          </Route> */}

          <Route path='/'  element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path='events' element={<Events />} />
            <Route path='contacts' element={<Contact />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>

          {/* Routes pour les admins */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
          </Route>
          
          
          
        </Routes>
        
      </AuthProvider>
    </BrowserRouter>
  );
}



