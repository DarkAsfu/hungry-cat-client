import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <>
            <div className="flex justify-center items-center">
                <div className="w-12 h-12 border-4 border-gray-200 rounded-full animate-spin"></div>
            </div></>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRouter;