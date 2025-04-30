
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-bs4';
import { API_BASE_URL } from '../../constants/constant';
import axios from 'axios';
import jsPDF from "jspdf";


const ConcertList = () => {
  const [concerts, setConcerts] = useState([]);
  const [selectedConcert, setSelectedConcert] = useState(null);

  const [selectedPrice, setSelectedPrice] = useState(null);
  const [ticketForm, setTicketForm] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });


  useEffect(() => {
    // Fetch concerts (remplace l’URL par ton API)
    fetch(API_BASE_URL+ "concert/")
      .then((res) => res.json())
      .then((data) => setConcerts(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    // Initialiser DataTable après que les données sont affichées
    if (concerts.length > 0) {
      $('#concertTable').DataTable();
    }
  }, [concerts]);


  

  const generateTicketPDF = () => {
    const doc = new jsPDF();
  
    // En-tête
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 180);
    doc.text("🎫 TICKET DE CONCERT", 20, 20);
  
    // Ligne horizontale
    doc.setDrawColor(40, 40, 180);
    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);
  
    // Informations personnelles
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("👤 Informations du participant :", 20, 40);
    doc.setFontSize(12);
    doc.text(`Nom complet : ${ticketForm.firstname} ${ticketForm.lastname}`, 25, 50);
    doc.text(`Email       : ${ticketForm.email}`, 25, 58);
  
    // Informations sur le concert
    doc.setFontSize(14);
    doc.text("🎵 Détails du concert :", 20, 75);
    doc.setFontSize(12);
    doc.text(`Titre        : ${selectedConcert.title}`, 25, 85);
    doc.text(`Adresse      : ${selectedConcert.address}, ${selectedConcert.city}, ${selectedConcert.country}`, 25, 93);
    doc.text(`Date & Heure : ${new Date(selectedConcert.beginDate).toLocaleString()} - ${new Date(selectedConcert.endDate).toLocaleString()}`, 25, 101);
  
    // Billet
    doc.setFontSize(14);
    doc.text("🎟️ Billet réservé :", 20, 120);
    doc.setFontSize(12);
    doc.text(`Type : ${selectedPrice.type}`, 25, 130);
    doc.text(`Prix : ${selectedPrice.price} €`, 25, 138);
  
    // Code de validation ou signature
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text("Merci pour votre réservation. Veuillez présenter ce ticket à l'entrée.", 20, 160);
    doc.text(`🎫 Ticket ID: ${Math.floor(Math.random() * 1000000000)}`, 20, 170);
  
    // Pied de page
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text("Powered by MyConcertApp", 150, 285);
  
    doc.save("ticket.pdf");
  };
  




  return (

    <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Organizer Dashboard</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}

        {/* Main content */}

        <section className="content">
          <div className="container-fluid">

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Liste des concerts</h3>
              </div>
              <div className="card-body">
                <table id="concertTable" className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Titre</th>
                      <th>Ville</th>
                      <th>Pays</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {concerts.map((concert) => (
                      <tr key={concert.id}>
                        <td>{concert.title}</td>
                        <td>{concert.city}</td>
                        <td>{concert.country}</td>
                        <td>{new Date(concert.beginDate).toLocaleDateString()}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => setSelectedConcert(concert)}
                          >
                            Détails
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {selectedConcert && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header bg-primary text-white">
                        <h5 className="modal-title">{selectedConcert.title}</h5>
                        <button type="button" className="close text-white" onClick={() => setSelectedConcert(null)}>
                          <span>&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p><strong>Description :</strong> {selectedConcert.description}</p>
                        <p><strong>Adresse :</strong> {selectedConcert.address}, {selectedConcert.city}, {selectedConcert.country}</p>
                        <p><strong>Capacité :</strong> {selectedConcert.capacity} personnes</p>
                        <p><strong>Dates :</strong> {new Date(selectedConcert.beginDate).toLocaleString()} → {new Date(selectedConcert.endDate).toLocaleString()}</p>
                        <p><strong>Conditions de remboursement :</strong> {selectedConcert.repaymentConditions}</p>

                        {/* 🎤 Artistes */}
                        <h5 className="mt-4">🎤 Artistes programmés</h5>
                        <ul className="list-group mb-4">
                          {selectedConcert.passages?.map((passage, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                              <div>
                                <strong>{passage.artistFirstname} {passage.artistLastname}</strong><br />
                                <small>Du {new Date(passage.beginHour).toLocaleString()} au {new Date(passage.endHour).toLocaleString()}</small>
                              </div>
                            </li>
                          ))}
                        </ul>

                        {/* 🎫 Prix et Tickets */}
                        <h5>🎫 Billets</h5>
                        <div className="row">
                          {selectedConcert.prices?.map((price, index) => (
                            <div key={index} className="col-md-4 mb-3">
                              <div className="card border-primary">
                                <div className="card-body">
                                  <h5 className="card-title text-primary">{price.type.toUpperCase()}</h5>
                                  <p className="card-text">{price.description}</p>
                                  <p><strong>{price.price} €</strong></p>
                                  {/* <button
                                    className="btn btn-success btn-sm"
                                    onClick={() => setSelectedPrice(price)}
                                  >
                                    Prendre un ticket
                                  </button> */}
                                </div>
                              </div>
                            </div>
                          ))}

                          {selectedPrice && (
                            <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header bg-success text-white">
                                    <h5 className="modal-title">🎟 Réserver un ticket - {selectedPrice.type.toUpperCase()}</h5>
                                    <button type="button" className="close text-white" onClick={() => setSelectedPrice(null)}>
                                      <span>&times;</span>
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <p><strong>Prix :</strong> {selectedPrice.price} €</p>
                                    <form>
                                      <div className="form-group">
                                        <label>Prénom</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          value={ticketForm.firstname}
                                          onChange={(e) => setTicketForm({ ...ticketForm, firstname: e.target.value })}
                                        />
                                      </div>
                                      <div className="form-group">
                                        <label>Nom</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          value={ticketForm.lastname}
                                          onChange={(e) => setTicketForm({ ...ticketForm, lastname: e.target.value })}
                                        />
                                      </div>
                                      <div className="form-group">
                                        <label>Email</label>
                                        <input
                                          type="email"
                                          className="form-control"
                                          value={ticketForm.email}
                                          onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                                        />
                                      </div>
                                    </form>
                                  </div>
                                  <div className="modal-footer">
                                    <button className="btn btn-secondary" onClick={() => setSelectedPrice(null)}>Annuler</button>
                                    <button
                                      className="btn btn-success"
                                     
                                      onClick={async () => {
                                        try {
                                          const response = await axios.post(API_BASE_URL + "ticket/", {
                                            clientFirstname: ticketForm.firstname,
                                            clientLastname: ticketForm.lastname,
                                            clientEmail: ticketForm.email,
                                            concertId: selectedConcert.id,
                                            priceId: selectedPrice.id
                                          });
                                      
                                          alert("🎉 Réservation réussie !");
                                          generateTicketPDF();

                                          setSelectedPrice(null);
                                          setTicketForm({ firstname: '', lastname: '', email: '' });
                                        } catch (error) {
                                          console.error(error);
                                          alert("❌ Une erreur est survenue lors de la réservation.");
                                        }
                                      }}
                                      
                                    >
                                      Confirmer la réservation
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                        </div>
                      </div>

                      <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={() => setSelectedConcert(null)}>Fermer</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
        </section>
        
        {/* /.content */} 
      </div>

      
  );
};

export default ConcertList;
