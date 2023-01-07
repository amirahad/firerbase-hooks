import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { auth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

const useLogin = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const login = (email, password) => {
        setError(null)
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                dispatch({ type: 'LOGIN', payload: res.user })
                history.replace(from)
            }).catch((err) => {
                setError(err.message)
            })
    }
    return { error, login }
}

export default useLogin
