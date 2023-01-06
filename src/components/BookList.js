import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebase/config"


export default function BookList({ books }) {

  const handleClick = async (id) => {
    //delete book from firebase
    await deleteDoc(doc(db, 'books', id));
  }

  return (
    <div className="book-list">
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => handleClick(book.id)}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}