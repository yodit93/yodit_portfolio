import { useRef } from "react";
import { desktopProjects, mobileProjects } from "./projects";
import { Link, useNavigate, useParams } from "react-router-dom";
const DetailsPage = () => {
    const {id} = useParams();
    const closeBtn = useRef(null);
    const detailsPage = useRef(null);
    const navigation = useNavigate();
    const handleNavigate = () => {
        navigation('/portfolio');
    };
    return ( 
        <>
            <div className="details-page" ref={detailsPage}>
                <div className="details-close-btn" ref={closeBtn} onClick={handleNavigate}>&#10005;</div>
                <div className="mobile-details">
                    {mobileProjects.filter((project) => project.id === id).map((project) => (
                        <section className="project-details-cont" key={project.id}>
                            <h1>{project.name}</h1>
                            <figure className="project-image-container">
                                <img className="project-image" src={project.featuredImage} alt={project.name}/>
                            </figure>
                            <div className="proj-details">     
                                <p className="proj-description">{project.description}</p>
                                <ul className="proj-stacks">
                                    {project.technologies.map((tech) => (
                                        <li className="proj-tech" key={tech}>{tech}</li>
                                    ))}
                                </ul>
                                <div className="see-demo-cont">
                                    <Link to={project.demo}>See Demo</Link>
                                    <Link to={project.source}>See Source</Link>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
                <div className="desktop-details">
                    {desktopProjects.filter((project) => project.id === id).map((project) => (
                        <section className="project-details-cont" key={project.id}>
                            <div className="project-details-page">
                                <figure className="project-image-container">
                                    <img className="project-image" src={project.featuredImage} alt={project.name}/>
                                </figure>
                                <div className="proj-details">
                                    <h1>{project.name}</h1>    
                                    <p className="proj-description">{project.description}</p>
                                    <ul className="proj-stacks">
                                        {project.technologies.map((tech) => (
                                            <li className="proj-tech" key={tech}>{tech}</li>
                                        ))}
                                    </ul>
                                    <div className="see-demo-cont">
                                        <Link className="see-demo" to={project.demo}>See Demo</Link>
                                        <Link className="see-demo" to={project.source}>See Source</Link>
                                    </div>
                                </div>
                            </div>
                            
                        </section>
                    ))}
                </div>
            </div>
        </>
        
    );
}
 
export default DetailsPage;