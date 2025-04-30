import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
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
import OrganizerDashboard from './pages/organizer/OrganizerDashboard';
import OrganizerLayout from './layouts/OrganizerLayout';
import CreateConcertForm from './pages/organizer/CreateConcert';
import ConcertList from './pages/organizer/ConcertList';


export default function App() {
  return (
    

      <AuthProvider>

        <Routes>

          <Route path='/'  element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path='events' element={<Events />} />
            <Route path='contacts' element={<Contact />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>


          {/* Routes pour les admins */}
          <Route element={<AdminLayout />}>
            <Route path='/homeAdmin' element={<AdminDashboard />} />
          </Route>

          <Route element={<OrganizerLayout />}>
            <Route path='/homeOrganizer' element={<OrganizerDashboard />} />
            <Route path='/createEvent' element={<CreateConcertForm />} />
            <Route path='/concertList' element={<ConcertList />} />
          </Route>
          
        </Routes>
        
      </AuthProvider>
  );
}



