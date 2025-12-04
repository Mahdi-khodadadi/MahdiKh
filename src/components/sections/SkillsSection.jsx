import hcj from "../../assets/pngaaa.com-4253340.png";
import jch from "../../assets/d9bdf39e-ee0f-447f-b8b8-f41ba11e86dd.png";
import reactIcon from "../../assets/pngaaa.com-6752016.png";
import reactImg from "../../assets/detail-images-5_1582972578910.jpg";
import tcsIcon from "../../assets/images.png";
import tcsImg from "../../assets/Web-Design-Software-Tools.jpg";
import pythonIcon from "../../assets/pngaaa.com-619282.png";
import pythonImg from "../../assets/Class-Concepts-Object-Oriented-Programming-in-Python_Watermarked.6cf327c51434.avif";




const SkillsSection = () => {
    return (
        <div className="m-2 md:m-6 lg:m-24 lg:mr-14 text-white flex flex-col md:flex-row">
          <div className="w-full md:w-[35%] lg:w-[25%] flex flex-col justify-center gap-4 text-start mb-10 md:mb-0">
            <h2 className="text-[1.2rem]">MY SKILLS</h2>
            <h3 className="font-bold text-[2rem] md:text-[2.5rem] leading-[2.5rem] md:leading-[3rem]">
              Beautiful modern interfaces built carefully.
            </h3>
            <h4 className="text-[0.9rem] mt-[0.8rem]">
              Using HTML, CSS, JavaScript, React, Tailwind, and Python, I create responsive layouts, smooth animations, optimized workflows, and visually engaging components tailored for dynamic web experiences today.
            </h4>
          </div>



          <div className="w-full md:w-[65%] lg:w-[75%] hidden md:flex flex-col md:flex-row gap-4 md:pl-0 lg:pl-20">
            <div className="w-full md:w-[50%] flex flex-col md:items-end gap-4 mt-4 md:mt-12">
              <div className="w-full md:w-[95%] bg-[#6E47FF] flex flex-col md:flex-row rounded-2xl p-4">
                <div className="w-full md:w-[40%]">
                  <div className="bg-white p-1 rounded-lg w-10 h-10">
                    <img src={hcj} alt="img" className="w-8 h-8 rounded-lg" />
                  </div>
                  <h2 className="text-[1.2rem] font-medium mt-2">HTML • CSS • JavaScript</h2>
                  <h3 className="text-[0.7rem] text-gray-300">
                    Building structure, style and interaction for modern websites
                  </h3>
                </div>
                <img src={jch} alt="img" className="w-full md:w-[60%] h-40 rounded-lg mt-4 md:mt-0" />
              </div>
              <div className="w-full md:w-[70%] bg-[#6E47FF] rounded-2xl p-4">
                <div className="bg-white p-1 rounded-lg w-10 h-10 flex items-center justify-center">
                  <img src={tcsIcon} alt="img" className="w-7 h-7 rounded-lg" />
                </div>
                <h2 className="text-[1.2rem] font-medium mt-2">Tailwind Css</h2>
                <h3 className="text-[0.7rem] text-gray-300">
                  TailwindCSS provides a utility-first approach, enabling rapid UI development
                  with customizable styles and responsive design directly within your HTML.
                </h3>
                <img src={tcsImg} alt="img" className="w-full h-[13rem] rounded-lg mt-4" />
              </div>
            </div>
            <div className="w-full md:w-[50%] flex flex-col items-start gap-4">
              <div className="w-full md:w-[70%] bg-[#6E47FF] rounded-2xl p-4">
                <div className="bg-white p-1 rounded-lg w-10 h-10">
                  <img src={reactIcon} alt="img" className="w-8 h-8 rounded-lg" />
                </div>
                <h2 className="text-[1.2rem] font-medium mt-2">React Js</h2>
                <h3 className="text-[0.7rem] text-gray-300">
                  React empowers developers to build dynamic, scalable interfaces, much like constructing modern digital skyscrapers with precision and flexibility.
                </h3>
                <img src={reactImg} alt="img" className="w-full h-[13rem] rounded-lg mt-4" />
              </div>
              <div className="w-full md:w-[95%] bg-[#6E47FF] flex flex-col md:flex-row rounded-2xl p-4">
                <div className="w-full md:w-[40%]">
                  <div className="bg-white p-1 rounded-lg w-10 h-10">
                    <img src={pythonIcon} alt="img" className="w-8 h-8 rounded-lg" />
                  </div>
                  <h2 className="text-[1.2rem] font-medium mt-2">Python</h2>
                  <h3 className="text-[0.7rem] text-gray-300">
                    Python simplifies automation, scripting, data processing, backend development, and building scalable applications.
                  </h3>
                </div>
                <img src={pythonImg} alt="img" className="w-full md:w-[60%] h-40 rounded-lg mt-4 md:mt-0" />
              </div>
            </div>
          </div>







          <div className="w-[100%] flex md:hidden flex-col gap-4">
            <div className="w-[100%] bg-[#6E47FF] flex flex-row justify-between rounded-2xl p-4">
              <div>
                <div className="bg-white p-1 rounded-lg w-10 h-10">
                  <img src={hcj} alt="img" className="w-8 h-8 rounded-lg" />
                </div>
                <h2 className="text-[1.2rem] font-medium mt-2">HTML • CSS • JavaScript</h2>
                <h3 className="text-[0.7rem] text-gray-300">
                  Building structure, style and interaction for modern websites
                </h3>
              </div>
              <img src={jch} alt="img" className="w-[50%] h-40 rounded-lg mt-0 object-cover" />
            </div>

            <div className="flex w-[100%] gap-4">
              <div className="w-[70%] bg-[#6E47FF] rounded-2xl p-4">
                <div className="bg-white p-1 rounded-lg w-10 h-10 flex items-center justify-center">
                  <img src={tcsIcon} alt="img" className="w-7 h-7 rounded-lg" />
                </div>
                <h2 className="text-[1.2rem] font-medium mt-2">Tailwind Css</h2>
                <h3 className="text-[0.7rem] text-gray-300">
                  TailwindCSS provides a utility-first approach, enabling rapid UI development
                  with customizable styles and responsive design directly within your HTML.
                </h3>
                <img src={tcsImg} alt="img" className="w-full h-[13rem] rounded-lg mt-4 object-cover" />
              </div>

              <div className="w-[70%] bg-[#6E47FF] rounded-2xl p-4">
                <div className="bg-white p-1 rounded-lg w-10 h-10">
                  <img src={reactIcon} alt="img" className="w-8 h-8 rounded-lg" />
                </div>
                <h2 className="text-[1.2rem] font-medium mt-2">React Js</h2>
                <h3 className="text-[0.7rem] text-gray-300">
                  React empowers developers to build dynamic, scalable interfaces, much like constructing modern digital skyscrapers with precision and flexibility.
                </h3>
                <img src={reactImg} alt="img" className="w-full h-[13rem] rounded-lg mt-4 object-cover" />
              </div>
            </div>
            
            <div className="w-[100%] bg-[#6E47FF] flex flex-row justify-between rounded-2xl p-4">
              <div>
                <div className="bg-white p-1 rounded-lg w-10 h-10">
                  <img src={pythonIcon} alt="img" className="w-8 h-8 rounded-lg" />
                </div>
                <h2 className="text-[1.2rem] font-medium mt-2">Python</h2>
                <h3 className="text-[0.7rem] text-gray-300">
                  Python simplifies automation, scripting, data processing, backend development, and building scalable applications.
                </h3>
              </div>
              <img src={pythonImg} alt="img" className="w-[50%] h-40 rounded-lg mt-0 object-cover" />
            </div>

          </div>



        </div>
    );
};



export default SkillsSection;