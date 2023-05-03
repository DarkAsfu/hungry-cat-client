import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const TriggerRendererProp = () => {
    const {user} = useContext(AuthContext);
    const img = user.photoURL;
    console.log(img)
    return (
        <div>
            <div class="group relative  flex justify-center">
                {
                    img ? <img className='w-12 rounded-full me-4' src={img}></img> : <p>no img</p>
                }
                <span class="w-32 text-center absolute top-14 scale-0 p-2 transition-all rounded bg-blue-500 text-xs text-white group-hover:scale-100">
                    {
                        user.displayName ? user.displayName : user.email
                    }
                </span>
            </div>

        </div>
    );
};

export default TriggerRendererProp;