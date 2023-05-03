import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth"
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const googleSignIn = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }
    const gitHubLogIn = () =>{
        const gitHubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, gitHubProvider);
    }
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
    }, [])

    const logOut = () =>{
        return signOut(auth)
    }
    const authInfo = {
        user,
        googleSignIn,
        gitHubLogIn,
        createUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;