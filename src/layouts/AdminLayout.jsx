import AssetsLoader from './AssetsLoader';
import Header from './admin/Header';
import Aside from './admin/AsideOrganizer';
import Footer from './admin/Footer';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/AuthProvider';

const AdminLayout = ({ children }) => {

  const user = useAuth();
  if (!user.user.id || user.user.role != "admin") return <Navigate to="/login" />; 

  return (
    
      <>
          {/* navbar, sidebar, etc. */}
          <Header />
          <Aside />
          {/* <Dashboard /> */}
          <Outlet />
          <Footer />
      </>
  );
};

export default AdminLayout;
