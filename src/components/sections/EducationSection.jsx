import img from "../../assets/ee85e078-9e9c-4b05-8d32-e4d3335381e2.png"


const EducationSection = () => {
    return (
        <div className="md:p-4 lg:p-24 md:py-0 lg:py-0">
            <div className="flex flex-col items-center text-white">
                <h2 className="text-[1.2rem]">Educational Records</h2>
                <h3 className="font-bold text-[2.5rem] text-center">Education</h3>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-4 gap-6 w-full auto-rows-[260px] p-2 md:py-16 text-white">
                <div className="col-span-2 row-span-2 overflow-hidden bg-[#2a2a33] rounded-2xl p-3 shadow-inner border border-[#3a3a44]">
                    <img src={img} alt="img-school" className="rounded-2xl border border-[#3a3a44] h-auto md:h-80 w-[100%] mb-4"/>
                    <div className="flex items-center gap-4 text-[2rem] font-bold mb-2">
                        <div className="w-10 h-10 bg-[#5F43FF] rounded-xl flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                        <h2>2026</h2>
                    </div>
                    <p className="text-[0.7rem] md:text-[0.9rem] lg:text-[1rem]">Completing my Bachelor’s degree in Computer Engineering, focusing on front-end development, software fundamentals, and academic projects. This final year strengthened my technical abilities and prepared me for professional growth in modern web technologies.</p>
                </div>
                <div className="col-span-2 row-span-1 overflow-hidden bg-[#2a2a33] rounded-2xl p-3 shadow-inner border border-[#3a3a44]">
                    <div className="flex items-center gap-4 text-[2rem] font-bold mb-2">
                        <div className="w-10 h-10 bg-[#5F43FF] rounded-xl flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                        <h2>2022</h2>
                    </div>
                    <p className="text-[0.7rem] md:text-[0.9rem] lg:text-[1rem]">Started my academic journey in Computer Engineering, where I was introduced to core programming concepts, logical problem-solving, and the fundamentals of computer science. During this period, I learned essential subjects such as algorithms, data structures, mathematics, and software principles. This stage helped me build a strong technical foundation, understand how modern systems work, and prepare myself for deeper learning in front-end development and advanced engineering topics.</p>
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden bg-[#2a2a33] rounded-2xl p-3 shadow-inner border border-[#3a3a44]">
                    <div className="flex items-center gap-4 text-[2rem] font-bold mb-2">
                        <div className="w-10 h-10 bg-[#5F43FF] rounded-xl flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                        <h2>2022</h2>
                    </div>
                    <p className="text-[0.7rem] md:text-[0.9rem] lg:text-[1rem]">High School Diploma in Mathematics – GPA 18/20 Graduated from Imam Reza High School, Mobarakeh Focused on mathematics and analytical subjects that built a strong base for engineering studies.</p>
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden bg-[#2a2a33] rounded-2xl p-3 shadow-inner border border-[#3a3a44]">
                    <div className="flex items-center gap-4 text-[2rem] font-bold mb-2">
                        <div className="w-10 h-10 bg-[#5F43FF] rounded-xl flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                        <h2>2023</h2>
                    </div>
                    <p className="text-[0.7rem] md:text-[0.9rem] lg:text-[1rem]">Professional Training Courses Completed several specialized programming courses, including: JavaScript–React.js–TailwindCSS Gained hands-on experience in modern web development and front-end technologies.</p>
                </div>
            </div>
        </div>
    );
};



export default EducationSection;