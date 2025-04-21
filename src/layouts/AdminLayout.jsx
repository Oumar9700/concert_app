import 'admin-lte/dist/css/adminlte.min.css'; // tu peux garder les imports principaux ici
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import AssetsLoader from './AssetsLoader';

const AdminLayout = ({ children }) => {
  return (
    <>
      <AssetsLoader
        scripts={[
          '/node_modules/jquery/dist/jquery.min.js',
          '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
          '/node_modules/admin-lte/dist/js/adminlte.min.js',
        ]}
      />

      {/* Ton layout HTML admin ici */}
      <div className="wrapper">
        {/* navbar, sidebar, etc. */}
        <main className="content-wrapper">{children}</main>
      </div>
    </>
  );
};

export default AdminLayout;
