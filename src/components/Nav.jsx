import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const handleNavClick = (event, href) => {
    event.preventDefault();
    const targetElement = document.getElementById(href.replace("#", ""));
    if (targetElement) {
      const yOffset = -50;
      const yPosition =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full mt-12">
      <nav className="flex max-lg:justify-between items-center max-container">
        <div
          className="flex items-center justify-between w-[129px] lg:hidden"
        >
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-auto h-[50px]"
          />
          <h2 className="font-worksans ml-4 text-[#106351] font-bold">KEMENGER</h2>
        </div>
        <ul className="flex justify-center items-center gap-16 max-lg:hidden ml-[500px]">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-inter leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
