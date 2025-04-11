import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#000000] shadow-md py-4 w-full fixed top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <h1 className="text-2xl font-bold text-[#d16cff] ml-4 md:ml-16">
          Daffne ☕
        </h1>
        <button
          className="md:hidden text-[#F5F5F5] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        <ul className="hidden md:flex space-x-8 mr-4 md:mr-12 text-[#F5F5F5]">
          <li>
            <a href="#about" className="hover:text-[#d16cff] transition-colors duration-200">
              Sobre
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#d16cff] transition-colors duration-200">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#d16cff] transition-colors duration-200">
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <ul
        className={`md:hidden absolute top-16 left-0 w-full bg-[#000000] text-[#F5F5F5] flex flex-col space-y-4 p-6 text-center transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a href="#about" className="hover:text-[#d16cff]" onClick={() => setMenuOpen(false)}>
            Sobre
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-[#d16cff]" onClick={() => setMenuOpen(false)}>
            Projetos
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#d16cff]" onClick={() => setMenuOpen(false)}>
            Contato
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
