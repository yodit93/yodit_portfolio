import { useRef } from "react";
import { desktopProjects, mobileProjects } from "./projects";
import { useNavigate, useParams } from "react-router-dom";
const DetailsPage = () => {
    const {id} = useParams();
    const closeBtn = useRef(null);
    const detailsPage = useRef(null);
    const navigation = useNavigate();
    const handleNavigate = () => {
        navigation('/yodit_portfolio/portfolio');
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
                                    <a className="see-demo" href={project.demo} target="_blank" rel="noreferrer">See Demo</a>
                                    <a className="see-demo" href={project.source} target="_blank" rel="noreferrer">See Source</a>
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
                                        <a className="see-demo" href={project.demo} target="_blank" rel="noreferrer">See Demo</a>
                                        <a className="see-demo" href={project.source} target="_blank" rel="noreferrer">See Source</a>
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