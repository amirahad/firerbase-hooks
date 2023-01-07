// import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
// import { db } from '../firebase/config'
import useAddData from '../hooks/useAddData'
import { useAuthContext } from '../hooks/useAuthContext';

export default function BookForm() {
  const [newBook, setNewBook] = useState('')
  const { addData } = useAddData('books')
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault()
    addData(newBook, user.uid);
    setNewBook('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  )
}
