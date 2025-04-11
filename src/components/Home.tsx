import { FaLinkedin, FaFileAlt } from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-screen w-full bg-black text-[#E3A7FF] px-6 py-16 flex flex-col md:flex-row items-center justify-center md:gap-12 lg:gap-8 xl:gap-6">
      <div className="w-full md:w-[30%] flex justify-center animate-fade-in">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQFDHY5D1g2q6A/profile-displayphoto-shrink_400_400/B4DZVO3V7rHYAg-/0/1740784887223?e=1747872000&v=beta&t=P3StenYw3pleimH4F8CH1YcpBsvD2uZf7v0HmyPZ4Uo"
          alt="Daffne Dev"
          className="rounded-full w-44 h-44 sm:w-64 sm:h-64 object-cover border-4 border-[#A84CC6] shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="w-full md:w-[70%] max-w-3xl text-center md:text-left animate-slide-up">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white leading-snug">
          Olá, eu sou <span className="text-[#d16cff]">Daffne</span>
        </h1>
        <p className="text-base sm:text-lg text-[#c39edb] mb-8 max-w-xl">
          Seja bem-vindo ao meu universo tech! Aqui compartilho projetos, aprendizados e minha evolução como desenvolvedora de software.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/daffne-vieira/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#82299b] text-white rounded-full font-medium hover:bg-[#A8007E] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://docs.google.com/document/d/18uZ0cM-koKYgg6bQxEi3yX35L5qRYVLf/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#82299b] text-white rounded-full font-medium hover:bg-[#A8007E] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaFileAlt size={20} /> Currículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
