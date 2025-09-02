import React from "react";
import ReactDOM from "react-dom/client";
import App from "../components/App.jsx"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    if (root) {
        ReactDOM.createRoot(root).render(<App />)
    }
});
