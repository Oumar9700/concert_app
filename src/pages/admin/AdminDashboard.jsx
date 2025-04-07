// src/pages/admin/AdminDashboard.jsx
export default function AdminDashboard() {
    return (
      <div className="container-fluid">
        <h1 className="mb-4">Bienvenue sur le tableau de bord Admin</h1>
        <div className="row">
          <div className="col-lg-3 col-6">
            <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>
                <p>Nouveaux utilisateurs</p>
              </div>
              <div className="icon">
                <i className="fas fa-user-plus"></i>
              </div>
              <a href="/admin/users" className="small-box-footer">
                Voir plus <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  