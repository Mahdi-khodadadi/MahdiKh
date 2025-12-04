import img from "../../assets/Screenshot 2025-12-01 111905.png";
import service1 from "../../assets/Screenshot 2025-11-19 121136.png"
import service2 from "../../assets/Screenshot 2025-09-18 113920.png"



const ProjectsSection = () => {







    return (
        <div className="bg-backg2 pt-16">
            <div className="flex flex-col items-center text-white">
                <h2 className="text-[1.2rem]">MY EXPERTISE</h2>
                <h3 className="font-bold text-[2.5rem] text-center">Professional Solutions</h3>
                <h4 className="text-[0.9rem] mt-[0.8rem] flex flex-col items-center text-center">I deliver modern, high-quality web experiences using React, Tailwind, and thoughtful UI design principles. My focus <span> is on performance, clarity, and creating interfaces that feel smooth, intuitive, and appealing.</span></h4>
            </div>


            <div className="flex justify-center py-16 flex-col md:flex-row items-center gap-6 md:gap-[5%]">
                <a href="https://mahdi-khodadadi.github.io/resume-builder/" target="_blank" rel="noopener noreferrer" className="w-[300px] h-[350px] hover:scale-110 cursor-pointer">
                    <div className="w-full h-full bg-[#6E47FF] rounded-[1rem] flex flex-col justify-between">
                        <div className="text-[1.3rem] text-white pt-6 pr-4 pb-2 pl-4 border-b border-[#6e6e6e] font-medium">Resume Builder</div>
                        <div className="relative">
                            <div className="w-[100%] h-[120px] bg-[rgba(255,255,255,0.55)] backdrop-blur-xl absolute rounded-3xl top-[-47px] scale-[0.76]"></div>
                            <div className="w-[100%] h-[120px] bg-white absolute rounded-3xl top-[-24px] scale-[0.88]"></div>
                            <img src={service1} alt="img" className="rounded-t-3xl rounded-b-2xl relative h-52 object-cover"/>
                        </div>
                    </div>
                </a>
                <a href="https://Mahdi-khodadadi.github.io/Landing" target="_blank" rel="noopener noreferrer" className="w-[300px] h-[350px] hover:scale-110 cursor-pointer">
                    <div className="w-full h-full bg-[#6E47FF] rounded-[1rem] flex flex-col justify-between">
                        <div className="text-[1.3rem] text-white pt-6 pr-4 pb-2 pl-4 border-b border-[#6e6e6e] font-medium">My Cloud</div>
                        <div className="relative">
                            <div className="w-[100%] h-[120px] bg-[rgba(255,255,255,0.55)] backdrop-blur-xl absolute rounded-3xl top-[-47px] scale-[0.76]"></div>
                            <div className="w-[100%] h-[120px] bg-white absolute rounded-3xl top-[-24px] scale-[0.88]"></div>
                            <img src={service2} alt="img" className="rounded-t-3xl rounded-b-2xl relative h-52 object-cover"/>
                        </div>
                    </div>
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer" className="w-[300px] h-[350px] hover:scale-110 cursor-pointer">
                    <div className="w-full h-full bg-[#6E47FF] rounded-[1rem] flex flex-col justify-between">
                        <div className="text-[1.3rem] text-white pt-6 pr-4 pb-2 pl-4 border-b border-[#6e6e6e] font-medium">Portfolio</div>
                        <div className="relative">
                            <div className="w-[100%] h-[120px] bg-[rgba(255,255,255,0.55)] backdrop-blur-xl absolute rounded-3xl top-[-47px] scale-[0.76]"></div>
                            <div className="w-[100%] h-[120px] bg-white absolute rounded-3xl top-[-24px] scale-[0.88]"></div>
                            <img src={img} alt="img" className="rounded-t-3xl rounded-b-2xl relative h-52 object-cover"/>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ProjectsSection;