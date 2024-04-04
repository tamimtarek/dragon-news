import React from 'react';
import Navbar from '../Shered/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleLogin = e => {
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        console.log(form.get('password'))
    }

    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-center text-3xl my-10">Please Register </h3>
            <div>
                <form onSubmit={handleLogin} className="card-body md:w-4/5 lg:w-2/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="email" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="email" name="photoUrl" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center">Already Have an Account? <Link className="text-blue-700 font-semibold" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;