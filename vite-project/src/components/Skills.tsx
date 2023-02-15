



const Skills = () => {

    interface Skill {
        title: string,
        body: string,
        img: string
    }

    const info: Array<Skill> = [
        {
            title: "Full Stack Software Developer",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas necessitatibus, obcaecati officia qui minima. Voluptate ullam at quisquam. Repellat dicta ipsum inventore perspiciatis ratione dolore recusandae architecto tempore praesentium.",
            img: "img"
        },
        {
            title: "AWS Cloud Practitioner",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas necessitatibus, obcaecati officia qui minima. Voluptate ullam at quisquam. Repellat dicta ipsum inventore perspiciatis ratione dolore recusandae architecto tempore praesentium.",
            img: "img"
        },
        {
            title: "Agile Methodology",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas necessitatibus, obcaecati officia qui minima. Voluptate ullam at quisquam. Repellat dicta ipsum inventore perspiciatis ratione dolore recusandae architecto tempore praesentium.",
            img: "img"
        }
    ]




    return (
        <div className="mb-[100px]">
            <h1 className="text-white">Skills</h1>
            <div className="flex justify-between text-black">
                {
                    info.map( (skill, idx) => {
                        return (
                            <div key={idx} className="flex flex-col  items-center h-[475px] w-[345px] bg-slate-100 relative">

                                <div className="bg-[green] h-[165px] w-[165px] absolute left-0 right-0 mx-auto top-[-82.5px] rounded-full"></div>

                                <h2 className="mt-[100px] text-[24px]">{skill.title}</h2>
                                <p className="w-[80%] mt-5 text-center">{skill.body}</p>

                                <span className="w-full h-3 absolute bottom-0 bg-slate-600"></span>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}


export default Skills