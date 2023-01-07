import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { auth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const signup = (email, password) => {
        setError(null)
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                dispatch({ type: 'LOGIN', payload: res.user })
                history.replace(from)
            }).catch((err) => {
                setError(err.message)
            })
    }
    return { error, signup }
}


