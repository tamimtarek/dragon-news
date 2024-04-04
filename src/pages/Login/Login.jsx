import { Link } from "react-router-dom";
import Navbar from "../Shered/Navbar/Navbar";


const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        console.log(form.get('password'))
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