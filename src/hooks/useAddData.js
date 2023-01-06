import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'

export default function useAddData(c) {
    const addData = (title) => {
        addDoc(collection(db, c), {
            title: title,
        })
    }
    return { addData }
}
