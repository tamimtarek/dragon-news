import { Link, useLocation, useNavigate} from "react-router-dom";
import Navbar from "../Shered/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const {login} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    console.log("location in the login page", location);
    const [showUser, setShowUser] = useState('');
    const handleLogin = e => {
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        login(email, password)
        .then(()=> {
            setShowUser("Successfully Login")

            navigate(location?.state ? location.state : '/');
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-center text-3xl my-10">Please Login </h3>
            <div>
                <form onSubmit={handleLogin} className="card-body md:w-4/5 lg:w-2/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    {
                        showUser && <small className="text-green-500">{showUser}</small>
                    }
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>

                </form>
                <p className="text-center">Do not Have an Account? <Link className="text-blue-700 font-semibold" to='/register'>Resiter</Link></p>
            </div>
        </div>
    );
};

export default Login;