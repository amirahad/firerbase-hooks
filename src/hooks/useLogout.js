import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config'

export const useLogout = () => {
    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log('logged out');
            })
            .catch(() => {
                console.log('error');
            })
    }
    return { logout }
}

