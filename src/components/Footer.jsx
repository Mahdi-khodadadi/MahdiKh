import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "emailjs-com";







const SocialIcon = ({ children, label, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex items-center justify-center cursor-pointer">
    {children}
  </a>
);

const Footer = () => {


  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
  
    const headerOffset = 72;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;
  
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };


  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const SERVICE_ID = "service_0mobwda";       // از EmailJS
    const TEMPLATE_ID = "template_2b4xmzr";     // از EmailJS
    const USER_ID = "npU9ONnUBYwKYMzbr"; // از EmailJS

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(
        () => {
          setLoading(false);
          setDone(true);
          formRef.current.reset();
        },
        (err) => {
          setLoading(false);
          setError("ارسال موفق نبود، بعدا امتحان کن.");
          console.error(err);
        }
      );
  };





  return (
    <footer className="bg-[#131217] text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Lets Connect there
            </h2>
          </div>
          <div className="flex-shrink-0">
            <h2 className="bg-[#6E47FF] hover:bg-[#5b36f0] text-white font-semibold px-4 py-2 rounded-lg shadow-md transition">
              Let’s Talk ✨
            </h2>
          </div>
        </div>
        <hr className="border-zinc-800 my-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4 flex-col">
              <div className="w-12 h-12 rounded-full bg-[#6E47FF] flex items-center justify-center font-bold text-white">
                MK
              </div>
              <div>
                <p className="text-gray-300 max-w-xl leading-relaxed text-sm">I’m always available for new connections and collaborations. If you have a project or want to reach out, feel free to contact me anytime.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <SocialIcon label="Github" link="https://github.com/Mahdi-khodadadi">
                <FaGithub className="w-5 h-5"/>
              </SocialIcon>

              <SocialIcon label="WhatsApp" link="https://wa.me/989020143786">
                <IoLogoWhatsapp className="w-5 h-5" />
              </SocialIcon>

              <SocialIcon label="Instagram" link="https://www.instagram.com/xmahdi7886/">
                <TbBrandInstagramFilled className="w-5 h-5"  />
              </SocialIcon>

              <SocialIcon label="Telegram" link="https://t.me/xmahdi7886">
                <RiTelegram2Fill className="w-5 h-5"  />
              </SocialIcon>

              <SocialIcon label="Linkedin" link="https://www.linkedin.com/in/mahdi-khodadadi-36231530b/">
                <FaLinkedinIn className="w-5 h-5"  />
              </SocialIcon>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-gray-200">Navigation</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li><button onClick={() => handleScroll("home")} className="hover:text-white transition">Home</button></li>
              <li><button onClick={() => handleScroll("about")} className="hover:text-white transition">About Us</button></li>
              <li><button onClick={() => handleScroll("services")} className="hover:text-white transition">Service</button></li>
              <li><a href="/resume.pdf" download className="hover:text-white transition">Resume</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-gray-200">Contact</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <div>(+98) 9020143786</div>
              <div>Xmahdi7886@gmail.com</div>
              <div>MahdiKhodadadi.ir</div>
            </div>
            






            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 w-full max-w-md">
              <label htmlFor="message" className="sr-only">message</label>
              <textarea id="message" name="message" placeholder="Write your text here..." required className="w-full bg-zinc-800 placeholder:text-zinc-400 text-sm px-4 py-3 rounded-lg focus:outline-none text-white min-h-[100px]"/>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="flex gap-3">
                <input id="email" name="user_email" type="email" placeholder="Email Address" required className="w-full bg-zinc-800 placeholder:text-zinc-400 text-sm px-4 py-2 rounded-lg focus:outline-none text-white"/>
                <button type="submit" disabled={loading} aria-label="send" className="p-2 rounded-md bg-[#6E47FF] hover:bg-[#5b36f0] transition text-white">
                  {loading ? "sending..." : "send"}
                </button>
              </div>

              {done && <p className="text-green-400">The message was sent✅</p>}
              {error && <p className="text-red-400">{error}</p>}
            </form>










          </div>
        </div>

        <hr className="border-zinc-800 my-8" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-zinc-400">
          <div>
            © {new Date().getFullYear()} | Designed by <a href="https://github.com/Mahdi-khodadadi" target="_blank" rel="noopener noreferrer" className="text-white underline">Developios</a>.
          </div>

          <div className="flex items-center gap-4 justify-start md:justify-end">
            <a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Terms & Conditions</a>
            <span className="text-zinc-700">|</span>
            <a href="https://www.privacypolicies.com/blog/privacy-policy-template/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};





export default Footer;