import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import {Routes, Route} from 


import Layout from "./layout/Layout";
import Navbar from "./layout/Navbar";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/register" replace />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="*" element={<div style={{ padding: 24 }}><h1>Not Found</h1></div>} />
      </Route>
    </Routes>
  );
}