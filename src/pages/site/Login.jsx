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
    if (input.email !== "" && input.password !== "" ) {
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
            <div className="col-6 mx-auto">
              <div className="section-title">
                <h3>Conne<span className="alternate">xion</span></h3>
                <p>Remplissez le formulaire pour vous connecter</p>
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-6 mx-auto">

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
                            <div className="alert alert-success alert-dismissible">
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
                
                <div className="col-md-12">
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

                <div className="col-md-12">
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

                

                
                
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-main-md">Connexion</button>
                </div>

              </form>
            </div>

          </div>

        </div>
      </section>


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