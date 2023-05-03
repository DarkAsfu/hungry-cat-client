import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../shared/socialLogin';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser, updateInfo } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please enter at least one uppercase');
            return;
        } else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please enter at least one special character');
            return;
        } else if (!/(?=.*[0-9])/.test(password)) {
            setError('Please enter at least one number');
            return;
        } else if (!/.{8}/.test(password)) {
            setError('Please enter minimum 8 character');
            return;
        }
        createUser(email, password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
                updateInfo(name, photo);
                setSuccess('Register successfully!!!');
                setError('')
                form.reset();
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
                setSuccess('')
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center px-10">
                    <h1 className="text-4xl font-bold">Please Register !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p className="label-text-alt ">Already have an account? please <Link to='/login' className='text-blue-400'>Sign in</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <SocialLogin></SocialLogin>
                        <label className="label">
                            <p className="label-text-alt text-red-600">{error}</p>
                            <p className="label-text-alt text-green-600">{success}</p>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;