import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faAngellist } from '@fortawesome/free-brands-svg-icons';
import {FaMediumM} from 'react-icons/fa';
import {TbBrandGithubFilled} from 'react-icons/tb';

const Home = () => {
    return ( 
        <div className="home-container">
            <div className="wrapp-align">
                <h1 className="name">Hey there !<span>I&apos;am Yodit Abebe</span></h1>
                <h4 className="profession">Full Stack Developer</h4>
                <p className="abt">I enjoy bridging the gap between engineering and design
                combining my technical knowledge with my keen eye for design to create a beautiful product. 
                My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect 
                user experiences. Look through some of my work and experience! If you like what you see and have a project you need coded, 
                    don’t hestiate to contact me.
                </p>
                <p className="supporting-text">LET&apos;S CONNECT</p>
                <ul className="social-media-links">
                    <li><a href="https://twitter.com/yodtwit"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/in/yodit-abebe-ayalew/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                    <li><a href="https://medium.com/@yoditabebe9391"><FaMediumM className="medium"/></a></li>
                    <li><a href="https://github.com/yodit93"><TbBrandGithubFilled /></a></li>
                    <li><a href="https://wellfound.com/u/yodit-abebe-ayalew"><FontAwesomeIcon icon={faAngellist} /></a></li>
                </ul>
            </div>
            <figure className="welcome-cont">
                <img className="home-img" src="https://cdn.britannica.com/30/199930-131-B3D1D347/computer.jpg" alt="home-img"/>
            </figure>
        </div>
     );
}
 
export default Home;