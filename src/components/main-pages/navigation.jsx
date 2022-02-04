import React from "react";
import { NavLink } from "react-router-dom";
import Userfront from "@userfront/react";


Userfront.init("vndxxrvn");
const LogoutButton = Userfront.build({
    toolId: "adabdo"
});

function Navigation() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/home">
                    Recipeasy | Recipes Made Easy
                    </NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">
                            Home
                            <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                            About
                            </NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add-recipe">
                            Add Recipe
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">
                            Profile
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <LogoutButton className="nav-link" to="/login">
                            Logout
                            </LogoutButton>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                </div>
            );
}

export default Navigation;