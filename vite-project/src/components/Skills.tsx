
import { skills } from "../data/skills_data"

const Skills = () => {




    return (
        <div className="mb-[100px]">
            <h1 className="text-white text-[48px] mb-28 border-b-2">Skills</h1>
            <div className="flex justify-between text-black">
                {
                    skills.map( (skill, idx) => {
                        return (
                            <div key={idx} className="flex flex-col  items-center h-[475px] w-[345px] bg-slate-100 relative">

                                <div className="flex justify-center items-center bg-[#484292] h-[165px] w-[165px] absolute left-0 right-0 mx-auto top-[-82.5px] rounded-full">
                                    <img className="w-[60%]" src={skill.img} alt="" />
                                </div>

                                <h2 className="mt-[100px] text-[24px]">{skill.title}</h2>
                                <p className="w-[80%] mt-5 text-center">{skill.body}</p>

                                <span className="w-full h-2 absolute bottom-0 bg-gradient-to-r from-indigo-500  to-blue-500"></span>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}


export default Skills