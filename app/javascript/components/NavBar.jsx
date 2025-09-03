import React from "react";
import BasketballLogo from "../assets/transparent_basketball.png"

const NavBar = () => {
    return (
        <header>
            <nav>
                <img src={BasketballLogo} alt="" />
                <h1>Hoopers House</h1>
                <img src={BasketballLogo} alt="" />
            </nav>
        </header>
    )

};

export default NavBar;