import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navigation = () => {
    return ( 
        <nav className="navbar">
            <NavLink className="name" to="/">Yodit A.</NavLink>
            <FontAwesomeIcon className="hum-icon" icon={faBars}/>
            <div className="nav-links">
                <NavLink className="navlink" to="/portfolio">Portfolio</NavLink>
                <NavLink className="navlink" to="/about">About</NavLink>
                <NavLink className="navlink" to="/contact">Contact</NavLink>
            </div>
        </nav>
     );
}
 
export default Navigation;