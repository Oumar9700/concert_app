import AssetsLoader from './AssetsLoader';
import Header from './admin/Header';
import Aside from './admin/AsideOrganizer';
import Footer from './admin/Footer';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/AuthProvider';
import AsideOrganizer from './admin/AsideOrganizer';

const OrganizerLayout = ({ children }) => {

  const user = useAuth();
  console.log("le user recup :", user);
  // // if (!user.id || user.role != "organizer") return <Navigate to="/login" />; 
  // if (user.user === null) {
  //   return <Navigate to="/login" />; // ou un spinner sympa
  // }
  
  // if (!user.user.id || user.user.role !== "organizer") {
  //   return <Navigate to="/login" />;
  // }
  return (
      <>
          {/* navbar, sidebar, etc. */}
          <Header />
          <AsideOrganizer />
          {/* <Dashboard /> */}
          <Outlet />
          <Footer />
      </>
  );
};

export default OrganizerLayout;
