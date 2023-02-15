
const Projects = () => {

    interface Project {
        title: string,
        description: string,
        img: string,
        features: Array<string>
        technologies: Array<string>
    }

    const projects: Array<Project> = [
        {
            title: "Palcom",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad placeat aliquam ullam nisi explicabo corrupti fuga quas deserunt eius. Maiores asperiores error quia est consequatur, ratione illum quos suscipit?",
            img: "img",
            features: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad placeat aliquam ullam nisi explicabo corrupti.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad placeat aliquam ullam nisi explicabo corrupti.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad placeat aliquam ullam nisi explicabo corrupti.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad placeat aliquam ullam nisi explicabo corrupti.",
            ],
            technologies: ["React", "NodeJS", "MongoDB", "ExpressJS", "Mongoose", "Typescript", "Redux Toolkit", "Websocket", "JSON Web Tokens"]
        }
    ]


    return (
        <div>
            {
                projects.map( (project, idx) => {
                    return (
                        <div key={idx}>
                            <h2 className="text-[32px]">{project.title}</h2>
                            <div className="flex">
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
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Projects