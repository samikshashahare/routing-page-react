import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
    const path = window.location.classname;
    return (
        <div className="nav">
            <span className="webpage">My Website</span>
            <Link to="/" className={path === '/' ? 'highlight' : ''}> Home</Link>
            <Link to="/About" className={path === '/About' ? 'highlight' : ''}> About</Link>
            <Link to="/Contact" className={path === '/Contact' ? 'highlight' : ''}> Contact</Link>
        </div>
    )
}