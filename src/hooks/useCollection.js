
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { db } from '../firebase/config';


export const useCollection = (c, _q) => {
    const [document, setDocument] = useState(null);

    const q = useRef(_q).current;

    useEffect(() => {
        //get collection from firebase 9
        // onSnapshot(collection(db, c), (snapshot) => {
        //     const documents = snapshot.docs.map((doc) => {
        //         return { id: doc.id, ...doc.data() }
        //     })
        //     setDocument(documents)
        // })

        let ref = collection(db, c)

        if (q) {
            ref = query(ref, where(...q))
        }

        const unSub = onSnapshot(ref, (snapshot) => {
            const documents = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            setDocument(documents)
        })

        return () => unSub();

    }, [c, q])

    return { document }
}
