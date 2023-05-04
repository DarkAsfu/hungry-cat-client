import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
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
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
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

    const updateInfo = (name, photo) =>{
        console.log(name, photo)
        updateProfile(auth.currentUser, {
            displayName: `${name}`, photoURL:`${photo}`
        }).then(() => {
            console.log('meo')
        }).catch((error) => {
            console.error(error);
        });
    }

    const logOut = () =>{
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        googleSignIn,
        gitHubLogIn,
        createUser,
        signIn,
        updateInfo, 
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;