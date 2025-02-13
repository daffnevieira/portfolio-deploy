import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-[#CEC2FF] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#333333] mb-6">Sobre mim</h2>
        <p className="text-lg text-[#333333] text-center max-w-3xl mx-auto mb-4">
          Minha jornada na tecnologia começou <strong>na infância</strong>, impulsionada pela minha <strong>curiosidade natural</strong>. Sempre adorei explorar como as coisas funcionavam. O primeiro contato com a programação foi através de um curso no <strong>Code.org</strong>, onde conquistei meu primeiro certificado ainda criança. 
        </p>
        <p className="text-lg text-[#333333] text-center max-w-3xl mx-auto mb-4">
          Hoje, sou uma <strong>Desenvolvedora Fullstack</strong> com foco em <strong>Back-end</strong>, trabalhando com tecnologias como <strong>Java, SpringBoot, MySQL, Node.js, React, TailwindCSS</strong> e <strong>TypeScript</strong>. Amo transformar ideias em soluções criativas!
        </p>
        <p className="text-lg text-[#333333] text-center max-w-3xl mx-auto">
          Estou em <strong>constante aprendizado</strong>. Recentemente me formei no <strong>Bootcamp de Pessoa Desenvolvedora Java Fullstack</strong> pela <strong>Generation</strong>. Agora, estou pronta para encarar <strong>novos desafios</strong> e crescer ainda mais na área!
        </p>
        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-block py-3 px-8 bg-[#FF34CC] text-white text-lg font-bold rounded-2xl shadow-lg hover:bg-[#A8007E] transition duration-300"
          >
             Vamos criar algo incrível juntos?
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
