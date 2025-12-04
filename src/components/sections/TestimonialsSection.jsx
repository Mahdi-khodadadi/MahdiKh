import prof1 from "../../assets/S006_pp-768x1152.jpg"
import prof2 from "../../assets/images.jpeg"
import prof3 from "../../assets/16881824.jpeg"





const TestimonialsSection = () => {
    return (
        <div className="bg-backg2 text-white p-2 md:p-16 md:pt-0 pt-0">
            <div className="flex flex-col items-center text-white py-20">
                <h3 className="font-bold text-[2.5rem] text-center">Happy Clients Say!</h3>
                <h4 className="text-[0.9rem] mt-[0.8rem] flex flex-col items-center text-center w-[75%]">Over the past few years, I have had the honor of working with various businesses and brands, helping them build modern, fast, and user-friendly websites tailored to their goals. From small startups to established companies, I have focused on creating clean and efficient digital experiences that not only look great but also perform flawlessly on every device.My approach is centered on understanding each client’s unique needs and turning their ideas into functional, visually appealing interfaces. Here are some of the experiences shared by clients who have worked with me and trusted me with their projects.</h4>
            </div>
            <div className="flex gap-6 w-[100%] flex-col md:flex-row">
                <div className="w-[100%] md:w-[33.33%] bg-[#2a2a33] rounded-2xl p-3 shadow-inner border border-[#3a3a44] flex flex-col justify-between">
                    <div className="flex gap-3">
                        <img src={prof1} alt="prof1" className="w-12 h-12 rounded-full" />
                        <div>
                            <h1 className="font-bold">Sarah Mohammadi</h1>
                            <h2 >Iran, Tehran</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="flex items-center gap-[0.12rem]">
                            {Array.from({ length: 5 }, (_, i) => (
                                <svg
                                key={i}
                                className={`w-3 h-3 ${i < 5 ? "fill-yellow-400" : "fill-gray-400"}`}
                                viewBox="0 0 24 24"
                                >
                                <path d="M12 .587l3.668 7.431L23.6 9.75l-5.7 5.56L19.6 24 12 19.897 4.4 24l1.7-8.69L.4 9.75l7.932-1.732z" />
                                </svg>
                            ))}
                        </div>
                        <h2>5.0</h2>
                    </div>
                    <p className="text-gray-400 text-[0.8rem]">Mehdi is one of the most professional designers I have ever worked with. He built our website from scratch with a modern user interface and excellent performance. Communication was smooth, and the project was delivered right on time.</p>
                </div>
                <div className="w-[100%] md:w-[33.33%] bg-[#2a2a33] rounded-2xl p-3 shadow-inner border border-[#3a3a44] flex flex-col justify-between">
                    <div className="flex gap-3">
                        <img src={prof2} alt="prof1" className="w-12 h-12 rounded-full" />
                        <div>
                            <h1 className="font-bold">Ali Rastgar</h1>
                            <h2 >Iran, Isfahan</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="flex items-center gap-[0.12rem]">
                            {Array.from({ length: 5 }, (_, i) => (
                                <svg
                                key={i}
                                className={`w-3 h-3 ${i < 3 ? "fill-yellow-400" : "fill-gray-400"}`}
                                viewBox="0 0 24 24"
                                >
                                <path d="M12 .587l3.668 7.431L23.6 9.75l-5.7 5.56L19.6 24 12 19.897 4.4 24l1.7-8.69L.4 9.75l7.932-1.732z" />
                                </svg>
                            ))}
                        </div>
                        <h2>3.0</h2>
                    </div>
                    <p className="text-gray-400 text-[0.8rem]">He created a complete and dynamic landing page for our startup. Clean code, organized Tailwind structure, and perfect responsiveness. We will definitely work with Mehdi again in future projects.</p>
                </div>
                <div className="w-[100%] md:w-[33.33%] bg-[#2a2a33] rounded-2xl p-3 shadow-inner border border-[#3a3a44] flex flex-col justify-between">
                    <div className="flex gap-3">
                        <img src={prof3} alt="prof1" className="w-12 h-12 rounded-full" />
                        <div>
                            <h1 className="font-bold">Dr. Kian Rezaei</h1>
                            <h2 >Iran, Mashhad</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="flex items-center gap-[0.12rem]">
                            {Array.from({ length: 5 }, (_, i) => (
                                <svg
                                key={i}
                                className={`w-3 h-3 ${i < 4 ? "fill-yellow-400" : "fill-gray-400"}`}
                                viewBox="0 0 24 24"
                                >
                                <path d="M12 .587l3.668 7.431L23.6 9.75l-5.7 5.56L19.6 24 12 19.897 4.4 24l1.7-8.69L.4 9.75l7.932-1.732z" />
                                </svg>
                            ))}
                        </div>
                        <h2>4.0</h2>
                    </div>
                    <p className="text-gray-400 text-[0.8rem]">He designed a clean and elegant website for my clinic, exactly the way I wanted. Both the user experience and the website's speed were outstanding. Highly recommended.</p>
                </div>
                
                
                
                
                
            </div>
            
        </div>
    );
};



export default TestimonialsSection;