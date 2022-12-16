// import { useState } from "react";
import "./style.css"
import { NavLink, Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


// item.onclick = () => {
//     listItems.forEach((item) => 
//         item.classList.remove("active"));
//         item.classList.add("active");
// };
export function Navigation(){
    // const listItems = document.getElementsByClassName('list-item');
    // for(let item of listItems){
    //     item.addEventListener("click", function(){
    //         console.log('clicccc')
    //         let current = document.getElementsByClassName('active');
    //         current[0].className = current[0].className.replace('active','');
    //         this.className += ' active';
    //     })
    // }
    
    return (
        <nav>
            <div className="navigation">
                <ul>
                <li className="list-item">
                        <NavLink activeClassName="active" to="/password-organizer/home">
                            <span className="icon">
                                <FontAwesomeIcon icon="fa-solid fa-house"/>
                            </span>
                            <span className="text">House</span>
                        </NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink activeClassName="active" to="/password-organizer/add">
                            <span className="icon">
                                <FontAwesomeIcon icon="fa-solid fa-plus"/>
                            </span>
                            <span className="text">Add</span>
                        </NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink activeClassName="active" to="/password-organizer/password">
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