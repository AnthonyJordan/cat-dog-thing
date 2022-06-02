import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){
    return (

        <div>
            <div>
                <NavLink exact to="/">Home</NavLink>
            </div>
            <div>
                <NavLink exact to="/cats">Cats</NavLink>
            </div>
            <div>
                <NavLink exact to="/dogs">Dogs</NavLink>
            </div>
        </div>
    )

    
}

export default NavBar