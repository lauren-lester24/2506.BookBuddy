import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

import { useAuth } from "../auth/AuthContext";


export default function BookDetails(){
const { token } = useAuth();
const { id } = useParams();
const navigate = useNavigate();
const [error, setError] = useState(null);


 useEffect(() => {
   const syncBook = async () => {
     const data = await getBook(id);
     setBook(data);
   };
   syncBook();
 }, [id]);

 const tryDelete = async () => {
   setError(null);

   try {
     await deleteBook(token, book.id);
     navigate("/books");
   } catch (e) {
     setError(e.message);
   }
 };

 if (!book) return <p>Loading...</p>;

 return (
  
     <article>
       <h1>{book.name}</h1>
       <p>{book.title}</p>
       <p>{book.author}</p>
       <img src={book.coverimage} alt={book.title} />

       <p
         style={{ marginTop: "4px", color: book.available ? "green" : "gray" }}
       >
         {book.available ? "Available" : "Checked Out"}
       </p>
     </article>
 
 );
    
}