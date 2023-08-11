import { desktopProjects, mobileProjects } from './projects';
import { Link } from 'react-router-dom';
const Portfolio = () => {
    return ( 
        <div className="portfolio-cont">
            <h1 className="portfolio-title">Recent Projects</h1>
            <div className="portfolio mobile">
                {mobileProjects.map((project) => (
                    <section className="project-intro" key={project.id}>
                        <figure className="project-picture-container">
                            <img className="project-picture" src={project.featuredImage} alt="Todo list"/>
                            <div className="project-overlay">
                                <div className="project-info">
                                    <h1 className="project-title">{project.name}</h1>
                                    <p className="project-description">{project.description.substring(0, 100) + " . . ."}</p>
                                    <ul className="project-stacks">
                                        {project.technologies.map((tech) => (
                                            <li className="project-tech" key={tech}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="proj-link-cont">
                                    <Link className="project-link" to={`/details/${project.id}`}>See Project</Link>
                                </div>
                            </div>
                        </figure>
                    </section>
                ))}
            </div>
            <div className="portfolio desktop">
                {desktopProjects.map((project) => (
                    <section className="project-intro" key={project.id}>
                        <figure className="project-picture-container">
                            <img className="project-picture" src={project.featuredImage} alt="Todo list"/>
                            <div className="project-overlay">
                                <div className="project-info">
                                    <h1 className="project-title">{project.name}</h1>
                                    <p className="project-description">{project.description.substring(0, 100) + " . . ."}</p>
                                    <ul className="project-stacks">
                                        {project.technologies.map((tech) => (
                                            <li className="project-tech" key={tech}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="proj-link-cont">
                                    <Link className="project-link" to={`/details/${project.id}`}>See Project</Link>
                                </div>
                            </div>
                        </figure>
                    </section>
                ))}
            </div>
        </div>
     );
}
 
export default Portfolio;