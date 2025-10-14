import { createContext, useContext, useState,  } from "react";


const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";


const AuthContext = createContext();

export function AuthProvider({children}) {

    const [loggedIn, setLogIn] = useState();






const logout = () => setLogIn(null);

const value = {loggedIn, register, logout};

return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within AuthProvider");
  return context;
}