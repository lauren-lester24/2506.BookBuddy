import { useState, useEffect } from "react";
import
import { getBooks } from "..api/client"


export default function BookList({setBookId}) {
const [ books, setBooks] = useState([]);

useEffect(() => {
    const syncBooks = async () => {
        const data = await getBooks();
        setBooks(data);
    }
    syncBooks();
}, []);

return (
    <>
    <h1>Catalog</h1>
    <ol>
{books.map((book) => (
    <li
    key={books.id}
    ></li>
))}

    </ol>
    
    </>
)

    
}
