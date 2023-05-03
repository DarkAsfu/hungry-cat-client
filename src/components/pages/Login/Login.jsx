import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../shared/socialLogin';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const handleSignIn = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('Successfully login!!');
            setError('');
            form.reset();
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message);
            setSuccess('')
        })
    }
    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center px-14">
                    <h1 className="text-4xl font-bold mb-2">Please Login !</h1>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, officiis.</p> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-8">
                    <form onSubmit={handleSignIn} className="card-body">
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
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    <p className="label-text-alt p-8">Are you new? please <Link to='/register' className='text-blue-400'>Register</Link></p>
                    <SocialLogin></SocialLogin>
                    <small className='text-red-600 font-bold px-6 pb-3'>{error}</small>
                    <small className='text-green-600 font-bold px-6 pb-3'>{success}</small>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;