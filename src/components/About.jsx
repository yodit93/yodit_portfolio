import {icons} from './IconsUtils.jsx';
import { useRef } from 'react';

const About = () => {
    const langCont = useRef(null);
    const skillCont = useRef(null);
    const frameworkCont = useRef(null);
    const langBtn = useRef(null);
    const skillBtn = useRef(null);
    const frameBtn = useRef(null);
    const handleToggle = (containerRef, btnRef) => {
        if (containerRef === langCont) {
            if (btnRef.current.classList.contains('rotate-lang')) {
                btnRef.current.classList.remove('rotate-lang');
            } else {
                btnRef.current.classList.add('rotate-lang');
            }
        }
        console.log(btnRef.current);
        containerRef.current.classList.toggle('hide-list'); 
        if (btnRef.current.classList.contains('rotate')) {
            btnRef.current.classList.remove('rotate');
        } else {
            btnRef.current.classList.add('rotate');
        }
      };
    return ( 
       <section className="about-me">
            <section className="self-intro">
                <h1 className="title set-margin">About Myself</h1>
                <p className="about-desc set-margin">Hello,👏 I&apos;m a software developer! My journey in the world of development began when 
                I tinkered with my first lines of code and realized the power of turning ideas into reality. Since then, 
                I&apos;ve been on an exciting quest to continually expand my skill set and stay up-to-date with the ever-evolving tech landscape. 
                From HTML and CSS to JavaScript frameworks like React and back-end technologies like Ruby on Rails and databases like PostgreSQL, 
                I&apos;ve honed my abilities across the stack. I&apos;m excited to connect and open to new opportunities.</p>
                <div className="resume">
                    <a className="resume-link" href="https://docs.google.com/document/d/1LLqlL8mii3nI_EhfNbDC0e0VyQQmybnDOHWdB3aPBxM/edit?usp=sharing" target="_blank" rel="noreferrer"><span>Get my resume</span></a>
                </div>
            </section>
            <ul className="additional-info">
                <li>
                    <div className="div-flex">
                        <h2>Web Development & Languages</h2>
                        <button ref={langBtn} onClick={() => handleToggle(langCont, langBtn)}><icons.down className="react-icons lang-btn"/></button>
                    </div>
                    <ul className="lang-container-lists lang-dev" ref={langCont}>
                        <li className="flex">
                            <icons.html className="react-icons"/>
                            <p>HTML5</p>
                        </li>
                        <li className="flex">
                            <icons.css className="react-icons"/>
                            <p>CSS3</p>
                        </li>
                        <li className="flex">
                            <icons.js className="react-icons"/>
                            <p>JavaSript</p>
                        </li>
                        <li className="flex">
                            <icons.ruby className="react-icons"/>
                            <p>Ruby</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <div className="div-flex">
                        <h2 className="frame">Frameworks</h2>
                        <button ref={frameBtn} onClick={() => handleToggle(frameworkCont, frameBtn)}><icons.right className="react-icons"/></button>
                    </div>
                    <ul className="lang-container-lists frameworks hide-list" ref={frameworkCont}>
                         <li className="flex">
                            <icons.react className="react-icons"/>
                            <p>React</p>
                        </li>
                        <li className="flex">
                            <icons.redux className="react-icons"/>  
                            <p>Redux</p>
                        </li>
                        <li className="flex">
                            <icons.bootstrap className="react-icons"/>
                            <p>Bootstrap</p>
                        </li>
                        <li className="flex">
                            <icons.ruby className="react-icons"/>
                            <p>Ruby on Rails</p>
                        </li>
                    </ul>  
                </li>
                <li>
                    <div className="div-flex">
                        <h2 className="skills">Skills</h2>
                        <button ref={skillBtn} onClick={() => handleToggle(skillCont, skillBtn)}><icons.right className="react-icons"/></button>
                    </div>
                    <ul className="lang-container-lists skills hide-list" ref={skillCont}>
                        <li className="flex">
                            
                            <p>Git/GitHub</p>
                        </li>
                        <li className="flex">
                            
                            <p>Remote/Pair-programming</p>
                        </li>
                        <li className="flex">
                            
                            <p>Mentoring/Code-review</p>
                        </li>
                        <li className="flex">
                            
                            <p>Communication/Teamwork</p>
                        </li>
                        <li className="flex">
                            <p>RSpec/Capybara/Jest</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
     );
}
 
export default About;