


const Technologies = () => {

    const languages: Array<string> = ["HTML", "CSS", "JS", "TS", "C#", "PY"]
    const frameworks: Array<string> = ["React", "NodeJS", "ExpressJS", "Flask", "ASP.NET Core", "Mongoose ODM", "Entity Framework ORM", "Redux Toolkit", "Tailwind"]
    const others: Array<string> = ["Postman", "Figma", "VSCode", "VSCode", "VSCode"]
    const databases: Array<string> = ["MySQL", "MongoDB"]
    const versionControl: Array<string> = ["Git", "Github"]


    return (
        <div className="mb-[100px] grid gap-3 grid-cols-3 text-black">
            
            <div className=" bg-slate-300 col-span-2 py-2 relative">
                <h2 className="text-center text-[24px]">Languages</h2>
                <div className="flex justify-around mt-4 mb-2">
                    {
                        languages.map( (lang, idx) => {
                            return (
                                <div key={idx}>
                                    <div className="bg-[green] w-[60px] h-[60px]"></div>
                                    <p className="text-center text-[20px]">{lang}</p>
                                </div>
                            )
                        })
                    }                  
                </div>
                <span className="w-full h-2 absolute bottom-0 bg-slate-600"></span>
            </div>

            


            <div className="bg-slate-300 row-span-4 py-2 relative">
                <h2 className="text-center text-[24px]">Frameworks / Libraries</h2>
                <div className="flex flex-col justify-between mt-4 h-[90%] px-4">
                    {
                        frameworks.map( (fw, idx) => {
                            return (
                                <div key={idx} className="flex items-center">
                                    <div className="bg-[green] w-[60px] h-[60px]"></div>
                                    <p className="text-[20px] ml-3">{fw}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <span className="w-full h-2 absolute bottom-0 bg-slate-600"></span>
            </div>




            <div className="bg-slate-300 row-span-3 py-2 relative">
                <h2 className="text-center text-[24px]">Other</h2>
                <div className="flex flex-col justify-between mt-4 px-4 h-[85%]">
                    {
                        others.map( (other, idx) => {
                            return (
                                <div key={idx} className="flex items-center">
                                    <div className="bg-[green] w-[60px] h-[60px]"></div>
                                    <p className="text-[20px] ml-3">{other}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <span className="w-full h-2 absolute bottom-0 bg-slate-600"></span>
            </div>

            <div className="bg-slate-300 py-2 relative">
                <h2 className="text-center text-[24px]">Databases</h2>
                <div className="flex justify-around mt-4 mb-2">
                    {
                        databases.map( (db, idx) => {
                            return (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="bg-[green] w-[60px] h-[60px]"></div>
                                    <p className="text-[20px]">{db}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <span className="w-full h-2 absolute bottom-0 bg-slate-600"></span>
            </div>

            <div className="bg-slate-300 py-2 relative">
                <h2 className="text-center text-[24px]">Version Control</h2>
                <div className="flex justify-around mt-4 mb-2">
                    {
                        versionControl.map( (vc, idx) => {
                            return (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="bg-[green] w-[60px] h-[60px]"></div>
                                    <p className="text-[20px]">{vc}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <span className="w-full h-2 absolute bottom-0 bg-slate-600"></span>
            </div>


            <div className="bg-slate-300 py-2 relative">
                <h2 className="text-center text-[24px]">Databases</h2>
                <div className="flex justify-around mt-4 mb-2">
                    {
                        databases.map( (db, idx) => {
                            return (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="bg-[green] w-[60px] h-[60px]"></div>
                                    <p className="text-[20px]">{db}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <span className="w-full h-2 absolute bottom-0 bg-slate-600"></span>
            </div>





        </div>
    )
}

export default Technologies