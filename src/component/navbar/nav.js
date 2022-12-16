import "./style.css"
import { Link } from "react-router-dom"
<script src="https://kit.fontawesome.com/604ba66f13.js"></script> 

export function Navigation(){
    return (
        <nav>
            <div className="navigation">
                <ul>
                    <li className="list-item active">
                        <Link id="home_link" to="/home">
                            <span className="icon">
                                <i className="fa-solid fa-house"></i>
                            </span>
                            <span className="text">Home</span>
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link id="add_link" to="/add">
                            <span className="icon">
                                <i className="fa-solid fa-plus"></i>
                            </span>
                            <span className="text">Add</span>
                        </Link>
                    </li>
                    <li className="list-item">
                        <Link id="psw_link" to="/password">
                            <span className="icon">
                                <i className="fa-solid fa-lock"></i>
                            </span>
                            <span className="text">Password</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}