

import { projects } from "../data/projects_data"

const Projects = () => {



    return (
        <div className="pb-20">
            <h1 className="text-[48px] border-b-2">Projects</h1>
            {
                projects.map( (project, idx) => {
                    return (
                        <div className="mt-10" key={idx}>
                            <h2 className="text-[32px] ">{project.title}</h2>
                            {
                                idx % 2 === 0 ?
                                <div className="flex">
                                    <div className="w-[50%]">
                                        <div className="bg-[green] h-[300px] mt-2"></div>
                                        <button className="w-[100%] mt-3 bg-[red] rounded-md">Code</button>
                                        <h3 className="text-[20px]">Technologies</h3>
                                        <ul className="flex">
                                            {
                                                project.technologies.map( (tech, idx) => {
                                                    return (
                                                        <li className="" key={idx}>{tech}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="w-[50%] pl-10"> 
                                        <h3 className="text-[20px]">Description</h3>
                                        <p>{project.description}</p>
                                        <h3 className="text-[20px]">Features</h3>
                                        <ul>
                                            {
                                                project.features.map( (feature, idx) => {
                                                    return (
                                                        <li key={idx}>{feature}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div> :

                                <div className="flex">
                                    <div className="w-[50%] pr-10"> 
                                        <h3 className="text-[20px]">Description</h3>
                                        <p>{project.description}</p>
                                        <h3 className="text-[20px]">Features</h3>
                                        <ul>
                                            {
                                                project.features.map( (feature, idx) => {
                                                    return (
                                                        <li key={idx}>{feature}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="w-[50%]">
                                        <div className="bg-[green] h-[300px] mt-2"></div>
                                        <button>Site</button>
                                        <button>Code</button>
                                        <h3 className="text-[20px]">Technologies</h3>
                                        <ul className="flex">
                                            {
                                                project.technologies.map( (tech, idx) => {
                                                    return (
                                                        <li key={idx}>{tech}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            }
                            
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Projects