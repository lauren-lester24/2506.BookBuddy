import { Routes , Route } from "react-router";


import Layout from "./layout/Layout";
import Register from "./auth/Register.jsx"
import Login from "./auth/Login"
import BookDetails from "./Books/BookDetails"
import BookList from "./Books/BookList"
import Error404 from "./auth/Error404.jsx";

export default function App() {


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/books" element={<BookList />} />

        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
