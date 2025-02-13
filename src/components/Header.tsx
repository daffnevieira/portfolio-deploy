import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#000000] shadow-md py-4 w-full fixed top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <h1 className="text-2xl font-bold text-[#CEC2FF] hover:text-[#CEC2FF] ml-4 md:ml-16">Daffne.java</h1>
        <button className="md:hidden text-[#F5F5F5] focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <ul className="hidden md:flex space-x-6 mr-4 md:mr-12">
          <li><a href="#about" className="text-[#F5F5F5] hover:text-[#CEC2FF]">Sobre</a></li>
          <li><a href="#projects" className="text-[#F5F5F5] hover:text-[#CEC2FF]">Projetos</a></li>
          <li><a href="#contact" className="text-[#F5F5F5] hover:text-[#CEC2FF]">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
