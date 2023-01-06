import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../firebase/config"

const useLogin = () => {
    const [error, setError] = useState(null)

    const login = (email, password) => {
        setError(null)
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
            }).catch((err) => {
                setError(err.message)
            })
    }
    return { error, login }
}

export default useLogin
