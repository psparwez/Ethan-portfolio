import LogoLightImage from "../assets/logo-light.png";
import { NavLinks } from "../data/data";

const Header = () => {
  return (
    <header className="py-4">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between">
        <a href="" className="w-[100px] inline-block relative">
          <img src={LogoLightImage} className="w-full" alt="Logo" />
        </a>
        <nav className="py-2">
          <ul className="flex items-center gap-1">
            {NavLinks?.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className="group block cursor-pointer py-1 px-4 text-base  text-gray-300"
                >
                  {item.label.split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block group-hover:text-primaryColor transition-transform duration-300 group-hover:rotate-[360deg] group-hover:translate-y-[-2px]"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {letter}
                    </span>
                  ))}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href=""
          className="px-7 py-3  butn-presv   bg-white text-[#444] cursor-pointer rounded-md border border-transparent text-sm hover:text-gray-700"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
};

export default Header;
