import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import 'swiper/css';
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/averia-serif-libre"; // important!

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
