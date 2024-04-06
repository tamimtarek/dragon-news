import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const location = useLocation();
    console.log(location.pathname);
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-ball loading-lg"></span>  
    }

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate> ;
};

export default PrivetRoute;