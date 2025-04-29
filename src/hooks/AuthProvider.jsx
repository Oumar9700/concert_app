import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constants/constant";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [errorLogin, setErrorLogin] = useState(null);
  const [successLogin, setSuccessLogin] = useState(null);

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken") || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log("Nouvel utilisateur connecté :", user);
    }
  }, [user]);

  const registerAction = async (data) => {
    const data_copy = {...data};
    delete data.role;
    delete data.confirm_password;

    try {
      const response = await fetch( API_BASE_URL + data_copy.role + "/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      
      console.log('au retour : ') 
      console.log(res);
      if (res.data) {
        
        console.log('res.data : ') 
        console.log(res.data);

        

        // setUser(  res.data.user);
        // console.log("dddd : user : ")
        // console.log(user)
        // setToken(res.data.token);
        // setRefreshToken(res.data.refreshToken);
        // localStorage.setItem("token", res.data.token);
        // localStorage.setItem("refreshToken", res.data.refreshToken);

        // console.log("localStorage", localStorage.getItem("token"));
        // console.log("navigating to dashboard");

        setSuccessLogin(res.message);
        navigate("/login");
        return;
      }
      setErrorLogin(res.error);
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const loginAction = async (data) => {
    try {
      const response = await fetch( API_BASE_URL + "login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      
      if (res.data) {

        console.log("user logged data :");
        console.log(res.data);

        

        setUser(  res.data);
        console.log("dddd : user : ")
        console.log(user)
        setToken(res.data.id);
        setRefreshToken(res.data.id);
        localStorage.setItem("token", res.data.id);
        localStorage.setItem("refreshToken", res.data.id);

        console.log("localStorage", localStorage.getItem("token"));
        console.log("navigating to dashboard");

        setErrorLogin(null);

        if(user.role == "client"){
          navigate("/dashboard");
        }else if(user.role == "admin"){
          navigate("/dashboard");
        }else if(user.role == "organizer"){
          navigate("/dashboard");
        }
        return;
      }
      setErrorLogin(res.error);
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, refreshToken, errorLogin, successLogin, user, loginAction, registerAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};