import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/application.css"
import App from "../components/App.jsx"
import NavBar from "../components/NavBar.jsx";
import HooperCard from "../components/HooperCard.jsx";
import HooperList from "../components/HooperList.jsx";

document.addEventListener("DOMContentLoaded", () => {

    const NavBarEl = document.getElementById("navbar");
    if (NavBarEl) {
        ReactDOM.createRoot(NavBarEl).render(<NavBar />)
    }

    const root = document.getElementById("root");
    if (root) {
        const hoopersCollection = root.dataset.hooperscollection
        const convertedHoopersCollection = JSON.parse(hoopersCollection)
        ReactDOM.createRoot(root).render(<HooperList hoopers={convertedHoopersCollection}/>)
    }

    const HooperCardEl = document.getElementById("detailed-hooper-stats")
    if (HooperCardEl) {
        const hooperStats = HooperCardEl.dataset.stats
        const convertedStats = JSON.parse(hooperStats)
        ReactDOM.createRoot(HooperCardEl).render(<HooperCard player={convertedStats} />)
    }
});
