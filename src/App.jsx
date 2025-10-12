import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage.jsx";
import {Routes, Route} from 


import Layout from "./layout/Layout";
import Navbar from "./layout/Navbar";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<div style={{ padding: 24 }}><h1>Not Found</h1></div>} />
    </Routes>
  );
}