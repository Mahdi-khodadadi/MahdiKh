import img from "../../assets/Screenshot 2025-09-23 110129.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const AboutSection = () => {


    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
      
        const headerOffset = 72;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
      
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      };

      
    return (
        <div className="flex items-center w-[100%] mt-28 flex-col md:flex-row mb-24">
            <div className="w-[100%] md:w-[50%] text-white px-8 lg:px-24 flex flex-col items-center md:block">
                <div>
                    <h2 className="font-bold text-[2.5rem]">im Mahdi,</h2>
                    <h3 className="font-bold text-[2.5rem]">Web Developer</h3>
                </div>
                <h4 className="text-[0.9rem]">I am a web designer and developer, skilled in React, Tailwind, and UI design. Passionate about creating beautiful, user-friendly, and multilingual websites that deliver an engaging and seamless experience for all users.</h4>

                <div className="flex gap-3 p-6 justify-start mt-4 pl-0 font-medium">
                    <button onClick={() => handleScroll("about")} className="px-6 py-2 rounded-lg border border-gray-300 text-black bg-transparen bg-white hover:text-white hover:bg-backg transition-all duration-300">
                        About
                    </button>
                    <a href="/resume.pdf" download className="px-6 py-2 rounded-lg border border-[#6E47FF] bg-[#6b46ff] text-white hover:text-white hover:bg-backg transition-all duration-300">
                        Download CV
                    </a>
                </div>
            </div>
            <div className="w-[100%] md:w-[50%]">
                <div className="flex items-center justify-center flex-col md:flex-row">
                    <div className="relative w-[300px] h-[420px]">
                        <div className="w-[80px] bg-[#6E47FF] absolute left-[13.76rem] bottom-[6.2rem] h-[60px] rounded-[100%_0_100%_100%]"></div>
                        <div className="w-[80px] bg-[#6E47FF] absolute left-[13.76rem] bottom-[9.2rem] h-[80px]"></div>
                        <div className="w-full h-full bg-[#6E47FF] rounded-[1rem_1rem_15rem_1rem]"></div>
                        <img src={img} alt="profile" className="absolute bottom-0 left-[38%] -translate-x-1/2 w-[100%]" />
                        <div className="absolute bottom-[-10px] md:bottom-[-20px] right-[-10px] md:right-[-20px] w-[110px] md:w-[120px] h-[110px] md:h-[120px] bg-backg rounded-full flex items-center justify-center">
                            <div className="w-[80px] h-[80px] bg-[#6E47FF] rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-12 h-12 -rotate-45" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    
                    <div className="flex md:flex-col items-center gap-3 text-gray-300 lg:ml-12 mt-6">
                        <p className="text-[0.8rem] font-medium tracking-wider md:[writing-mode:vertical-lr] mr-2">
                            Follow me on:
                        </p>

                        <div className="h-px md:w-px w-12 md:h-12 bg-gray-500 mr-2"></div>

                        <div className="flex md:flex-col items-center gap-3">
                            <a href="https://github.com/Mahdi-khodadadi" target="_blank" rel="noopener noreferrer" className="w-4 h-4 rounded bg-white hover:bg-white/80 flex items-center justify-center transition">
                                <FaGithub className="text-[#6E47FF] text-[0.7rem]" />
                            </a>
                            <a href="https://www.instagram.com/xmahdi7886/" target="_blank" rel="noopener noreferrer" className="w-4 h-4 rounded bg-white hover:bg-white/80 flex items-center justify-center transition">
                                <RiInstagramFill className="text-[#6E47FF] text-[0.7rem]" />
                            </a>
                            <a href="https://www.linkedin.com/in/mahdi-khodadadi-36231530b/" target="_blank" rel="noopener noreferrer" className="w-4 h-4 rounded bg-white hover:bg-white/80 flex items-center justify-center transition">
                                <FaLinkedinIn className="text-[#6E47FF] text-[0.7rem]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default AboutSection;