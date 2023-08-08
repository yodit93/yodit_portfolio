import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
const Navigation = () => {
    const navList = useRef(null);
    const closeBtn = useRef(null);
    const handleShow = () => {
        navList.current.classList.add('show');    
    };
    const handleHide = () => {
        navList.current.classList.remove('show');
    };
    return (
        <nav className="navbar">
           <NavLink className="name" to="/">Yodit A.</NavLink>
            <FontAwesomeIcon className="hum-icon" icon={faBars} onClick={handleShow}/>
            <div className="click-event" ref={navList}>
                <div className="close-btn" ref={closeBtn} onClick={handleHide}>&#10005;</div>
                <div className="nav-links">
                    <NavLink className="navlink link-home" to="/">Home</NavLink>
                    <NavLink className="navlink" to="/portfolio">Portfolio</NavLink>
                    <NavLink className="navlink" to="/about">About</NavLink>
                    <NavLink className="navlink" to="/contact">Contact</NavLink>
                </div>
            </div>
        </nav>
     );
}
 
export default Navigation;