// import { useState } from "react";
import "./style.css"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function Navigation(){
    return (
        <nav>
            <div className="navigation">
                <ul>
                    <li className="list-item">
                        <NavLink to="/password-organizer/home" className={({isActive}) => (isActive ? "active" : '')}>
                            <span className="icon">
                                <FontAwesomeIcon icon="fa-solid fa-house"/>
                            </span>
                            <span className="text">House</span>
                        </NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink to="/password-organizer/add" className={({isActive}) => (isActive ? "active" : '')}>
                            <span className="icon">
                                <FontAwesomeIcon icon="fa-solid fa-plus"/>
                            </span>
                            <span className="text">Add</span>
                        </NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink to="/password-organizer/password" className={({isActive}) => (isActive ? "active" : '')}>
                            <span className="icon">
                                <FontAwesomeIcon icon="fa-solid fa-lock"/>
                            </span>
                            <span className="text">Password</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


//<li className={isActive ? "list-item active" : "list-item"} onClick={handleClick}>