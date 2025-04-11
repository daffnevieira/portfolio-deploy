const About = () => {
  return (
    <section id="about" className="bg-[#000000] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#CEC2FF] mb-6">Um pouco sobre mim...</h2>
        
        <p className="text-lg text-[#F5F5F5] text-center max-w-3xl mx-auto mb-4">
          Desde muito nova, sempre fui fascinada por tecnologia. Tinha uma curiosidade enorme sobre como tudo funcionava — e também sobre como poderia funcionar de forma diferente. A tecnologia sempre me despertou encantamento e possibilidades.
        </p>

        <p className="text-lg text-[#F5F5F5] text-center max-w-3xl mx-auto mb-4">
          Ainda no ensino médio, consegui investir no meu primeiro curso de programação, e desde então, mergulhei de vez nesse universo. Foi o começo de uma jornada que sigo com muita paixão até hoje.
        </p>
        
        <p className="text-lg text-[#F5F5F5] text-center max-w-3xl mx-auto mb-4">
          Atualmente, sou <strong className="text-[#CEC2FF]">Desenvolvedora Fullstack</strong>, com foco principal em <strong className="text-[#CEC2FF]">Back-end</strong>. Trabalho com tecnologias como <strong className="text-[#CEC2FF]">Java, SpringBoot, MySQL, Node.js, React, TailwindCSS</strong> e <strong className="text-[#CEC2FF]">TypeScript</strong>. Estou sempre buscando aprender mais e evoluir a cada projeto.
        </p>
        
        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-block py-3 px-8 bg-[#82299b] text-white text-lg font-bold rounded-2xl shadow-lg hover:bg-[#A8007E] transition duration-300"
          >
            Vamos criar algo incrível juntos?
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
