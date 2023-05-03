import React, { useContext } from 'react';
import img from '../../../../public/google .png';
import gitImg from '../../../../public/github.png';
import { AuthContext } from '../../providers/AuthProvider';
const SocialLogin = () => {
    const {googleSignIn, gitHubLogIn} = useContext(AuthContext);
    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const handleGitHubLogin = () =>{
        gitHubLogIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(e =>{
            console.log(e.message);
        })
    }
    return (
        <div>
            <p className='text-center'>------ or use one of these option ------</p>
            <div className='flex gap-4 justify-center'>
            <img onClick={handleGoogleLogin} className='w-16  mt-2 border p-2' src={img} alt="" />
            <img onClick={handleGitHubLogin} className='w-16  mt-2 border p-2' src={gitImg} alt="" />
            </div>
        </div>
    );
};

export default SocialLogin;