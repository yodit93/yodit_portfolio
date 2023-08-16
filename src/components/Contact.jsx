import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faAngellist } from '@fortawesome/free-brands-svg-icons';
import {icons} from './IconsUtils.jsx';
const Contact = () => {
    return ( 
        <section className="contact-sec" id="contact">
            <h1 className="contact-me-heading">Contact me</h1>
            <div className="div-form">
                <div>
                    <p className="colab-interest">If you have an application you are interested in developing, 
                    a feature that you need built or a project that needs coding.
                    I’d love to help with it 🙌. </p>
                </div>
                <form className="contact-form" action="https://formspree.io/f/xeqdyldr" method="POST">
                    <fieldset className="form-fieldset">
                        <input id="name" type="text" name="name" placeholder="Name" maxLength="30" required/>
                        <input id="email" type="email" name="email" required placeholder="Email"/>
                        <textarea id="textarea" name="comment" cols="30" rows="10" required maxLength="500" placeholder="Write your message here"></textarea>
                    </fieldset>
                    <button id="submit-button" type="submit" name="submit">Get It Touch</button>
                </form>
            </div>
            <div className="contact-info">
                <ul className="social-media-links contact-link">
                    <li><a href="https://twitter.com/yodtwit"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/in/yodit-abebe-ayalew/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                    <li><a href="https://medium.com/@yoditabebe9391"><icons.medium /></a></li>
                    <li><a href="https://github.com/yodit93"><icons.github /></a></li>
                    <li><a href="https://wellfound.com/u/yodit-abebe-ayalew"><FontAwesomeIcon icon={faAngellist} /></a></li>
                </ul>
            </div>
      </section>
    );
}
 
export default Contact;