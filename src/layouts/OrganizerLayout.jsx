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
      <AssetsLoader
        styles={[
         
          "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback",
          
          "templates/adminlte/plugins/fontawesome-free/css/all.min.css",
          
          "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css",
          
          "templates/adminlte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css",
          
          "templates/adminlte/plugins/icheck-bootstrap/icheck-bootstrap.min.css",
          
          "templates/adminlte/plugins/jqvmap/jqvmap.min.css",
          
          "templates/adminlte/dist/css/adminlte.min.css",
          
          "templates/adminlte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css",
          
          "templates/adminlte/plugins/daterangepicker/daterangepicker.css",
          "templates/adminlte/plugins/summernote/summernote-bs4.min.css",
          "templates/adminlte/dist/css/my_styles.css",

          "templates/adminlte/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css",
          "templates/adminlte/plugins/datatables-responsive/css/responsive.bootstrap4.min.css",
          "templates/adminlte/plugins/datatables-buttons/css/buttons.bootstrap4.min.css",


        ]}

        scripts={[
          
          "templates/adminlte/plugins/jquery/jquery.min.js",
          "templates/adminlte/plugins/jquery-ui/jquery-ui.min.js",
          
          "templates/adminlte/plugins/bootstrap/js/bootstrap.bundle.min.js",
          "templates/adminlte/plugins/chart.js/Chart.min.js",
          
          "templates/adminlte/plugins/sparklines/sparkline.js",
          
          "templates/adminlte/plugins/jqvmap/jquery.vmap.min.js",
          "templates/adminlte/plugins/jqvmap/maps/jquery.vmap.usa.js",
          
          "templates/adminlte/plugins/jquery-knob/jquery.knob.min.js",
          
          "templates/adminlte/plugins/moment/moment.min.js",
          "templates/adminlte/plugins/daterangepicker/daterangepicker.js",
          
          "templates/adminlte/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js",
          
          "templates/adminlte/plugins/summernote/summernote-bs4.min.js",
          
          "templates/adminlte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js",
          
          "templates/adminlte/dist/js/adminlte.js",
          
          
      
          "templates/adminlte/plugins/datatables/jquery.dataTables.min.js",
          "templates/adminlte/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js",
          "templates/adminlte/plugins/datatables-responsive/js/dataTables.responsive.min.js",
          "templates/adminlte/plugins/datatables-responsive/js/responsive.bootstrap4.min.js",
          "templates/adminlte/plugins/datatables-buttons/js/dataTables.buttons.min.js",
          "templates/adminlte/plugins/datatables-buttons/js/buttons.bootstrap4.min.js",
          "templates/adminlte/plugins/jszip/jszip.min.js",
          "templates/adminlte/plugins/pdfmake/pdfmake.min.js",
          "templates/adminlte/plugins/pdfmake/vfs_fonts.js",
          "templates/adminlte/plugins/datatables-buttons/js/buttons.html5.min.js",
          "templates/adminlte/plugins/datatables-buttons/js/buttons.print.min.js",
          "templates/adminlte/plugins/datatables-buttons/js/buttons.colVis.min.js",
                
        ]}
      />
    
      <>
          {/* navbar, sidebar, etc. */}
          <Header />
          <AsideOrganizer />
          {/* <Dashboard /> */}
          <Outlet />
          <Footer />
      </>

    </>
  );
};

export default OrganizerLayout;
