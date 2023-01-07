import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'

export default function useAddData(c) {
    const addData = (title,uid) => {
        addDoc(collection(db, c), {
            title: title,
            uid: uid
        })
    }
    return { addData }
}
