
import { languages, frameworks, others, databases, versionControl, tests} from "../data/technologies_data"


const Technologies = () => {




    return (
        <div className="mb-[100px]">
            <h1 className="text-[42px] border-b-2 mb-10">Technologies</h1>
            <div className="grid gap-3 grid-cols-3 text-black">
                <div className=" bg-slate-100 col-span-2 py-2 relative">
                    <h2 className="text-center text-[24px]">Languages</h2>
                    <div className="flex justify-around mt-4 mb-2">
                        {
                            languages.map( (lang, idx) => {
                                return (
                                    <div key={idx}>
                                        <img src={lang.img} alt={lang.name} />
                                        <p className="text-center text-[20px]">{lang.name}</p>
                                    </div>
                                )
                            })
                        }                  
                    </div>
                    <span className="w-full h-2 absolute bottom-0 bg-gradient-to-r from-indigo-500  to-blue-500"></span>
                </div>

                <div className="bg-slate-100 row-span-4 py-2 relative">
                    <h2 className="text-center text-[24px]">Frameworks / Libraries</h2>
                    <div className="flex flex-col justify-between mt-4 h-[90%] px-4">
                        {
                            frameworks.map( (fw, idx) => {
                                return (
                                    <div key={idx} className="flex items-center">
                                        <img className="w-[60px] h-[60px]" src={fw.img} alt={fw.name} />
                                        <p className="text-[20px] ml-3">{fw.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <span className="w-full h-2 absolute bottom-0 bg-gradient-to-r from-indigo-500  to-blue-500"></span>
                </div>

                <div className="bg-slate-100 row-span-3 py-2 relative">
                    <h2 className="text-center text-[24px]">Other</h2>
                    <div className="flex flex-col justify-between mt-4 px-4 h-[85%]">
                        {
                            others.map( (other, idx) => {
                                return (
                                    <div key={idx} className="flex items-center">
                                        <img className="w-[60px] h-[60px]" src={other.img} alt={other.name} />
                                        <p className="text-[20px] ml-3">{other.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <span className="w-full h-2 absolute bottom-0 bg-gradient-to-r from-indigo-500  to-blue-500"></span>
                </div>

                <div className="bg-slate-100 py-2 relative">
                    <h2 className="text-center text-[24px]">Databases</h2>
                    <div className="flex justify-around mt-4 mb-2">
                        {
                            databases.map( (db, idx) => {
                                return (
                                    <div key={idx} className="flex flex-col items-center">
                                        <img src={db.img} alt={db.name} />
                                        <p className="text-[20px]">{db.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <span className="w-full h-2 absolute bottom-0 bg-gradient-to-r from-indigo-500  to-blue-500"></span>
                </div>

                <div className="bg-slate-100 py-2 relative">
                    <h2 className="text-center text-[24px]">Version Control</h2>
                    <div className="flex justify-around mt-4 mb-2">
                        {
                            versionControl.map( (vc, idx) => {
                                return (
                                    <div key={idx} className="flex flex-col items-center">
                                        <img src={vc.img} alt={vc.name} />
                                        <p className="text-[20px]">{vc.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <span className="w-full h-2 absolute bottom-0 bg-gradient-to-r from-indigo-500  to-blue-500"></span>
                </div>

                <div className="bg-slate-100 py-2 relative">
                    <h2 className="text-center text-[24px]">Testing</h2>
                    <div className="flex justify-around mt-4 mb-2">
                        {
                            tests.map( (test, idx) => {
                                return (
                                    <div key={idx} className="flex flex-col items-center">
                                        <img className="w-[60px] h-[60px]" src={test.img} alt={test.name} />
                                        <p className="text-[20px]">{test.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <span className="w-full h-2 absolute bottom-0 bg-gradient-to-r from-indigo-500  to-blue-500"></span>
                </div>
            </div>
        </div>
    )
}

export default Technologies