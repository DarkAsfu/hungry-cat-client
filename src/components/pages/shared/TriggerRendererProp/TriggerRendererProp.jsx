import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import userProfile from '../../../../../public/user.png'
const TriggerRendererProp = () => {
    const {user} = useContext(AuthContext);
    const img = user.photoURL;
    console.log(img)
    return (
        <div>
            <div className="group relative  flex justify-center">
                {
                    img ? <img className='w-12 rounded-full me-4' src={img}></img> : <img className='w-12 me-4' src={userProfile}></img>
                }
                <span className="w-32 text-center absolute top-14 scale-0 p-2 transition-all rounded bg-blue-500 text-xs text-white group-hover:scale-100">
                    {
                        user.displayName ? user.displayName : user.email
                    }
                </span>
            </div>

        </div>
    );
};

export default TriggerRendererProp;