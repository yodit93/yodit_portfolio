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
        <nav className="nav-bar">
           <NavLink className="my-name" to="/">Yodit A.</NavLink>
            <FontAwesomeIcon className="hum-icon" icon={faBars} onClick={handleShow}/>
            <div className="click-event" ref={navList}>
                <div className="close-btn" ref={closeBtn} onClick={handleHide}>&#10005;</div>
                <div className="nav-links" onClick={handleHide}>
                    <NavLink className="link-home" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </div>
            </div>
        </nav>
     );
}
 
export default Navigation;