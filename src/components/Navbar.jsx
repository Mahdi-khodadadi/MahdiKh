import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [hamburMenu, setHamburMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setHamburMenu(false);
    };
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setHamburMenu(false);
      }
    };

    if (hamburMenu) {
      document.addEventListener("keydown", onKey);
      document.addEventListener("mousedown", onClickOutside);
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, [hamburMenu]);


  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 72;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setHamburMenu(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Service", id: "services" },
    { label: "MK", id: null },
    { label: "Portfolio", id: "portfolio" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="px-4 lg:px-16 py-4 lg:py-8 flex justify-center">
      <ul className="hidden md:flex w-[95%] lg:w-[90%] fixed top-4 lg:top-6 items-center justify-between p-1 mt-2 bg-white/5 backdrop-blur-sm border border-white/30 rounded-full text-white font-Poppins z-50 overflow-x-auto scrollbar-hide">
        {navItems.map((item, idx) =>
          item.id ? (
            <li key={idx} role="button" tabIndex={0} onClick={() => handleScroll(item.id)} onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? handleScroll(item.id) : null)} className="rounded-full py-4 px-6 lg:px-16 w-24 flex justify-center hover:bg-primary cursor-pointer">
              {item.label}
            </li>
          ) : (
            <li key={idx} className="bg-primary rounded-full p-[0.4rem] font-bold text-[1.2rem] flex justify-center">
              {item.label}
            </li>
          )
        )}
      </ul>

      <div className="flex md:hidden w-[95%] lg:w-[90%] fixed top-3 lg:top-6 items-center justify-between px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-Poppins z-50">
        <div className="bg-primary rounded-full p-[0.4rem] font-bold text-[1.2rem] flex justify-center">MK</div>
        <button className="text-white text-3xl active:scale-90 transition-all" onClick={() => setHamburMenu((prev) => !prev)}>
          <GiHamburgerMenu />
        </button>
      </div>

      <div className={`fixed inset-0 z-40 transition-opacity duration-200 ${hamburMenu ? "opacity-60 pointer-events-auto" : "opacity-0 pointer-events-none"} bg-black`} aria-hidden={!hamburMenu}/>

      <nav
        ref={menuRef} className={`fixed right-1/2 translate-x-1/2 top-[5.2rem] z-50 w-[90%] max-w-xs md:hidden mx-auto transition-transform duration-300 ease-out transform origin-top ${hamburMenu ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-2 pointer-events-none"}`} aria-hidden={!hamburMenu}>
        <div className="bg-white/6 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white font-Poppins">
          <ul className="flex flex-col gap-3">
            {navItems.map((item, idx) =>
              item.id ? (
                <li key={idx} className="rounded-full py-3 px-4 flex justify-center hover:bg-primary cursor-pointer" onClick={() => handleScroll(item.id)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? handleScroll(item.id) : null)}>
                  {item.label}
                </li>
              ) : (
                <li key={idx} className="rounded-full py-3 px-4 flex justify-center bg-primary font-bold">
                  {item.label}
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
