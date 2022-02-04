import React from "react";
import { NavLink } from "react-router-dom";


function LoginNavigation() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                    Recipeasy | Recipes Made Easy
                    </NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                            Login
                            <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                            About
                            </NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">
                            Sign Up
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/reset">
                            Reset Password
                            </NavLink>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                </div>
            );
}

export default LoginNavigation;