import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){
    return (

        <div className="navbar">
            <div>
                <NavLink className="navButton" exact to="/">Home</NavLink>
            </div>
            <div>
                <NavLink className="navButton" exact to="/cats">Cats</NavLink>
            </div>
            <div>
                <NavLink className="navButton" exact to="/dogs">Dogs</NavLink>
            </div>
        </div>
    )

    
}

export default NavBar