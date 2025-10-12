
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router";
import { AuthProvider } from "./auth/AuthContext.jsx";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
  <AuthProvider>
<BrowserRouter>
<App />
</BrowserRouter>

  </AuthProvider>
);
