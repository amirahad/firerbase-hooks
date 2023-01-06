
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';


export const useCollection = (c) => {
    const [document, setDocument] = useState(null);

    const unSub = useEffect(() => {
        //get collection from firebase 9
        onSnapshot(collection(db, c), (snapshot) => {
            const documents = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            setDocument(documents)
        })

        return () => unSub()

    }, [c])

    return { document }
}
