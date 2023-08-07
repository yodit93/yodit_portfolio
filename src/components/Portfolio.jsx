// import todoList from '../assets/image/todo-list.png';
import { proObjects } from './projects';
console.log(proObjects);
const Portfolio = () => {
    return ( 
        <div className="portfolio-cont">
            <h1 className="portfolio-title">Recent Projects</h1>
            <div className="portfolio">
                {proObjects.map((project) => (
                    <section className="project-intro" key={project.id}>
                        <figure className="project-picture-container">
                            <img className="project-picture" src={project.featuredImage} alt="Todo list"/>
                            <div className="project-overlay">
                                <div className="project-info">
                                    <h1 className="project-title">{project.name}</h1>
                                    <p className="project-description">{project.shortDescr}</p>
                                    <ul className="project-stacks">
                                        {project.technologies.map((tech) => (
                                            <li className="project-tech" key={tech}>{tech}</li>
                                        ))}
                                        {/* <li className="project-tech">CSS</li>
                                        <li className="project-tech">JavaScript</li> */}
                                    </ul>
                                </div>
                                <div className="proj-link-cont">
                                    <a href="" className="project-link">See Project</a>
                                </div>
                            </div>
                        </figure>
                    </section>
                ))}
                
                {/* <section className="project-intro">
                    <figure className="project-picture-container">
                        <img className="project-picture" src={todoList} alt="Todo list"/>
                        <div className="project-overlay">
                            <div className="project-info">
                                <h1 className="project-title">Todo List</h1>
                                <p className="project-description">Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Numquam eligendi recusandae nostrum dolores delectus aliquid </p>
                                <ul className="project-stacks">
                                    <li className="project-tech">HTML</li>
                                    <li className="project-tech">CSS</li>
                                    <li className="project-tech">JavaScript</li>
                                </ul>
                            </div>
                            <div className="proj-link-cont">
                                <a href="" className="project-link">See Project</a>
                            </div>
                        </div>
                    </figure>
                   
                </section>
                <section className="project-intro">
                    <figure className="project-picture-container">
                        <img className="project-picture" src={todoList} alt="Todo list"/>
                        <div className="project-overlay">
                            <div className="project-info">
                                <h1 className="project-title">Todo List</h1>
                                <p className="project-description">Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Numquam eligendi recusandae nostrum dolores delectus aliquid </p>
                                <ul className="project-stacks">
                                    <li className="project-tech">HTML</li>
                                    <li className="project-tech">CSS</li>
                                    <li className="project-tech">JavaScript</li>
                                </ul>
                            </div>
                            <div className="proj-link-cont">
                                <a href="" className="project-link">See Project</a>
                            </div>
                        </div>
                    </figure>
                   
                </section>
                <section className="project-intro">
                    <figure className="project-picture-container">
                        <img className="project-picture" src={todoList} alt="Todo list"/>
                        <div className="project-overlay">
                            <div className="project-info">
                                <h1 className="project-title">Todo List</h1>
                                <p className="project-description">Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Numquam eligendi recusandae nostrum dolores delectus aliquid </p>
                                <ul className="project-stacks">
                                    <li className="project-tech">HTML</li>
                                    <li className="project-tech">CSS</li>
                                    <li className="project-tech">JavaScript</li>
                                </ul>
                            </div>
                            <div className="proj-link-cont">
                                <a href="" className="project-link">See Project</a>
                            </div>
                        </div>
                    </figure>
                   
                </section> */}
            </div>
        </div>
     );
}
 
export default Portfolio;