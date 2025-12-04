import img1 from "../../assets/stylish-web-ui_992397-11626.avif";
import img2 from "../../assets/Complete Guide on Front-End Web Development with React-20240830100833086.jpg"
import img3 from "../../assets/operations-strategy.png"
import { Link } from "react-router-dom";



const BlogUpdatePage = () => {
  const posts = [
    {
      id: 1,
      title: "UI Design",
      excerpt:
        "For me, UI means simplicity, structure, and clear visual identity. I build components to be clean, responsive, and reusable. Here I share small design tips and experiences using Tailwind.",
      date: "12 Nov 2025",
      img: img1,
      slug: "ui-design",
      LongText : "UI Design is not just about making things look pretty; it’s about creating interfaces that are intuitive, consistent, and enjoyable for users. In my experience, the most effective UI comes from understanding user needs, establishing clear visual hierarchies, and designing interactions that feel natural. I focus on simplicity without sacrificing functionality, making sure every element has a purpose and contributes to the overall experience. Using Tailwind and React, I can rapidly prototype and iterate designs, maintaining consistency across different screens and devices. I also pay attention to accessibility, ensuring color contrasts, font sizes, and navigation patterns are usable by everyone. Small details, like hover effects, spacing, and typography choices, often make a huge difference in how users perceive the product. Throughout this blog, I share my tips, lessons learned, and practical examples of building components that are clean, responsive, and reusable, emphasizing clarity, speed, and elegance in UI development."
    },
    {
      id: 2,
      title: "Front-End Development",
      excerpt:
        "Every project starts with an idea and grows through the right architecture. In my resume builder, I used Redux and i18n to manage data and multilingual content. This section highlights the methods I use to build scalable, modern apps.",
      date: "18 Nov 2025",
      img: img2,
      slug: "front-end-development",
      LongText : "Front-end development is all about bridging the gap between design and functionality. My approach focuses on writing clean, modular, and maintainable code that can scale as projects grow. Using React, I create reusable components that make development faster and more consistent. State management tools like Redux help me keep complex applications organized, while i18n allows the same app to serve multiple languages seamlessly. Performance is another key focus: optimizing rendering, lazy-loading assets, and reducing unnecessary re-renders ensures smooth user experiences. I also follow best practices for responsive design, making sure interfaces look great on mobile, tablet, and desktop. Testing, debugging, and iterative development are part of my workflow, allowing me to deliver high-quality applications reliably. In this blog, I detail real-world examples from projects like my resume builder, showing how architectural choices, component structure, and thoughtful design decisions contribute to scalable, modern front-end applications."
    },
    {
      id: 3,
      title: "Challenges & Lessons",
      excerpt:
        "No project is perfect—there are always bugs, rewrites, and new lessons. Each challenge improved my workflow and problem-solving. Here I write about real issues I faced and what they taught me.",
      date: "24 Nov 2025",
      img: img3,
      slug: "challenges-lessons",
      LongText : "Every developer faces challenges, and overcoming them is what drives growth. Throughout my projects, I’ve encountered bugs, unexpected behaviors, and design conflicts that forced me to rethink solutions and improve my workflow. These challenges taught me the importance of planning, writing maintainable code, and documenting my work carefully. Learning from mistakes and debugging effectively has strengthened my problem-solving skills, allowing me to anticipate potential issues before they arise. I also learned to communicate better with teammates, breaking down problems and collaborating to find optimal solutions. In this blog, I reflect on specific challenges I faced during projects like the resume builder and front-end apps, highlighting how each obstacle led to a deeper understanding of React, state management, component architecture, and user experience. By sharing these lessons, I hope others can avoid similar pitfalls and build more resilient, scalable, and maintainable applications."
    },
  ];

  return (
    <div className="text-white p-4 md:p-16 bg-backg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-sm tracking-widest text-gray-400">STORIES</h2>
            <h3 className="font-extrabold text-3xl md:text-4xl mt-2">Blog Update</h3>
          </div>
          <p className="md:w-1/2 text-gray-300 leading-relaxed text-sm md:text-base"> From early projects to working with React and Tailwind, my focus has always been clean and fast UI. This blog covers what I’ve learned building real projects like my resume builder and multilingual apps. A brief look at the challenges and steps that shaped my development path.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <Link to={`/blog/${p.slug}`} key={p.id} className="relative bg-gradient-to-b from-[#7B5CFF] to-[#5A3BFF] rounded-2xl overflow-hidden shadow-xl transform transition duration-300 hover:-translate-y-2" aria-labelledby={`post-${p.id}-title`}>
              <div className="h-56 md:h-48 w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"/>
              </div>
              <div className="p-6 bg-opacity-90 bg-transparent">
                <h4 id={`post-${p.id}-title`} className="text-2xl font-bold mb-2">{p.title}</h4>
                <p className="text-gray-100 text-sm leading-relaxed mb-4 line-clamp-3">{p.excerpt}</p>
                <div className="flex items-center justify-between">
                    <span className="text-xs text-purple-100/90">{p.date}</span>
                    <div className="cursor-pointer -rotate-45 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h10M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogUpdatePage;
