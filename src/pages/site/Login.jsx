import { useState } from "react";
import { useAuth } from "../../hooks/AuthProvider";
import { GENDER, ROLES } from "../../constants/constant";

export default function Register(){

  const [input, setInput] = useState({
          email: "",
          password: "",
        });

  
  const auth = useAuth();
  
  const handleSubmitEvent = (e) => {

    console.log(input);

    e.preventDefault();
    if (input.email !== "" && input.password !== "" && input.password == input.confirm_password) {
          auth.loginAction(input);
        return;
    }
    alert("Veuillez fournir un email et un mot de passe valides");
      
      
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
        ...prev,
        [name]: value,
    }));
};


    return (
        <>



      <section className="page-title bg-title overlay-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="title">
                <h3>Connexion</h3>
              </div>
              <ol className="breadcrumb p-0 m-0">
                <li className="breadcrumb-item"><a href="/">Accueil</a></li>
                <li className="breadcrumb-item active">Se connecter</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

        
      <section className="section contact-form">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h3>Conne<span className="alternate">xion</span></h3>
                <p>Remplissez le formulaire pour vous connecter</p>
              </div>
            </div>
          </div>

          {/* {input} */}

          {
                    auth.errorLogin ? (
                        <div className="alert alert-danger alert-dismissible">
                            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                            <h5><i className="icon fas fa-ban"></i> Erreur !</h5>
                            {auth.errorLogin}
                        </div>
                    ) : null
                }
          {
                    auth.successLogin ? (
                        <div className="alert alert-danger alert-dismissible">
                            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                            <h5><i className="icon fas fa-ban"></i> Success !</h5>
                            {auth.successLogin}
                        </div>
                    ) : null
                }

          {/* <div>
            <h2>Valeurs sélectionnés</h2>
            <pre>{JSON.stringify(input, null, 2)}</pre>
          </div> */}

          <form onSubmit={handleSubmitEvent} className="row">
            <div className="col-md-6">
              <input 
                className="form-control main" 
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Prénom"
                aria-describedby="firstname"
                aria-invalid="false"
                onChange={handleInput}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control main" 
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Nom"
                aria-describedby="lastname"
                aria-invalid="false"
                onChange={handleInput} required/>
            </div>
            <div className="col-md-6">
              <input 
                className="form-control main" 
                type="email"
                id="email"
                name="email"
                placeholder="email"
                aria-describedby="email"
                aria-invalid="false"
                onChange={handleInput} required
              />
            </div>

            <div className="col-md-6">
              <input 
                className="form-control main" 
                type="text"
                id="phone"
                name="phone"
                placeholder="Téléphone"
                aria-describedby="phone"
                aria-invalid="false"
                onChange={handleInput} required
              />
            </div>

            <div className="col-md-6">
              
              <select 
                style={{padding: "0px", height: "62%"}}
                name="gender"
                placeholder="Sexe" 
                className="form-control main"  
                onChange={handleInput}>

                  <option key={GENDER.MALE} value={GENDER.MALE}>
                    {GENDER.MALE}
                  </option>
                  <option key={GENDER.FEMALE} value={GENDER.FEMALE}>
                    {GENDER.FEMALE}
                  </option>
                  <option key={GENDER.UNKNOWN} value={GENDER.UNKNOWN}>
                    {GENDER.UNKNOWN}
                  </option>
                
              </select>
            </div>


            <div className="col-md-6">
              <input 
                className="form-control main" 
                type="password"
                id="password"
                name="password"
                placeholder="password"
                aria-describedby="password"
                aria-invalid="password"
                onChange={handleInput} required
              />
            </div>

            <div className="col-md-6">
              <input 
                className="form-control main" 
                type="password"
                id="confirm_password"
                name="confirm_password"
                placeholder="confirm_password"
                aria-describedby="confirm_password"
                aria-invalid="confirm_password"
                onChange={handleInput} required
              />
            </div>

            <div className="col-md-6">
              
              <select 
                style={{padding: "0px", height: "62%"}}
                name="role"
                placeholder="Role" 
                className="form-control main"  
                onChange={handleInput}>

                  <option key={ROLES.CLIENT} value={ROLES.CLIENT}>
                    {ROLES.CLIENT}
                  </option>
                  <option key={ROLES.ORGANIZER} value={ROLES.ORGANIZER}>
                    {ROLES.ORGANIZER}
                  </option>
                
              </select>
            </div>
            
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-main-md">S'inscrire</button>
            </div>

          </form>
        </div>
      </section>

{/*================================
=            Google Map            =
================================= */}

      <section className="map">
        {/* Google Map  */}
        <div id="map"></div>
        <div className="address-block">
          <h4>Docklands Convention</h4>
          <ul className="address-list p-0 m-0">
            <li><i className="fa fa-home"></i><span>1201 Park Street, Fifth Avenue, <br/>Dhanmondy, Dhaka.</span></li>
            <li><i className="fa fa-phone"></i><span>[88] 657 524 332</span></li>
          </ul>
          <a href="#" className="btn btn-white-md">Get Direction</a>
        </div>
      </section>

 

        </>
    );
}