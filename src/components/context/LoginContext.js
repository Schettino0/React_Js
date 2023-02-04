import { useContext } from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut , signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/config";


export const LoginContext = createContext()

export const useLoginContext = () => {
    return useContext(LoginContext)
}

export const LoginProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        name: null,
        email: null,
        logged: false,
        error: null
    })

    const googleLogin = () => {
        signInWithPopup(auth,provider)
        

    }

    const login = (values) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, values.email, values.password)
            // .then((userCredential) => {
            //     console.log(userCredential)
            //     setUser({
            //         email: userCredential.user.email,
            //         logged: true,
            //         error: null
            //     })
            // })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({
                    email: null,
                    logged: false,
                    error: null
                })
            })
        setUser({
            name: null,
            email: null,
            logged: false,
            error: null
        })
        setLoading(false)
    }
    const register = (values) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, values.email, values.password)
            // .then((userCredential) => {
            //     console.log(userCredential)
            //     setUser({
            //         email: userCredential.user.email,
            //         logged: true,
            //         error: null
            //     })
            // })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    logged: true,
                    error: null
                })
            }
            else {
                logout()
            }
        })
    }, []);


    return (
        <LoginContext.Provider value={{googleLogin,  logout, user, useLoginContext, loading, register, login }}>
            {children}
        </LoginContext.Provider>
    )
}
