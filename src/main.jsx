import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      clientId="tnmYOEVdsoo0eprO2wrIjAsVgpyflFGX"
      domain="dev-nbp1bzujfqc0mbt0.us.auth0.com"
      authorizationParams={{ redirect_uri: "http://localhost:5173/dashboard" }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
