import React, { useState } from "react";
import { API_BASE_URL } from "../../constants/constant";
import { useAuth } from "../../hooks/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function CreateConcertForm() {

    const user = useAuth();
    const navigate = useNavigate();

    console.log("afificher token :", user)

  const [concertData, setConcertData] = useState({
    title: "",
    description: "",
    capacity: 100000,
    country: "",
    city: "",
    address: "",
    beginDate: "",
    endDate: "",
    repaymentConditions: "",
    validatedConcert: false,
    organizerId: user.token, // à adapter dynamiquement si besoin
  });

  const [prices, setPrices] = useState([]);
  const [passages, setPassages] = useState([]);

  const handleConcertChange = (e) => {
    const { name, value } = e.target;
    setConcertData({ ...concertData, [name]: value });
  };

  const handleAddPrice = () => {
    setPrices([...prices, { price: "", type: "", description: "" }]);
  };
  const handleAddPassage = () => {
    setPassages([...passages, { artistLastname: "", artistFirstname: "", beginHour: "" , endHour : ""}]);
  };

  const handlePriceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPrices = [...prices];
    updatedPrices[index][name] = value;
    setPrices(updatedPrices);
  };

  const handlePassageChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPassages = [...passages];
    updatedPassages[index][name] = value;
    setPassages(updatedPassages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...concertData,
      capacity: parseInt(concertData.capacity),
      validatedConcert: false,
      prices: prices.map(p => ({ ...p, price: parseFloat(p.price) })),
      passages: passages
    };

    console.log("Payload to send:", payload);

    try {
      const response = await fetch(API_BASE_URL + "concert/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      alert("Concert créé avec succès !");

      console.log(result);
      navigate("/concertList");
      
    } catch (error) {
      console.error("Erreur lors de la création :", error);
    }
  };

  return (

    <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Organiser Dashboard</h1>
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
            {/* Small boxes (Stat box) */}
            <div className="container mt-4">
                <div className="card card-primary">
                    <div className="card-header">
                    <h3 className="card-title">Créer un concert</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Titre</label>
                            <input required type="text" name="title" className="form-control" onChange={handleConcertChange} />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea required name="description" className="form-control"
                                onChange={handleConcertChange}></textarea>
                        </div>
                        <div className="form-group">
                            <label>Capacité</label>
                            <input required type="number" name="capacity" className="form-control"
                                onChange={handleConcertChange} />
                        </div>
                        <div className="form-group">
                            <label>Pays</label>
                            <input required type="text" name="country" className="form-control" onChange={handleConcertChange} />
                        </div>
                        <div className="form-group">
                            <label>Ville</label>
                            <input required type="text" name="city" className="form-control" onChange={handleConcertChange} />
                        </div>
                        <div className="form-group">
                            <label>Adresse</label>
                            <input required type="text" name="address" className="form-control" onChange={handleConcertChange} />
                        </div>
                        <div className="form-group">
                            <label>Date de début</label>
                            <input required type="datetime-local" name="beginDate" className="form-control"
                                onChange={handleConcertChange} />
                        </div>
                        <div className="form-group">
                            <label>Date de fin</label>
                            <input required type="datetime-local" name="endDate" className="form-control"
                                onChange={handleConcertChange} />
                        </div>
                        <div className="form-group">
                            <label>Conditions de remboursement</label>
                            <textarea required name="repaymentConditions" className="form-control"
                                onChange={handleConcertChange}></textarea>
                        </div>

                        <hr />

                        <h5>Tarifs</h5>
                        {prices.map((price, index) => (
                        <div key={index} className="row mb-2">
                            <div className="col-md-3">
                                <input required type="number" name="price" className="form-control" placeholder="Prix"
                                    value={price.price} onChange={(e)=> handlePriceChange(index, e)}
                                />
                            </div>
                            <div className="col-md-3">
                                <input required type="text" name="type" className="form-control"
                                    placeholder="Type (VIP, NORMAL...)" value={price.type} onChange={(e)=>
                                handlePriceChange(index, e)}
                                />
                            </div>
                            <div className="col-md-6">
                                <input required type="text" name="description" className="form-control" placeholder="Description"
                                    value={price.description} onChange={(e)=> handlePriceChange(index, e)}
                                />
                            </div>
                        </div>
                        ))}

                        <div className="form-group">
                            <button type="button" className="btn btn-secondary" onClick={handleAddPrice}>
                                Ajouter un tarif
                            </button>
                        </div>
                        <hr />




                        <h5>Artistes et passages</h5>
                        {passages.map((passage, index) => (
                        <div key={index} className="row mb-2">
                            <div className="col-md-3">
                                <input required type="text" name="artistLastname" className="form-control" placeholder="Nom"
                                    value={passage.artistLastname} onChange={(e)=> handlePassageChange(index, e)}
                                />
                            </div>
                            <div className="col-md-3">
                                <input required type="text" name="artistFirstname" className="form-control"
                                    placeholder="Prenom" value={passage.artistFirstname} onChange={(e)=>
                                        handlePassageChange(index, e)}
                                />
                            </div>
                            <div className="col-md-3">
                                <input required type="datetime-local" name="beginHour" className="form-control" placeholder="Heure début"
                                    value={passage.beginHour} onChange={(e)=> handlePassageChange(index, e)}
                                />
                            </div>
                            <div className="col-md-3">
                                <input required type="datetime-local" name="endHour" className="form-control" placeholder="Heure fin"
                                    value={passage.endHour} onChange={(e)=> handlePassageChange(index, e)}
                                />
                            </div>
                        </div>
                        ))}

                        <div className="form-group">
                            <button type="button" className="btn btn-secondary" onClick={handleAddPassage}>
                                Ajouter un passage d'artiste
                            </button>
                        </div>
                    </div>

                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">Valider le concert</button>
                    </div>
                    </form>
                </div>
            </div>
            {/* /.row (main row) */}
          </div>{/* /.container-fluid */}
        </section>
        {/* /.content */} 
      </div>


    
  );
}
