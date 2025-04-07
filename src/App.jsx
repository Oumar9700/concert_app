import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserLayout from './layouts/UserLayout';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        

         {/* Routes pour les users */}
         {/* <Route path="/" element={<UserLayout />}>
          <Route index element={<h1>User home page</h1>} />
        </Route> */}

        {/* Routes pour les admins */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>
        
        <Route path='/user'  element={<UserLayout />} />
        
        </Routes>
    </BrowserRouter>
  );
}



