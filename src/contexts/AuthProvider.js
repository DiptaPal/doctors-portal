import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password)  =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userProfileUpdate = profile =>{
        return updateProfile(auth.currentUser, profile);
    }

    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const singInWithGoogle = () =>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () =>{
        setLoader(true)
        return signOut(auth)
    }

    const passwordReset = (email) =>{
        setLoader(true)
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
        });
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,loader, setLoader, createUser, userProfileUpdate, signIn, singInWithGoogle, passwordReset, logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;