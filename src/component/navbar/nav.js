// import { useState } from "react";
import "./style.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


// item.onclick = () => {
//     listItems.forEach((item) => 
//         item.classList.remove("active"));
//         item.classList.add("active");
// };
export function Navigation(){
    const listItems = document.getElementsByClassName('list-item');
    for(let item of listItems){
        item.addEventListener("click", function(){
            console.log('clicccc')
            let current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace('active','');
            this.className += ' active';
        })
    }
    
    return (
        <nav>
            <div className="navigation">
                <ul>
                    <li className="list-item active">
                        <Link id="home_link" to="/password-organizer">
                            <span className="icon">
                                <FontAwesomeIcon icon="fa-solid fa-house" />
                            </span>
                            <span className="text">Home</span>
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link id="add_link" to="/password-organizer/add">
                            <span className="icon">
                                <FontAwesomeIcon icon="fa-solid fa-plus"/>
                            </span>
                            <span className="text">Add</span>
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link id="psw_link" to="/password-organizer/password">
                            <span className="icon">
                                <FontAwesomeIcon icon="fa-solid fa-lock"/>
                            </span>
                            <span className="text">Password</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


//<li className={isActive ? "list-item active" : "list-item"} onClick={handleClick}>